/* ==========================================================
    UI Helper Styles (Matching script.js)
========================================================== */

/* --------------------------------------
    Mobile Navigation Toggle Button
-------------------------------------- */
.menu-toggle {
    display: none; /* Hide the toggle button by default */
    background: transparent;
    border: none;
    color: var(--color-authority-primary);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

/* --------------------------------------
    Form Styles (To make the contact section look professional)
-------------------------------------- */
#contactForm label {
    display: block;
    font-weight: 600;
    color: var(--color-text-dark);
    margin-top: 15px;
    margin-bottom: 5px;
}
#contactForm input[type="text"],
#contactForm input[type="email"],
#contactForm textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-background-muted);
    border-radius: var(--border-radius-minimal);
    font-family: var(--font-family-body);
    font-size: 1rem;
    color: var(--color-text-dark);
}
#contactForm textarea {
    resize: vertical;
}
#contactForm button[type="submit"] {
    margin-top: 25px;
}

/* --------------------------------------
    Responsive Overrides for script.js functionality
-------------------------------------- */
@media (max-width: 900px) {
    /* Show the toggle button */
    .menu-toggle {
        display: block;
    }
    
    /* On mobile, stack navigation items vertically */
    header nav {
        width: 100%; /* Take up full width */
        flex-direction: column;
        background: var(--color-background-white);
        padding: 10px 0;
        border-top: 1px solid var(--color-background-muted);
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.05);
    }

    /* Hide the navigation when the script sets this attribute */
    header nav[aria-hidden="true"] {
        display: none;
    }

    /* Override the header's flex to allow the button to align right */
    header {
        justify-content: space-between; /* Pushes logo left, toggle button right */
    }

    /* Make links stack vertically */
    header nav a {
        display: block;
        margin: 0;
        padding: 10px 20px;
        border-bottom: none;
        width: 100%;
        text-align: left;
    }
    header nav a:hover {
        border-bottom: none;
        background: var(--color-background-light);
    }
    .btn-secondary {
        margin-top: 10px; /* Space out the contact button */
    }
}
