# Static Export Guide for GitRead

## Overview

This guide explains how to handle API routes when deploying GitRead as a static export to standard hosting providers like OVH.com.

## Understanding the Limitations

When using `next build` with `output: 'export'` in your Next.js configuration, all server-side functionality is removed, including:

- API Routes
- Server Components
- Server Actions
- Middleware
- Route Handlers

## ✅ Static Export Compatibility

**Good news!** This GitRead application has been updated to work fully in static export mode. The following functionality now works client-side:

- ✅ **PDF Parsing**: Uses PDF.js directly in the browser
- ✅ **AI README Generation**: Connects directly to OpenRouter API from the client
- ✅ **File Processing**: All processing happens in the browser

The original API routes (`/api/generate-readme` and `/api/parse-pdf`) are no longer needed for static export.

## Setup for Static Export

### Environment Variables

For the static export to work, you need to set up your environment variables with the `NEXT_PUBLIC_` prefix so they can be used client-side:

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Set your OpenRouter API key**:
   ```bash
   # In .env.local
   NEXT_PUBLIC_OPENROUTER_API_KEY=your_actual_api_key_here
   ```

3. **Optional: Customize the AI model or API URL**:
   ```bash
   # Optional customizations
   NEXT_PUBLIC_OPENROUTER_MODEL=deepseek/deepseek-chat-v3-0324:free
   NEXT_PUBLIC_OPENROUTER_API_URL=https://openrouter.ai/api/v1/chat/completions
   ```

### Build and Deploy

1. **Build the static export**:
   ```bash
   npm run build
   ```

2. **Deploy the `out/` folder** to any static hosting provider (OVH, Netlify, Vercel, GitHub Pages, etc.)

### Security Note

⚠️ **Important**: Since the API key is embedded in the client-side code, make sure to:
- Use API keys with appropriate rate limits
- Monitor your API usage
- Consider implementing additional security measures if needed

## Legacy Solutions for API Routes (No Longer Needed)

### Option 1: External API Service (Recommended)

The best approach is to move your API functionality to an external service:

1. **Deploy API as a Separate Service**:
   - Create a simple Express.js or Next.js API-only project
   - Deploy it to a Node.js-compatible hosting service (Vercel, Netlify, Railway, Render, etc.)
   - Update your frontend code to point to this external API

2. **Update Environment Variables**:
   ```javascript
   // In your .env.production file
   NEXT_PUBLIC_API_URL=https://your-api-service.com
   ```

3. **Update API Calls in Your Code**:
   ```javascript
   // Instead of
   const response = await fetch('/api/generate-readme', {...});
   
   // Use
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate-readme`, {...});
   ```

### Option 2: Serverless Functions

Many hosting providers offer serverless functions that can replace your API routes:

- **Netlify Functions**
- **Vercel Edge Functions**
- **Cloudflare Workers**
- **AWS Lambda**

### Option 3: Client-Side Processing (Limited)

For some functionality, you might be able to move processing to the client side:

1. **PDF Parsing**: Use PDF.js directly in the browser
2. **AI Processing**: Connect directly to OpenRouter API from the client (requires secure handling of API keys)

## Implementation Steps

1. **Create External API Project**:
   ```bash
   mkdir gitread-api
   cd gitread-api
   npm init -y
   npm install express cors dotenv openai pdf-parse
   ```

2. **Copy API Logic**:
   Copy your existing API route handlers and supporting code to the new project.

3. **Update Frontend Code**:
   Modify all API calls in your frontend code to point to your external API service.

4. **Deploy API Service**:
   Deploy your API service to a Node.js-compatible hosting provider.

5. **Test End-to-End**:
   Test the complete flow with your static frontend and external API.

## Security Considerations

1. **CORS Configuration**: Ensure your API service has proper CORS headers to allow requests from your static site.

2. **API Keys**: Never expose API keys in your client-side code. Use environment variables on your API service.

3. **Rate Limiting**: Implement rate limiting on your API service to prevent abuse.

## Example External API Implementation

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENROUTER_API_KEY,
  baseURL: process.env.NEXT_PUBLIC_OPENROUTER_API_URL || 'https://openrouter.ai/api/v1',
});

app.post('/api/generate-readme', async (req, res) => {
  try {
    const { cvText } = req.body;
    
    if (!cvText || typeof cvText !== 'string') {
      return res.status(400).json({ error: 'CV text is required' });
    }
    
    // Your existing AI service logic here
    const completion = await openai.chat.completions.create({
      model: 'qwen/qwen3-235b-a22b-07-25:free',
      messages: [
        {
          role: 'system',
          content: 'You are a professional README generator.'
        },
        {
          role: 'user',
          content: `Generate a GitHub README based on this CV: ${cvText}`
        }
      ]
    });
    
    const readmeContent = completion.choices[0].message.content;
    return res.json({ content: readmeContent });
  } catch (error) {
    console.error('README generation error:', error);
    return res.status(500).json({ error: 'Failed to generate README content' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
```