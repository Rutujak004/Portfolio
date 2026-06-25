# Portfolio Template

A modern, responsive, and highly animated portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Features a dark-themed glassmorphic design optimized for Full-Stack and NLP Engineers.

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customizing the Content

All your static content is centralized in `src/data/index.ts`.
- Update all `[YOUR_...]` placeholders in `src/data/index.ts` with your actual information.
- The `skills`, `experience`, and `projects` arrays map directly to the UI sections on the home and subpages.

### Placeholder Assets
- **Profile Photo**: Add your professional photo to the `public/` directory (e.g., `public/photo1.jpg`). Recommended: a square image, minimum 400x400px. Make sure the `photoUrl` in `src/data/index.ts` matches this filename (e.g., `"/photo1.jpg"`).
- **CV File**: Add your resume PDF to the `public/` directory (e.g., `public/YourName_CV.pdf`). Update the `cvUrl` field in your data file.

## 📧 Contact Form Integration

The `/contact` page includes a working frontend form that POSTs to `/api/contact`. 
By default, this API route logs messages to your local terminal. To receive real emails:
- **Web3Forms / Formspree**: Change the `fetch` URL in `ContactForm.tsx` to your provided endpoint.
- **Nodemailer / Resend**: Update `src/app/api/contact/route.ts` with the respective SDK code and environment variables.

## ☁️ Deploying to Vercel

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel via the Vercel dashboard.
3. No environment variables are needed by default (unless you set up email API keys).
4. Build command: `npm run build`
5. Output directory: `.next` (Vercel detects this automatically).
6. Custom domain: You can add and configure a custom domain in your Vercel project settings.
