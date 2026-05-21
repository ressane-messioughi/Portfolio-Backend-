import { transporter } from "../config/email.js";

const logoPath = "./src/config/assets/email-ressane.png";

export const sendEmail = async ({ to, subject, text }) => {
  return transporter.sendMail({
    from: `"Portfolio Ressane: Nouveau message reçu !" <${process.env.GMAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject,
    text,

    attachments: [
      {
        filename: "email-ressane.png",
        path: logoPath,
        cid: "logoressane",
      },
    ],

    html: `
<div style=" font-family: Arial, sans-serif; padding: 20px; background: #111d30fb ; border: 2px solid #2563eb; border-radius: 12px;">        
        <div style="
          max-width: 600px;
          margin: auto;
          background: #364153;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        ">

          <div style="text-align:center;">
            <img 
              src="cid:logoressane"
              alt="Portfolio Ressane"
              style="max-width:220px;"
            />
          </div>

          <h2 style="
            color: #919db0;
            text-align:center;
            padding:10px;
            background-color: #111d30fb;
            border-radius:8px;
            font-style: italic;
            font-weight: bold;
          ">
            Nouveau message reçu ⭐️
          </h2>

          <h2 style="
            color:#000;
            text-align:center;
            padding:10px;
            background-color:#fff;
            border-radius:8px;

          ">
            ${subject}
          </h2>

          <div style="
            background:#fff;
            padding:20px;
            border-radius:8px;
            color:#000;
            text-align:left;
            font-size:16px;
            line-height:1.6;
            font-family: Arial, sans-serif;
          ">
            ${text}
          </div>

          <div style="text-align:center;">
            <a 
              href="https://ressane.fr"
              style="
                display:inline-block;
                margin-top:30px;
                padding:14px 24px;
                background:#111d30fb;
                color:white;
                text-decoration:none;
                border-radius:8px;
                font-weight:bold;
              "
            >
              Voir le portfolio
            </a>
          </div>

          <p style="
            margin-top:40px;
            color:#fff;
            font-size:12px;
            text-align:center;
          ">
            © 2026 Portfolio Ressane
          </p>

        </div>
      </div>
    `,
  });
};
