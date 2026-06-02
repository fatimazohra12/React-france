import React, { useState, useEffect } from "react";
import "./navigation.css";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = navLinks.map((link) => link.href.slice(1));
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`modern-nav ${scrolled ? "modern-nav--scrolled" : ""} ${
        menuOpen ? "modern-nav--open" : ""
      }`}
    >
      <div className="modern-nav__container">
        <a
          href="#page-top"
          className="modern-nav__brand page-scroll"
          onClick={closeMenu}
        >
          <span className="modern-nav__brand-icon">V</span>
          almétaux
        </a>

        <button
          type="button"
          className={`modern-nav__toggle ${menuOpen ? "is-active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="modern-nav__menu">
          <ul className="modern-nav__links">
            {navLinks.map(({ href, label }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`modern-nav__link page-scroll ${
                      isActive ? "is-active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="modern-nav__cta page-scroll"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="modern-nav__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};
