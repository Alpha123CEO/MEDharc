/* ==========================================================
    Executive Data Vault Style - 5000% Professional
    Theme: Ultra-Minimalist, High-Security, Executive
========================================================== */

/* --------------------------------------
    Global Variables (The Foundation)
-------------------------------------- */
:root {
    /* Color Palette: Monochrome with Deep, Understated Focus */
    --color-base-black: #0d0d0d;       /* Deepest Black */
    --color-base-white: #ffffff;
    --color-accent-deep: #003366;      /* Dark, High-Value Navy Accent */
    --color-accent-focus: #1d74d2;     /* Brighter Blue for actionable elements */
    
    --color-text-primary: #111111;
    --color-text-secondary: #555555;
    --color-border-fine: #cccccc;      /* Extremely light, fine line border */

    /* Typography: Single, Clean, Reliable Sans-Serif */
    --font-family-base: 'Lato', sans-serif; 

    /* Spacing & Components */
    --spacing-page: 80px;  /* Generous top/bottom page spacing */
    --spacing-unit: 20px;
    --max-content-width: 1200px;
    --border-radius-none: 0;
    --shadow-subtle: 0 1px 0 rgba(0, 0, 0, 0.05); /* Minimal shadow for depth */
}

/* --------------------------------------
    Base Reset and Typography
-------------------------------------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family-base);
    background: var(--color-base-white);
    color: var(--color-text-secondary);
    line-height: 1.6;
    min-height: 100vh;
}

.section-content {
    max-width: var(--max-content-width);
    margin: 0 auto;
    padding: 0 var(--spacing-unit);
}

h1, h2, h3 {
    color: var(--color-text-primary);
    font-weight: 700;
    letter-spacing: -0.5px;
}

a {
    color: var(--color-accent-deep);
    text-decoration: none;
    transition: color 0.2s ease;
}

/* --------------------------------------
    1. Header (Fine Line Separator)
-------------------------------------- */
header {
    background: var(--color-base-white);
    border-bottom: 1px solid var(--color-border-fine);
    padding: 16px var(--spacing-unit);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
}

header .logo {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--color-base-black);
    letter-spacing: 2px;
}

header nav a {
    color: var(--color-text-primary);
    margin-left: var(--spacing-unit);
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding-bottom: 4px;
}

header nav a:hover {
    color: var(--color-accent-focus);
    border-bottom: 1px solid var(--color-accent-focus);
}

.btn-contact {
    /* Styling the 'Initiate Contact' link to look like a subtle button */
    border: 1px solid var(--color-accent-deep);
    padding: 6px 14px;
    margin-left: 30px !important; 
    border-radius: 2px;
    font-weight: 700 !important;
}

/* --------------------------------------
    2. Hero Section (Maximum Whitespace)
-------------------------------------- */
.hero {
    padding: 150px 0;
    min-height: 70vh;
    background: var(--color-base-white);
}

.hero h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    max-width: 800px;
    margin-bottom: var(--spacing-unit);
}

.hero .subtitle {
    font-size: 1.25rem;
    max-width: 700px;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-unit);
}

/* --------------------------------------
    Buttons (Clean and Defined)
-------------------------------------- */
.btn {
    padding: 12px 28px;
    background: var(--color-accent-deep);
    color: var(--color-base-white);
    border-radius: var(--border-radius-none);
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s ease;
    border: 1px solid var(--color-accent-deep);
    cursor: pointer;
    display: inline-block;
}

.btn:hover {
    background: var(--color-accent-focus);
    border-color: var(--color-accent-focus);
}

/* --------------------------------------
    3. Service Cards (Data Modules)
-------------------------------------- */
#services {
    padding: var(--spacing-page) 0;
    background: var(--color-base-white);
    border-top: 1px solid var(--color-border-fine);
}

#services h2 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 60px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
    margin-top: 40px;
}

.service-card {
    background: var(--color-base-white);
    padding: 40px;
    border: 1px solid var(--color-border-fine);
    transition: all 0.3s ease;
}

.service-card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); 
    transform: translateY(-5px);
    border-color: var(--color-accent-focus);
}

.service-card h3 {
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 8px;
    color: var(--color-accent-deep);
    font-weight: 700;
}

.card-icon {
    font-size: 2rem;
    color: var(--color-accent-focus);
}


/* --------------------------------------
    4. Contact Form (Executive Input)
-------------------------------------- */
#contact {
    padding: var(--spacing-page) 0;
    background: var(--color-base-white);
    border-top: 1px solid var(--color-border-fine);
}

#contact h2 {
    font-weight: 300;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px;
}

.form-container {
    max-width: 600px;
}

#contactForm input,
#contactForm textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: var(--spacing-unit);
    border: 1px solid var(--color-border-fine);
    border-radius: 0;
    font-family: var(--font-family-base);
    font-size: 1rem;
    color: var(--color-text-primary);
    transition: border-color 0.3s;
}

#contactForm input:focus,
#contactForm textarea:focus {
    border-color: var(--color-accent-focus);
    outline: none;
}

.form-status {
    margin-top: var(--spacing-unit);
    font-weight: 700;
    color: var(--color-accent-deep);
}

/* --------------------------------------
    5. Footer (Simple and Concise)
-------------------------------------- */
footer {
    background: var(--color-base-white);
    color: var(--color-text-secondary);
    border-top: 1px solid var(--color-border-fine);
    text-align: center;
    padding: 25px var(--spacing-unit);
    font-size: 0.8rem;
    letter-spacing: 0.5px;
}

/* --------------------------------------
    UI Helper Styles (Matching script.js)
-------------------------------------- */
.menu-toggle {
    display: none; 
    background: transparent;
    border: none;
    color: var(--color-base-black);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

@media (max-width: 900px) {
    /* Show the toggle button and move logo left, toggle right */
    header {
        justify-content: space-between;
    }
    .menu-toggle {
        display: block;
    }
    
    /* Hide/Show Navigation */
    header nav {
        display: flex;
        flex-direction: column;
        width: 100%; 
        position: absolute;
        top: 55px; /* Place below the header bar */
        left: 0;
        background: var(--color-base-white);
        border-bottom: 1px solid var(--color-border-fine);
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);
        padding: 10px 0;
    }

    /* Target for JS: Hide when aria-hidden="true" */
    header nav[aria-hidden="true"] {
        display: none;
    }

    header nav a {
        display: block;
        margin: 0;
        padding: 10px 40px;
        text-align: left;
    }
    .btn-contact {
        margin: 10px 40px; 
    }
    
    /* Content adjustments */
    .hero h1 {
        font-size: 2.5rem;
    }
    .service-grid {
        grid-template-columns: 1fr;
    }
}
