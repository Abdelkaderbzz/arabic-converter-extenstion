# arabic converter

A modern web application that converts Tunisian Arabic text between Latin and Arabic scripts, with support for both Tunisian dialect and Modern Standard Arabic (Fusha).

## Features

- 🔄 Bidirectional conversion:
  - Latin to Arabic script (Tunisian dialect)
  - Latin to Modern Standard Arabic (Fusha)
- 🌐 Bilingual interface (English/Arabic)
- 🔤 Smart number-to-letter conversion (3 → ع, 7 → ح, etc.)
- 📝 Recent conversions history
- 💾 Local storage persistence
- 🌙 RTL/LTR support
- 📱 Responsive design

## Examples

| Latin Input        | Tunisian Output | MSA Output            |
| ------------------ | --------------- | --------------------- |
| 3aslema            | عسلامة          | السلام عليكم          |
| chneya 7alek?      | شنية حالك؟      | كيف حالك؟             |
| taw nemchi lel dar | توا نمشي للدار  | سأذهب إلى المنزل الآن |

## Tech Stack

- ⚡ Next.js 14 (App Router)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🧩 Shadcn/UI
- 🤖 Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+
- A free [Google AI Studio](https://aistudio.google.com/apikey) API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/braiekhazem/tunisian-converter.git
cd tunisian-converter
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example
```

Add your Gemini API key to `.env`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ for the Tunisian community
- Powered by [Google Gemini](https://ai.google.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
