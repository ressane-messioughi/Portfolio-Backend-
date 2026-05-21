
import { sendEmail } from "../services/contact.service.js";

const sendSimpleEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    await sendEmail({ to, subject, text });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
};
export default {
    sendSimpleEmail
}