# GitRead - CV to README Generator

🚀 **Transform your CV into a beautiful GitHub README with AI**

GitRead is a modern, AI-powered web application that converts your CV/Resume PDF into a comprehensive, professional GitHub README file. Built with Next.js, Tailwind CSS, and powered by DeepSeek AI.

## ✨ Features

- **📄 PDF Upload**: Drag & drop or click to upload your CV in PDF format
- **🤖 AI Processing**: Uses DeepSeek AI to analyze and extract information from your CV
- **📝 Live Editor**: Edit your generated README with real-time preview
- **👀 Live Preview**: See exactly how your README will look on GitHub
- **⬇️ Download**: Download your customized README.md file
- **🎨 Modern UI**: Clean, minimal, and aesthetically pleasing design
- **🌙 Dark Mode**: Automatic dark/light mode support
- **📱 Responsive**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Lucide React icons
- **File Handling**: React Dropzone
- **Markdown**: React Markdown
- **AI**: OpenRouter API with DeepSeek model
- **Development**: Turbopack for fast development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenRouter API key

### Installation

1. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set up environment variables**
   
   Add your OpenRouter API key to `.env.local`:
   ```env
   NEXT_PUBLIC_OPENROUTER_API_URL=https://openrouter.ai/api/v1/chat/completions
   NEXT_PUBLIC_OPENROUTER_MODEL=deepseek/deepseek-chat-v3-0324:free
   NEXT_OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

## 🌐 Deployment to Standard Hosting (like OVH.com)

GitRead is configured for static exports, making it compatible with standard web hosting providers like OVH.com that don't support Node.js server environments.

### Generating Static Files

1. **Build the static export**
   ```bash
   npm run export
   ```

2. **Locate the exported files**
   
   The static files will be generated in the `out` directory at the root of your project.

### Uploading to OVH or Similar Hosting

1. **Access your hosting control panel** (cPanel, Plesk, OVH Manager, etc.)

2. **Upload the contents of the `out` directory** to your web hosting using:
   - FTP client (like FileZilla)
   - Web-based file manager in your hosting control panel
   - SSH/SFTP if available

3. **Important hosting configuration**:
   - Ensure your hosting is configured to serve `index.html` files when a directory is accessed
   - If you're not hosting at the root domain (e.g., example.com/gitread/), uncomment and update the `basePath` in `next.config.ts`

### Troubleshooting Common Hosting Issues

- **404 errors**: Make sure your hosting provider is configured to handle client-side routing. You may need to add URL rewrite rules or use the `.htaccess` file included in the export.
- **API calls failing**: Remember that with static export, all API routes need to be replaced with external API endpoints as server-side functions won't work.
- **Environment variables**: Update your environment variables in the hosting provider's configuration if needed.

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate-readme/     # AI README generation endpoint
│   │   └── parse-pdf/           # PDF text extraction endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main application page
├── components/
│   ├── FileUpload.tsx           # Drag & drop file upload component
│   ├── LoadingSpinner.tsx       # Loading indicator component
│   └── MarkdownEditor.tsx       # Markdown editor with live preview
└── lib/
    ├── ai-service.ts            # OpenRouter AI service
    └── pdf-parser.ts            # PDF text extraction utility
```

## 🎯 How It Works

1. **Upload**: User uploads their CV in PDF format
2. **Extract**: Application extracts text content from the PDF
3. **Generate**: AI analyzes the CV content and generates a comprehensive README
4. **Edit**: User can edit the generated content with live preview
5. **Download**: User downloads the final README.md file

## 🔧 Configuration

### AI Model Configuration

The application uses the DeepSeek model via OpenRouter:

```typescript
const MODEL = 'deepseek/deepseek-chat-v3-0324:free';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
```

### File Upload Limits

- **File Type**: PDF only
- **File Size**: Maximum 10MB
- **File Count**: Single file upload

## 🎨 Design Philosophy

- **Minimal**: Clean, uncluttered interface
- **Modern**: Latest design trends and best practices
- **Accessible**: WCAG compliant with proper contrast ratios
- **Responsive**: Mobile-first design approach
- **Fast**: Optimized for performance with Next.js and Turbopack

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

---

**Built with ❤️ using Next.js, Tailwind CSS, and AI**

*Transform your professional story into code*
