import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';

class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to: string, link: string): Promise<SentMessageInfo> {
    const message = {
      from: process.env.SMTP_USER,
      to: to,
      subject: 'Активация аккаунта на ' + process.env.API_URL,
      text: `Пожалуйста, перейдите по ссылке ${link}`,
      html: `<b>Пожалуйста, перейдите по ссылке, чтобы подтвердить свою почту:</b> <a href="${link}">${link}</a>`,
    };

    return await this.transporter.sendMail(message);
  }
}

export default new MailService();
