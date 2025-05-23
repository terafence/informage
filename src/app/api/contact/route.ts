/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for the contact form
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required').max(100, 'Company name too long'),
  interestedIn: z.enum(['defense', 'it'], {
    errorMap: () => ({ message: 'Please select a service type' })
  }),
  remarks: z.string().max(1000, 'Remarks too long').optional()
});

// Email template for the contact form submission
const createEmailTemplate = (data: any) => {
  const serviceType = data.interestedIn === 'defense' 
    ? 'Defense related services' 
    : 'IT and cybersecurity related services';

  return {
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #374151; margin-bottom: 5px; display: block; }
            .value { color: #6b7280; background: #f9fafb; padding: 10px; border-radius: 4px; border-left: 3px solid #10b981; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new inquiry</p>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">Full Name:</span>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Address:</span>
                <div class="value">${data.email}</div>
              </div>
              
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${data.company}</div>
              </div>
              
              <div class="field">
                <span class="label">Service Interest:</span>
                <div class="value">${serviceType}</div>
              </div>
              
              ${data.remarks ? `
                <div class="field">
                  <span class="label">Additional Remarks:</span>
                  <div class="value">${data.remarks}</div>
                </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
              <p>Please respond to ${data.email} to continue the conversation.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Company: ${data.company}
      Service Interest: ${serviceType}
      ${data.remarks ? `Remarks: ${data.remarks}` : ''}
      
      Please respond to ${data.email} to continue the conversation.
    `
  };
};

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
    secure: process.env.EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Check if email configuration is available
    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_FROM) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is not configured. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service is temporarily unavailable. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Generate email content
    const emailTemplate = createEmailTemplate(formData);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // Send to yourself
      replyTo: formData.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    };

    await transporter.sendMail(mailOptions);

    // Log successful submission (without sensitive data)
    console.log(`Contact form submitted successfully by ${formData.firstName} ${formData.lastName} from ${formData.company}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}