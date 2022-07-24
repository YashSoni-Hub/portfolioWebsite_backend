import { createTransport } from "nodemailer";

export const sendMail = async (userMessage) => {
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail({
    subject: "Contact Request From Portfolio",
    to: process.env.MY_MAIL,
    from: process.env.MY_MAIL,
    text: userMessage,
  });
};
