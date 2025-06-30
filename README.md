# Speech Therapist Website

A professional, single-page website for speech therapists built with 11ty (Eleventy). Features a clean, natural design with configurable colors and Netlify Forms integration.

## Features

- **Single-page design** with smooth scrolling navigation
- **Four main sections**: Welcome, Services, Bio, and Contact
- **Markdown content** for easy content management
- **Netlify Forms integration** for contact form functionality
- **Responsive design** that works on all devices
- **Configurable color scheme** using CSS variables
- **Modern, accessible design** with natural and friendly aesthetics

## Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run serve
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The built site will be in the `_site` directory.

## Customization

### Content

Edit the following files to customize your content:

- `src/_includes/welcome.md` - Welcome section content
- `src/_includes/services.md` - Services section content
- `src/_includes/bio.md` - Bio section content

### Colors and Styling

The color scheme is easily customizable through CSS variables in `src/css/style.css`:

```css
:root {
  /* Main Colors */
  --color-primary: #4a7c59;      /* Forest green */
  --color-primary-light: #6b9b7a;
  --color-primary-dark: #2d4a3a;

  /* Accent Colors */
  --color-accent: #f4a261;       /* Warm orange */
  --color-accent-light: #f7c8a0;
  --color-accent-dark: #e76f51;

  /* Neutral Colors */
  --color-text: #2c3e50;         /* Dark blue-gray */
  --color-background: #ffffff;
  --color-background-alt: #f8f9fa;
}
```

### Personal Information

Update the following in `src/_includes/bio.md`:
- Your name and credentials
- Years of experience
- University and education details
- Specializations
- Professional memberships
- Personal interests/hobbies

### Contact Form

The contact form is configured for Netlify Forms. To set up email notifications:

1. Deploy to Netlify
2. Go to your Netlify dashboard
3. Navigate to Forms → Settings
4. Configure email notifications with your preferred email address

## Deployment

### Netlify (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `_site`
5. Deploy!

### Other Platforms

The built site in the `_site` directory can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Project Structure

```
├── src/
│   ├── _includes/          # Markdown content files
│   │   ├── welcome.md
│   │   ├── services.md
│   │   └── bio.md
│   ├── _layouts/           # Nunjucks templates
│   │   └── base.njk
│   ├── css/               # Stylesheets
│   │   └── style.css
│   ├── js/                # JavaScript
│   │   └── main.js
│   └── index.njk          # Main page template
├── _site/                 # Built site (generated)
├── .eleventy.js           # 11ty configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Accessibility

This website includes:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast color scheme
- Focus indicators

## License

MIT License - feel free to use this template for your speech therapy practice.

## Support

If you need help customizing this website or have questions about deployment, please refer to the 11ty documentation or Netlify's deployment guides.