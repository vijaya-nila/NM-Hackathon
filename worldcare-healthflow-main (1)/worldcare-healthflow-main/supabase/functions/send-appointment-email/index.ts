import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentEmailRequest {
  name: string;
  email: string;
  phone: string;
  problem: string;
  doctorName: string;
  doctorSpecialization: string;
  date: string;
  time: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      problem, 
      doctorName, 
      doctorSpecialization,
      date, 
      time 
    }: AppointmentEmailRequest = await req.json();

    console.log("Sending appointment confirmation email to:", email);

    const emailResponse = await resend.emails.send({
      from: "WorldCare Hospital <onboarding@resend.dev>",
      to: [email],
      subject: "Appointment Confirmation - WorldCare Hospital",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0EA5E9, #06B6D4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .detail-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #0EA5E9; border-radius: 5px; }
            .detail-row { margin: 10px 0; }
            .label { font-weight: bold; color: #0EA5E9; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
            .button { background: #0EA5E9; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>WorldCare Hospital</h1>
              <p>Caring for Life</p>
            </div>
            <div class="content">
              <h2>Appointment Confirmed! ✅</h2>
              <p>Dear ${name},</p>
              <p>Your appointment has been successfully scheduled at WorldCare Hospital.</p>
              
              <div class="detail-box">
                <h3>Appointment Details</h3>
                <div class="detail-row">
                  <span class="label">Patient Name:</span> ${name}
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span> ${phone}
                </div>
                <div class="detail-row">
                  <span class="label">Email:</span> ${email}
                </div>
                <div class="detail-row">
                  <span class="label">Medical Issue:</span> ${problem}
                </div>
                <div class="detail-row">
                  <span class="label">Doctor:</span> ${doctorName}
                </div>
                <div class="detail-row">
                  <span class="label">Specialization:</span> ${doctorSpecialization}
                </div>
                <div class="detail-row">
                  <span class="label">Date:</span> ${date}
                </div>
                <div class="detail-row">
                  <span class="label">Time:</span> ${time}
                </div>
              </div>

              <h3>Important Instructions</h3>
              <ul>
                <li>Please arrive 15 minutes before your scheduled time</li>
                <li>Bring your ID proof and any previous medical records</li>
                <li>Wear a face mask for your safety and others</li>
                <li>For emergencies, call us at +91 123-456-7890</li>
              </ul>

              <p>If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance.</p>
              
              <div style="text-align: center;">
                <a href="tel:+911234567890" class="button">Call Us: +91 123-456-7890</a>
              </div>

              <p>Thank you for choosing WorldCare Hospital. We look forward to serving you!</p>
            </div>
            <div class="footer">
              <p><strong>WorldCare Hospital</strong></p>
              <p>123 Medical Street, Healthcare City, India</p>
              <p>Email: info@worldcare-hospital.com | Phone: +91 123-456-7890</p>
              <p>© 2025 WorldCare Hospital. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-appointment-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
