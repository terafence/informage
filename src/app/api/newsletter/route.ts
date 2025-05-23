/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

// Email template for newsletter subscription confirmation
const createConfirmationEmailTemplate = (email: string) => {
  return {
    subject: 'Welcome to Our Newsletter!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; text-align: center; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
            .highlight { color: #10b981; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Welcome Aboard!</h1>
              <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 16px;">Thank you for subscribing to our newsletter</p>
            </div>
            
            <div class="content">
              <h2 style="color: #374151; margin-bottom: 20px;">You're All Set!</h2>
              <p style="color: #6b7280; font-size: 16px; margin-bottom: 25px;">
                Hi there! We're excited to have you join our community. You'll now receive our latest updates, 
                insights, and exclusive content directly in your inbox.
              </p>
              
              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #166534; margin: 0 0 10px 0;">What to Expect:</h3>
                <ul style="color: #166534; text-align: left; margin: 0; padding-left: 20px;">
                  <li>Industry insights and trends</li>
                  <li>Product updates and announcements</li>
                  <li>Exclusive content and resources</li>
                  <li>Expert tips and best practices</li>
                </ul>
              </div>
              
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                <strong>Email:</strong> <span class="highlight">${email}</span>
              </p>
            </div>
            
            <div class="footer">
              <p>You can unsubscribe at any time by clicking the unsubscribe link in our emails.</p>
              <p>This confirmation was sent because you subscribed to our newsletter.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Welcome to Our Newsletter!
      
      Thank you for subscribing! You'll now receive our latest updates, insights, and exclusive content directly in your inbox.
      
      What to expect:
      - Industry insights and trends
      - Product updates and announcements
      - Exclusive content and resources
      - Expert tips and best practices
      
      Subscribed email: ${email}
      
      You can unsubscribe at any time by clicking the unsubscribe link in our emails.
    `
  };
};

// Email template for internal notification
const createNotificationEmailTemplate = (email: string) => {
  return {
    subject: 'New Newsletter Subscription',
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
            .email-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 15px; font-family: monospace; color: #374151; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just joined your mailing list</p>
            </div>
            
            <div class="content">
              <h3 style="color: #374151; margin-bottom: 15px;">Subscriber Details:</h3>
              <div class="email-box">
                ${email}
              </div>
              
              <p style="color: #6b7280; margin-top: 20px; font-size: 14px;">
                Subscription timestamp: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Newsletter Subscription
      
      Email: ${email}
      Subscription timestamp: ${new Date().toLocaleString()}
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

// In-memory storage for demonstration (replace with database in production)
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate the email
    const validationResult = newsletterSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address',
          errors: validationResult.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Check if email is already subscribed
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'This email is already subscribed to our newsletter.' 
        },
        { status: 409 }
      );
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_FROM) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Newsletter service is not configured. Please try again later.' 
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
          message: 'Newsletter service is temporarily unavailable. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Add email to subscribers (in production, save to database)
    subscribers.add(email.toLowerCase());

    // Send confirmation email to subscriber
    const confirmationTemplate = createConfirmationEmailTemplate(email);
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: confirmationTemplate.subject,
      html: confirmationTemplate.html,
      text: confirmationTemplate.text,
    };

    // Send notification email to admin
    const notificationTemplate = createNotificationEmailTemplate(email);
    const notificationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM,
      subject: notificationTemplate.subject,
      html: notificationTemplate.html,
      text: notificationTemplate.text,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(confirmationMailOptions),
      transporter.sendMail(notificationMailOptions)
    ]);

    // Log successful subscription (without sensitive data)
    console.log(`Newsletter subscription successful: ${email}`);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Welcome aboard! Please check your email for confirmation.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Get subscriber count (optional endpoint for admin)
export async function GET() {
  try {
    return NextResponse.json(
      { 
        success: true, 
        count: subscribers.size,
        message: `Total subscribers: ${subscribers.size}` 
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Unable to retrieve subscriber count' 
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
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