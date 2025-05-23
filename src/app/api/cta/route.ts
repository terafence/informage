import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for the form data
const CTAFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  interest: z.enum(['ring', 'pyramid', 'boom-box', 'general'], {
    errorMap: () => ({ message: 'Please select a valid interest option' })
  })
});

// Rate limiting store (in production, use Redis or database)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function getRateLimitKey(ip: string, email: string): string {
  return `${ip}:${email}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(key);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of requestCounts.entries()) {
    if (now > record.resetTime) {
      requestCounts.delete(key);
    }
  }
}, RATE_LIMIT_WINDOW);

async function createEmailTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
    secure: process.env.EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Verify connection
  try {
    await transporter.verify();
    return transporter;
  } catch (error) {
    console.error('Email server connection failed:', error);
    throw new Error('Email service unavailable');
  }
}

function getInterestDisplayName(interest: string): string {
  const interestMap: Record<string, string> = {
    'ring': 'Ring C-UxS',
    'pyramid': 'Pyramid GNSS',
    'boom-box': 'Boom-Box',
    'general': 'General Information'
  };
  return interestMap[interest] || interest;
}

async function sendNotificationEmail(formData: z.infer<typeof CTAFormSchema>) {
  const transporter = await createEmailTransporter();
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New CTA Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { padding: 8px; background: white; border-radius: 4px; border: 1px solid #d1d5db; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New CTA Form Submission</h1>
                <p>A new contact request has been received from your website.</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${formData.email}</div>
                </div>
                <div class="field">
                    <div class="label">Company:</div>
                    <div class="value">${formData.company}</div>
                </div>
                <div class="field">
                    <div class="label">Primary Interest:</div>
                    <div class="value">${getInterestDisplayName(formData.interest)}</div>
                </div>
                <div class="field">
                    <div class="label">Submitted At:</div>
                    <div class="value">${new Date().toLocaleString()}</div>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated message from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const textContent = `
New CTA Form Submission

Email: ${formData.email}
Company: ${formData.company}
Primary Interest: ${getInterestDisplayName(formData.interest)}
Submitted At: ${new Date().toLocaleString()}

This is an automated message from your website contact form.
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_FROM, // Send to the same address for notifications
    subject: `New Contact Request from ${formData.company}`,
    text: textContent,
    html: htmlContent,
  });
}

async function sendConfirmationEmail(formData: z.infer<typeof CTAFormSchema>) {
  const transporter = await createEmailTransporter();
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Thank You for Your Interest</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .footer { background: #374151; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
            .highlight { background: #ecfdf5; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Your Interest!</h1>
                <p>We've received your request for information about our cybersecurity solutions.</p>
            </div>
            <div class="content">
                <p>Hello ${formData.company} Team,</p>
                
                <p>Thank you for your interest in <strong>${getInterestDisplayName(formData.interest)}</strong>. We're excited to help you secure your operations with our advanced cybersecurity solutions.</p>
                
                <div class="highlight">
                    <h3>What happens next?</h3>
                    <ol>
                        <li><strong>Initial Consultation:</strong> A dedicated specialist will reach out within 24 hours to discuss your specific challenges</li>
                        <li><strong>Solution Design:</strong> Our engineering team will craft a tailored protection strategy</li>
                        <li><strong>Implementation:</strong> Rapid deployment with comprehensive training and ongoing support</li>
                    </ol>
                </div>
                
                <p>In the meantime, feel free to explore our resources or reach out if you have any immediate questions.</p>
                
                <p>Best regards,<br>
                The Cybersecurity Solutions Team</p>
            </div>
            <div class="footer">
                <p>This is an automated confirmation message. Please do not reply to this email.</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const textContent = `
Thank You for Your Interest!

Hello ${formData.company} Team,

Thank you for your interest in ${getInterestDisplayName(formData.interest)}. We're excited to help you secure your operations with our advanced cybersecurity solutions.

What happens next?
1. Initial Consultation: A dedicated specialist will reach out within 24 hours to discuss your specific challenges
2. Solution Design: Our engineering team will craft a tailored protection strategy  
3. Implementation: Rapid deployment with comprehensive training and ongoing support

In the meantime, feel free to explore our resources or reach out if you have any immediate questions.

Best regards,
The Cybersecurity Solutions Team

This is an automated confirmation message. Please do not reply to this email.
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: formData.email,
    subject: 'Thank you for your interest in our cybersecurity solutions',
    text: textContent,
    html: htmlContent,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Parse and validate request body
    const body = await request.json();
    const validatedData = CTAFormSchema.parse(body);

    // Check rate limiting
    const rateLimitKey = getRateLimitKey(ip, validatedData.email);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    // Validate required environment variables
    const requiredEnvVars = [
      'EMAIL_SERVER_HOST',
      'EMAIL_SERVER_PORT', 
      'EMAIL_SERVER_USER',
      'EMAIL_SERVER_PASSWORD',
      'EMAIL_FROM'
    ];

    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service configuration error. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Send emails
    await Promise.all([
      sendNotificationEmail(validatedData),
      sendConfirmationEmail(validatedData)
    ]);

    // Log successful submission (consider using a proper logging service)
    console.log('CTA form submission processed:', {
      email: validatedData.email,
      company: validatedData.company,
      interest: validatedData.interest,
      timestamp: new Date().toISOString(),
      ip: ip.substring(0, 10) + '...' // Log partial IP for privacy
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Your request has been submitted successfully. We\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('CTA form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please check your form data and try again.',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}