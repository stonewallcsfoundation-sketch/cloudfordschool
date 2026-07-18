# CloudFord School Bauchi - Website Project

## Overview
A complete, fully-functional website for CloudFord School Bauchi built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The site features a warm, inviting design perfect for an elementary school in Bauchi, Nigeria.

## Project Structure

### Core Setup
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with custom theme colors
- **Components**: Modular, reusable React components
- **Images**: Integration with provided school photos

### Color System
- **Primary**: #FF6B35 (Warm Orange)
- **Secondary**: #004E89 (Deep Blue)
- **Accent**: #F7B801 (Golden Yellow)
- **Background**: #FAFAF8 (Off-white)
- **Foreground**: #1A1A1A (Dark Gray/Black)

## Pages & Features

### 1. **Home Page** (`/`)
- Hero section with gradient overlay and school image
- Welcome tagline: "Where Every Child's Potential Shines Bright ✨"
- Three quick-link cards (Admissions, About Us, Gallery)
- "Community Built on Trust" section with featured image
- Latest news and updates section
- Call-to-action buttons throughout

### 2. **About Us** (`/about`)
- School header with tagline
- Mission & Vision statements in beautifully styled cards
- School history with featured graduation photo
- "Why Choose Us" section (6 key reasons)
- Core values section with emojis

### 3. **Admissions** (`/admissions`)
- Quick info cards (age range, year-round, small classes)
- 4-step enrollment process with visual indicators
- Requirements checklist (new and returning students)
- Detailed fees table for different age groups
- Schedule Tour modal form
- Contact call-to-action

### 4. **News & Events** (`/news`)
- Featured latest news article with full image
- News grid layout (6 recent updates)
- Upcoming events timeline
- Newsletter subscription
- All articles feature real school photos

### 5. **Gallery** (`/gallery`)
- Interactive photo gallery with category filters
- 7 high-quality school photos categorized by:
  - School Life
  - Learning
  - Celebrations
  - Community
  - Achievements
- Hover effects and smooth transitions
- "Share Your Photos" call-to-action

### 6. **Contact Us** (`/contact`)
- Contact information section (phone, email, location, hours)
- Fully functional contact form
- Social media links
- Map placeholder
- Comprehensive FAQ section

### 7. **Header** (Global Component)
- Sticky navigation header
- CloudFord School logo (CF monogram)
- Desktop navigation menu with 6 links
- Mobile hamburger menu
- Enroll Now CTA button

### 8. **Footer** (Global Component)
- Quick links section
- Contact information
- Social media links
- Copyright notice

## Images Used

All 7 provided school photos are strategically placed:

1. **Home Hero**: Community event with colorful school background
2. **About Section**: Group photo with students and staff (graduation)
3. **About History**: Graduation celebration photo
4. **Gallery**: All 7 images with categorization and filtering

## Key Features

✅ **Responsive Design** - Mobile-first, works on all devices
✅ **Warm Color Palette** - Inspired by school's vibrant architecture
✅ **Interactive Elements** - Forms, modals, carousels, filters
✅ **Accessibility** - Semantic HTML, ARIA labels, proper heading hierarchy
✅ **Performance** - Optimized images, efficient styling
✅ **User-Friendly** - Clear navigation, intuitive forms
✅ **SEO Optimized** - Proper metadata, heading structure
✅ **No Third-Party Backend** - All interactive forms are frontend-ready

## Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## Development Notes

- All pages are `'use client'` components for interactivity
- Design tokens are defined in `globals.css`
- Components are modular and reusable
- Image hosting through Vercel Blob storage
- Forms include validation and success feedback
- Mobile menu is fully functional with smooth transitions

## Future Enhancements (Optional)

- Backend integration for form submissions
- Database for news articles and events
- Authentication for parent portals
- Photo upload functionality
- Email notifications
- Blog system with categories
- Student testimonials

## File Structure

```
app/
├── layout.tsx                 # Root layout
├── page.tsx                   # Home page
├── globals.css               # Global styles & theme
├── components/
│   ├── Header.tsx            # Header component
│   └── Footer.tsx            # Footer component
├── about/
│   └── page.tsx              # About Us page
├── admissions/
│   └── page.tsx              # Admissions page
├── news/
│   └── page.tsx              # News & Events page
├── gallery/
│   └── page.tsx              # Gallery page
└── contact/
    └── page.tsx              # Contact Us page
```

---

**Status**: ✅ Complete and fully functional
**Last Updated**: January 2025
**School**: CloudFord School Bauchi, Nigeria
