import React, { useState, useEffect } from "react";
import styles from './navbar.module.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Highlight section in view on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["About", "experience", "project", "contact"];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <button 
                className={styles.menuToggle} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            <ul className={`${styles.menuitem} ${menuOpen ? styles.menuopen : ''}`}>
                {["About", "experience", "project", "contact"].map((section) => (
                    <li key={section}>
                        <a 
                            href={`#${section}`}
                            className={`${styles.link} ${activeSection === section ? styles.active : ""}`}
                            onClick={() => setMenuOpen(false)}  // Close menu on item click
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
