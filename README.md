# Kshitij International Website

A modern, fully responsive multi-page website for Kshitij International - Nepal's leading supplier of machinery, paver molds, and color pigments for concrete production.

## 🌟 Features

### ✅ Complete Multi-Page Structure
- **Homepage** - Engaging hero section with featured products
- **Product Categories** - Dedicated pages for Machines, Molds, and Pigments
- **Individual Product Pages** - 27 detailed product pages
- **Inquiry Form** - Contact form with email integration
- **Contact Page** - Business information and quick contact form

### 🤖 AI Chatbot Integration
- Integrated Claude AI chatbot for customer support
- Answers questions about products, pricing, and availability
- Helps users navigate the product catalog
- Provides instant assistance 24/7

### 📧 Email Functionality
- Inquiry form sends emails to contact@kshitijinternational.com.np
- Uses FormSubmit.co service (no backend required)
- Automatic email notifications for new inquiries

### 📱 Fully Responsive Design
- Mobile-first responsive design
- Works perfectly on all devices (phones, tablets, desktops)
- Touch-friendly navigation
- Optimized images

### 🎨 Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Intuitive navigation
- Accessible and user-friendly

## 📁 File Structure

```
kshitij-website/
├── index.html                          # Homepage
├── products.html                       # Products overview (create if needed)
├── machines.html                       # Machines category page
├── molds.html                          # Molds category page  
├── pigments.html                       # Pigments category page
├── inquiry.html                        # Inquiry form page
├── contact.html                        # Contact page
├── product-*.html                      # 27 individual product pages
├── styles.css                          # Main stylesheet
├── script.js                           # Main JavaScript
├── chatbot.js                          # AI chatbot functionality
└── README.md                           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it: `kshitij-international` (or any name you prefer)
3. Set it to Public
4. Don't initialize with README (we already have files)

### Step 2: Upload Files
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Kshitij International website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/kshitij-international.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR-USERNAME.github.io/kshitij-international/`

## 🔧 Configuration

### Email Setup
The inquiry form uses FormSubmit.co. To configure:
1. Open `inquiry.html` and `contact.html`
2. Find the form submit URL: `https://formsubmit.co/ajax/contact@kshitijinternational.com.np`
3. The first time you submit, FormSubmit will send a confirmation email
4. Click the confirmation link to activate

### AI Chatbot
The chatbot is configured to use Claude API. Features:
- Fallback to rule-based responses if API fails
- Product information database
- Friendly, helpful conversation
- Can guide users to contact forms or phone

## 📝 Product Catalog

### Machines (12 products)
- Vibrating Table
- Concrete Mixer
- Color Mixer
- Pan Concrete Mixer
- Hollow Block Making Machine (Manual)
- Hollow Block Making Machine (Hydraulic)
- Plate Compactor
- Monkey Lift
- Monkey Jumper (Rammer)
- Mini Roller
- Mini Roller Compactor
- Power Trowel

### Molds (12 products)
- Cosmic Mold
- Milano Mold
- Zig-Zag Mold
- Sudarsan Chakra Mold
- Hexagon Mold
- I-Shape (Dumbbell) Mold
- D-Shape Mold
- Brucks Mold
- Curvestone Mold
- Square Mold
- Bench Mold
- Checker Mold

### Color Pigments (3 products)
- LANXESS IOX RO3 (Red Synthetic Iron Oxide)
- LANXESS IOX YO2 (Yellow Synthetic Iron Oxide)
- LANXESS IOX BO3 (Black Synthetic Iron Oxide)

## 🎨 Customization

### Colors
Edit `styles.css` and modify CSS variables:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #f59e0b;       /* Accent/CTA color */
}
```

### Content
- Update company information in footer across all pages
- Modify product descriptions in individual product pages
- Update contact details throughout the site

### Images
- All images are currently using Google Sites hosted URLs
- For better performance, download images and host them in an `/images` folder
- Update image src attributes accordingly

## 📞 Contact Information

- **Phone:** +977 9852029937
- **Email:** contact@kshitijinternational.com.np
- **Location:** Nepal

## 🛠️ Technologies Used

- HTML5
- CSS3 (Modern Grid & Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Claude AI API (for chatbot)
- FormSubmit.co (for email)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This website is created for Kshitij International. All rights reserved.

## 🆘 Support

For technical issues or questions about the website:
1. Check this README
2. Review the code comments
3. Test in multiple browsers
4. Contact the developer

---

**Created with ❤️ for Kshitij International**
