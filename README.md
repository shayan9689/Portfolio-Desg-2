# My Portfolio Wesbite - Overview 🚀

This repository contains the open source version of my porfolio website.
Do check it out!

## Instructions 🛠️

I have modified the gsap club plugins with the trial plugins, but with the trial plugin you cannot host it🔴. So for Club plugins, Check out here: https://gsap.com/docs/v3/Installation/

**Techstack** - React, TypeScript, GSAP, ThreeJS, WebGL, HTML, Css, JavaScript

![Portfolio-Preview](public/images/preview.png)

## Contact form (receive emails) 📧

To receive messages from the contact form in your inbox:

1. **Sign up at [Formspree](https://formspree.io)** (free).
2. **Create a new form** and set the notification email to the address where you want to receive messages (e.g. `shayan.umairadditise@gmail.com`).
3. **Copy your form ID** from the form’s integration page (it looks like `xjvqwkqz`; the URL is `https://formspree.io/f/YOUR_FORM_ID`).
4. **Local development:** In the project root, create a file named `.env` and add:
   ```env
   VITE_FORMSPREE_ID=your_form_id_here
   ```
5. **Production (Vercel):** In your Vercel project → **Settings** → **Environment Variables**, add:
   - **Name:** `VITE_FORMSPREE_ID`
   - **Value:** your Formspree form ID  
   Then **redeploy** the project.

After this, form submissions will be sent to Formspree and you’ll get an email for each submission.

## License

This project is open source and available under the [MIT License](LICENSE).
