interface AIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class AIService {
  private static readonly API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  private static readonly MODEL = 'qwen/qwen3-235b-a22b-07-25:free';

  static async generateReadme(cvText: string): Promise<string> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    const prompt = `Based on the following CV/Resume content, generate a comprehensive GitHub README in Markdown format that is professional, modern, and visually appealing. 

IMPORTANT FORMATTING RULES:
- Use proper GitHub-flavored Markdown syntax
- Include proper spacing between sections
- Use HTML tags only when necessary for alignment and badges
- Ensure the output renders beautifully on GitHub
- DO NOT wrap your response in markdown code blocks (\`\`\`markdown)
- Return ONLY the raw markdown content without any code block formatting

Follow this exact structure:

<h1 align="center">Hi 👋, I'm [Name]</h1>
<h3 align="center">[Title/Role]</h3>

<p align="center">
  <a href="[website]"><img src="https://img.shields.io/badge/Website-[domain]-blue?style=for-the-badge&logo=google-chrome&logoColor=white" /></a>
  <a href="[github]"><img src="https://img.shields.io/badge/GitHub-[username]-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="[email]"><img src="https://img.shields.io/badge/Email-[email]-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="[linkedin]"><img src="https://img.shields.io/badge/LinkedIn-[name]-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
</p>

---

## 🧠 About Me

- 🎯 [Professional summary point]
- 🚀 [Achievement or experience point]
- 🧠 [Skills or passion point]
- 🎓 [Education or current status]

---

## 🛠️ Skills & Technologies

### 💻 Languages
![Language1](https://img.shields.io/badge/[Language1]-[Color]?style=flat-square&logo=[logo]&logoColor=white)
![Language2](https://img.shields.io/badge/[Language2]-[Color]?style=flat-square&logo=[logo]&logoColor=white)

### ⚙️ Frameworks & Tools
![Framework1](https://img.shields.io/badge/[Framework1]-[Color]?style=flat-square&logo=[logo]&logoColor=white)
![Framework2](https://img.shields.io/badge/[Framework2]-[Color]?style=flat-square&logo=[logo]&logoColor=white)

### 🗃️ Databases
![Database1](https://img.shields.io/badge/[Database1]-[Color]?style=flat-square&logo=[logo]&logoColor=white)
![Database2](https://img.shields.io/badge/[Database2]-[Color]?style=flat-square&logo=[logo]&logoColor=white)

---

## 📱 Projects

| Project | Description | Tech Stack |
|---------|-------------|------------|
| **[Project Name]** | [Brief description] | [Technologies used] |
| **[Project Name]** | [Brief description] | [Technologies used] |

---

## 📜 Certificates

- [Certificate Name] - [Link or description]
- [Certificate Name] - [Link or description]

---

## 📫 Contact

- 💼 [Platform]: [Link or username]
- 🌍 Website: [Website URL]
- 📧 Email: [Email address]
- 📞 Phone: [Phone number if provided]

---

<p align="center">
  <em>⚡ "[Inspirational quote related to coding/development]"</em>
</p>

CV Content:
${cvText}

Generate only the clean, well-formatted Markdown content with proper GitHub syntax. Do not include any explanations or additional formatting. Do not wrap the output in code blocks or use \`\`\`markdown formatting:`;

    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.MODEL,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: AIResponse = await response.json();
      let content = data.choices[0]?.message?.content || 'Failed to generate README content';
      
      // Remove markdown code block wrapping if present
      content = content.replace(/^```markdown\s*\n/, '').replace(/\n```\s*$/, '');
      content = content.replace(/^```\s*\n/, '').replace(/\n```\s*$/, '');
      
      return content;
    } catch (error) {
      console.error('AI Service Error:', error);
      throw new Error('Failed to generate README content');
    }
  }
}