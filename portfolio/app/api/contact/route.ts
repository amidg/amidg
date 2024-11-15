// import mail from '@sendgrid/mail';
// import { NextResponse } from 'next/server';

// // Create an api key in sendgrid and store someplace safe
// mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

// type ResponseData = {
//   status?: string;
//   message?: string;
// };

// export async function POST(request: Request) {
//   let response: ResponseData = {};
//   const body = await request.json();
//   // I know the formData I sent in my request has name, email, and message fields so I'm just manually grabbing them to format a message
//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Message: ${body.message}
//   `;
//   const data = {
//     to: "eugenearcher3@gmail.com",
//     from: "yevstrilets@gmail.com",
//     subject: 'Contact Message via Sendgrid',
//     text: message,
//     html: message.replace(/\r\n/g, '<br>'),
//   };

//   // Send the data and create a response object. I'm using status and message to display a success or fail notification in the UI
//   await mail
//     .send(data)
//     .then(() => {
//       response = {
//         status: 'success',
//         message: "Your message was sent. I'll be in contact shortly.",
//       };
//     })
//     .catch((error) => {
//       response = {
//         status: 'error',
//         message: `Message failed to send with error, ${error}`,
//       };
//     });

//   return NextResponse.json(response);
// }

import mail from '@sendgrid/mail';
import { z } from 'zod';
import { NextResponse } from 'next/server';

// Set your SendGrid API key
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  try {
    const body = await request.json();

    // Validate the request body using Zod
    const validatedData = contactSchema.parse(body);

    const message = `
      Name: ${validatedData.name}\r\n
      Email: ${validatedData.email}\r\n
      Message: ${validatedData.message}
    `;

    const data = {
      to: "eugenearcher3@gmail.com",
      from: "yevstrilets@gmail.com",
      subject: 'Contact Message via Sendgrid',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    };

    // Send the data and handle the response
    await mail
      .send(data)
      .then(() => {
        response = {
          status: 'success',
          message: "Your message was sent. I'll be in contact shortly.",
        };
      })
      .catch((error) => {
        response = {
          status: 'error',
          message: `Message failed to send with error: ${error}`,
        };
      });

  } catch (error) {
    // If validation fails, Zod will throw an error
    if (error instanceof z.ZodError) {
      response = {
        status: 'error',
        message: error.errors.map(err => err.message).join(', '),
      };
    } else {
      response = {
        status: 'error',
        message: 'Something went wrong.',
      };
    }
  }

  return NextResponse.json(response);
}