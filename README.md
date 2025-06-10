# ChapaBurguer - Rock N' Roll Hamburger Landing Page 🍔

A dynamic and rebellious landing page for ChapaBurguer, featuring a metal/rock theme with interactive elements and a complete ordering system.

![lsgdigital(1)](https://github.com/user-attachments/assets/a8f5e180-90f8-4031-8a92-2fe98dfb308a)

## 🌟 Features


- **Interactive UI Components**
  - Animated hero section with parallax effects
  - Dynamic menu cards with hover effects
  - Shopping cart functionality
  - Address lookup using CEP (Brazilian postal code)
  - WhatsApp integration for orders

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interface

- **Performance Optimized**
  - Lazy loading images
  - Optimized animations
  - Fast page load times

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** 
  - Tailwind CSS for utility-first styling
  - shadcn/ui for UI components
- **Animations:** Custom CSS animations and transitions
- **Icons:** Lucide React icons
- **State Management:** React Hooks
- **Form Handling:** React Hook Form
- **API Integration:** Fetch API

## 📥 Installation

1. **Clone the repository**
```sh
git clone https://github.com/yourusername/chapa-burgues-splash.git
cd chapa-burgues-splash
```

2. **Install dependencies**
```sh
npm install
```

3. **Set up environment variables**
```sh
cp .env.example .env
```

4. **Start development server**
```sh
npm run dev
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── layout/      # Layout components
├── hooks/           # Custom React hooks
├── lib/            # Utility functions and constants
├── pages/          # Page components
├── styles/         # Global styles and Tailwind config
└── types/          # TypeScript type definitions
```

## 🎨 UI Components

The project uses [shadcn/ui](https://ui.shadcn.com/) for base components, with custom styling applied through Tailwind CSS. Key components include:

- Button
- Card
- Dialog
- Sheet
- Form elements

## 🔧 Configuration

### Tailwind CSS

Tailwind configuration can be found in `tailwind.config.ts`. The project uses custom theme extensions for:

- Colors
- Fonts
- Animations
- Shadows

### Vite

Vite configuration is in `vite.config.ts`, with optimizations for:

- Fast refresh
- Path aliases
- Build optimization

## 📱 PWA Support

This project is PWA-ready with:

- Service worker
- Manifest file
- Offline support
- Install prompts

## 🌐 Deployment

1. **Build the project**
```sh
npm run build
```

2. **Deploy using Lovable**
- Visit [Lovable Project](https://lovable.dev/projects/49bab759-0dd0-4821-b674-a208109abbe2)
- Click Share -> Publish

### Custom Domain Setup

To use a custom domain:

1. Go to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the [domain setup guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Design inspiration from rock/metal aesthetics
- [shadcn/ui](https://ui.shadcn.com/) for base components
- [Lucide](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📞 Support

For support, email contact@chapaburguer.com or create an issue in this repository.
