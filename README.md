# PRODIGY_WD_01

## 🚀 Interactive Responsive Navigation Landing Page

A modern, fully responsive landing page built during the Web Development internship at **Prodigy Infotech**. This project showcases an interactive navigation menu with dynamic styling based on scroll position and hover effects.

---

## 📋 Project Overview

This is a professional landing page for Prodigy Infotech that demonstrates core web development concepts including:

- **Dynamic Navigation Menu** - Changes color and style based on page scroll position
- **Interactive Hover Effects** - Smooth transitions and visual feedback on menu items
- **Fixed Header Navigation** - Stays visible while scrolling through page content
- **Fully Responsive Design** - Adapts seamlessly to all device sizes
- **Smooth Scrolling** - Enhanced user experience with smooth page navigation
- **Section Highlighting** - Active navigation link reflects the current viewport section

---

## ✨ Key Features

### 🎯 Interactive Navigation Menu
- **Fixed Position**: Navigation bar remains at the top while scrolling
- **Dynamic Styling**: Menu changes appearance based on scroll position
- **Hover Effects**: Smooth color transitions and visual feedback on hover
- **Active State**: Automatically highlights the current section being viewed
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 Design Elements
- Modern dark theme with cyan accent colors (#00BCD4)
- Typography using **Poppins** (headings) and **Roboto** (body text) from Google Fonts
- Smooth animations and transitions throughout
- Professional color scheme: Dark backgrounds with light text
- Grid-based layout for solutions and statistics sections

### 📱 Responsive Sections
1. **Hero Section** - Eye-catching introduction with call-to-action button
2. **Core Solutions** - Showcase of four main service areas (AI, Development, Security, R&D)
3. **Impact & Vision** - Company mission and statistics
4. **Contact Section** - Call-to-action with contact information

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Styling, animations, and responsive layout |
| **JavaScript (Vanilla)** | Interactive menu behavior and scroll tracking |
| **Google Fonts** | Typography (Poppins, Roboto) |

---

## 📁 Project Structure

```
responsive-landing-page/
├── index.html          # Main HTML file with page structure
├── style.css           # Complete styling and responsive design
├── script.js           # JavaScript for interactive menu functionality
└── README.md           # Project documentation
```

---

## 💻 How It Works

### Navigation Menu Interactivity

The navigation menu features intelligent scroll detection that:

1. **Tracks Scroll Position**: JavaScript monitors the user's scroll position
2. **Identifies Current Section**: Determines which section is currently in the viewport
3. **Updates Active Link**: Highlights the corresponding navigation link
4. **Applies Styling**: Changes menu appearance with smooth transitions

### JavaScript Functionality

```javascript
// Key features in script.js:
- DOMContentLoaded event listener for initialization
- Scroll event tracking for active section detection
- Dynamic active class management on navigation links
- Header offset calculation for accurate scroll positioning
- Window resize listener for responsive adjustments
```

### CSS Interactions

```css
/* Navigation hover state */
.nav-links a:hover {
    color: #00bcd4;
    background-color: rgba(0, 188, 212, 0.1);
    transform: translateY(-2px);
}

/* Active navigation link */
.nav-links a.active {
    background-color: #00bcd4;
    color: #1a1a1a;
    box-shadow: 0 3px 10px rgba(0, 188, 212, 0.4);
}
```

---

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Background | #0d0d0d | Page background |
| Navigation Dark | #1a1a1a | Header background |
| Light Text | #f0f0f0 | Primary text color |
| Accent Cyan | #00bcd4 | Logo, hover, active states |
| White | #ffffff | Headings |

---

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop** (1200px+) - Full multi-column layout
- **Tablet** (768px - 1199px) - Adjusted spacing and font sizes
- **Mobile** (Below 768px) - Single-column, touch-friendly navigation

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies required (pure vanilla HTML/CSS/JS)

### Installation

1. **Clone or Download** the project files
2. **Open in Browser**: Simply double-click `index.html` or right-click and select "Open with Browser"
3. **No Build Process Required**: Works immediately as-is!

### Usage

- **Scroll** the page to see the navigation menu highlight active sections
- **Hover** over navigation items to see interactive effects
- **Click** menu items to smoothly navigate to different sections
- **Resize** the browser window to test responsive design

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

✅ **HTML5 Semantics** - Proper use of semantic tags (header, nav, section)  
✅ **CSS3 Mastery** - Advanced styling, flexbox, transitions, and animations  
✅ **JavaScript DOM Manipulation** - Event listeners, element selection, dynamic class management  
✅ **Responsive Web Design** - Mobile-first approach and flexible layouts  
✅ **User Experience (UX)** - Smooth interactions and visual feedback  
✅ **Git & Version Control** - Professional code organization  

---

## 📸 Features Showcase

### 1. Dynamic Navigation Highlighting
The navbar automatically updates to show which section the user is currently viewing as they scroll.

### 2. Smooth Hover Effects
Each navigation link provides visual feedback with color changes and subtle animations.

### 3. Fixed Header Position
The navigation remains at the top of the viewport for easy access while scrolling through content.

### 4. Professional Layout
Clean, modern design with proper spacing, typography, and visual hierarchy.

---

## 🔧 Customization Guide

### Change Colors
Edit the CSS variables in `style.css`:
```css
.logo {
    color: #00bcd4; /* Change accent color */
}
```

### Modify Navigation Links
Update the `<ul class="nav-links">` in `index.html`:
```html
<li><a href="#your-section" class="nav-link">Your Item</a></li>
```

### Adjust Animations
Modify transition speeds in `style.css`:
```css
.nav-links a {
    transition: all 0.3s ease; /* Change 0.3s to your preferred speed */
}
```

---

## 📚 Best Practices Implemented

✨ **Semantic HTML** - Proper use of semantic elements  
✨ **CSS Organization** - Well-commented, logical structure  
✨ **JavaScript Best Practices** - Event delegation, efficient DOM queries  
✨ **Accessibility** - Semantic HTML, proper heading hierarchy  
✨ **Performance** - Minimal dependencies, optimized animations  
✨ **Code Quality** - Clean, readable, well-formatted code  

---

## 🎯 Task Requirements Met

✅ Interactive navigation menu with color/style changes on scroll  
✅ Hover effects on menu items with visual feedback  
✅ Fixed position navigation visible on all pages  
✅ HTML for structure, CSS for styling, JavaScript for interactivity  
✅ Background color changes on scroll  
✅ Font color changes on menu hover  
✅ Fully responsive design  

---

## 📞 Contact & Information

- **Company**: Prodigy Infotech
- **Email**: info@prodigy.ai
- **Phone**: +91-9876543210
- **Website**: Global Virtual Hub

---

## 📄 License

This project was created as part of the Prodigy Infotech Web Development Internship Program.

---

## 🙏 Acknowledgments

Built with dedication during the **Prodigy Infotech Web Development Remote Internship**.  
A practical project demonstrating real-world web development skills and best practices.

---

**Last Updated**: September 2026  
**Status**: ✅ Complete

