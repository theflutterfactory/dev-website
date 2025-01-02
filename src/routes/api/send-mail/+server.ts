import { SENDGRID_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }: { request: Request; }) {
  const { contactName, email, message } = await request.json();

  if (!contactName || !email || !message) {
    json({ message: 'Missing some data to send email' }, { status: 400 });
  }

  const formattedEmailMsg = {
    to: 'julian.currie@gmail.com',
    from: 'julian.currie@gmail.com',
    subject: 'Contact form on your portfolio',
    html: `Someone used the <b>contact form</b> on your site<br/><br/>
    Name: ${contactName}<br/>
    Email: ${email}<br/>
    Message: ${message}`
  };

  try {
    await sgMail.send(formattedEmailMsg);
    return json({ emailSentSuccessfully: true });
  } catch (err) {
    return json({ err }, { status: 500 });
  }

}