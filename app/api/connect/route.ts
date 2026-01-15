import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";


const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC!,
    process.env.MJ_APIKEY_PRIVATE!
);

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
    
        if (!data.name || !data.email || !data.message || !data.nickname) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }
        const response = await mailjet.post("send", { version: "v3.1" }).request({
            Messages: [
                {
                    From: { Email: "yash.jsh0@gmail.com", Name: "Portfolio Contact Form" },
                    To: [{ Email: process.env.CONTACT_EMAIL }],
                    Subject: `New message from ${data.name}`,
                    TextPart: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
                    HTMLPart: `<h3>New Contact Form Submission</h3>
                     <p><strong>Name:</strong> ${data.nickname}</p>
                     <p><strong>Email:</strong> ${data.email}</p>
                     <p><strong>Message:</strong><br/>${data.message}</p>`,
                },
            ],
        });
        return NextResponse.json({ message: "Email submitted successfully" }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to send Email" }, { status: 500 });
    }
}