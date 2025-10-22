"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const AlloEcoleHeader = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    setActiveSubmenu(null);
    document.body.classList.remove("scroll-hide-sm");
  };

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <>
      <style jsx>{`
        .header-one {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-one.sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .header-main {
          padding: 1rem 0;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          height: 50px;
          width: auto;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .main-menu {
          display: none;
        }

        .menu-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu-item {
          position: relative;
        }

        .menu-item > a {
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
          display: block;
          padding: 0.5rem 0;
        }

        .menu-item > a:hover,
        .menu-item.active > a {
          color: #f97316;
        }

        .menu-item.has-submenu {
          position: relative;
        }

        .submenu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          min-width: 200px;
          list-style: none;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .menu-item.has-submenu:hover .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .submenu li {
          padding: 0;
        }

        .submenu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #4b5563;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .submenu a:hover {
          background: #fff7ed;
          color: #f97316;
        }

        .header-btns {
          display: none;
        }

        .btn {
          padding: 0.625rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
        }

        .btn-primary {
          background: #f97316;
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        /* Mobile Menu Button */
        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #1f2937;
          transition: color 0.2s;
        }

        .mobile-menu-toggle:hover {
          color: #f97316;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: white;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease;
          z-index: 1001;
          overflow-y: auto;
          padding: 2rem 0;
        }

        .mobile-menu.active {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-menu-close {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #1f2937;
          padding: 0.5rem;
        }

        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 1rem 0;
        }

        .mobile-menu-item {
          border-bottom: 1px solid #f3f4f6;
        }

        .mobile-menu-item > a,
        .mobile-menu-item > button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1rem 1.5rem;
          color: #1f2937;
          text-decoration: none;
          font-weight: 500;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mobile-menu-item.active > a,
        .mobile-menu-item > a:hover,
        .mobile-menu-item > button:hover {
          color: #f97316;
          background: #fff7ed;
        }

        .mobile-submenu {
          list-style: none;
          margin: 0;
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: #f9fafb;
        }

        .mobile-submenu.active {
          max-height: 500px;
        }

        .mobile-submenu a {
          display: block;
          padding: 0.875rem 1.5rem 0.875rem 3rem;
          color: #4b5563;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .mobile-submenu a:hover {
          color: #f97316;
          background: #fff7ed;
        }

        .mobile-auth-btn {
          margin: 1.5rem 1.5rem 0;
        }

        .mobile-auth-btn .btn {
          width: 100%;
          text-align: center;
        }

        /* Overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Desktop Styles */
        @media (min-width: 992px) {
          .main-menu {
            display: block;
          }

          .header-btns {
            display: block;
          }

          .mobile-menu-toggle {
            display: none;
          }
        }

        /* Tablet Styles */
        @media (max-width: 991px) and (min-width: 768px) {
          .mobile-menu {
            width: 320px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .logo img {
            height: 40px;
          }

          .mobile-menu {
            width: 100%;
            right: -100%;
          }

          .mobile-menu.active {
            right: 0;
          }
        }
      `}</style>

      <header className={`header-one ${scroll ? "sticky" : ""}`}>
        <div className="header-main">
          <div className="container">
            <div className="row">
              <div className="logo">
                <Link href="/" onClick={closeMenu}>
                  <img src="/assets/images/logo/logo.png" alt="AlloEcole" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="header-right">
                <nav className="main-menu">
                  <ul className="menu-list">
                    <li className={`menu-item ${pathname === "/" ? "active" : ""}`}>
                      <Link href="/">Accueil</Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/actualites">Actualité</Link>
                    </li>
                    <li className="menu-item has-submenu">
                      <Link href="/etudes">Études</Link>
                      <ul className="submenu">
                        <li><Link href="/bourses">Bourses d'étude</Link></li>
                        <li><Link href="/etudes-etranger">Études à l'étranger</Link></li>
                        <li><Link href="/permutations">Demandes de permutation</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item has-submenu">
                      <Link href="/orientation">Orientation</Link>
                      <ul className="submenu">
                        <li><Link href="/conseils">Conseils pratiques</Link></li>
                        <li><Link href="/simulateur">Simulateur d'orientation</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <Link href="/ecoles">Écoles</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-btns">
                  <Link href="/sign-up" className="btn btn-primary">
                    S'authentifier
                  </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-toggle" onClick={toggleMenu}>
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`menu-overlay ${isMenuActive ? "active" : ""}`} onClick={closeMenu}></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuActive ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <img src="/assets/images/logo/logo.png" alt="AlloEcole" style={{height: '40px'}} />
            <button className="mobile-menu-close" onClick={closeMenu}>
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-menu-list">
            <li className={`mobile-menu-item ${pathname === "/" ? "active" : ""}`}>
              <Link href="/" onClick={closeMenu}>Accueil</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/actualites" onClick={closeMenu}>Actualité</Link>
            </li>
            <li className="mobile-menu-item">
              <button onClick={() => toggleSubmenu('etudes')}>
                Études
                <ChevronDown size={20} style={{
                  transform: activeSubmenu === 'etudes' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s'
                }} />
              </button>
              <ul className={`mobile-submenu ${activeSubmenu === 'etudes' ? 'active' : ''}`}>
                <li><Link href="/bourses" onClick={closeMenu}>Bourses d'étude</Link></li>
                <li><Link href="/etudes-etranger" onClick={closeMenu}>Études à l'étranger</Link></li>
                <li><Link href="/permutations" onClick={closeMenu}>Demandes de permutation</Link></li>
              </ul>
            </li>
            <li className="mobile-menu-item">
              <button onClick={() => toggleSubmenu('orientation')}>
                Orientation
                <ChevronDown size={20} style={{
                  transform: activeSubmenu === 'orientation' ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s'
                }} />
              </button>
              <ul className={`mobile-submenu ${activeSubmenu === 'orientation' ? 'active' : ''}`}>
                <li><Link href="/conseils" onClick={closeMenu}>Conseils pratiques</Link></li>
                <li><Link href="/simulateur" onClick={closeMenu}>Simulateur d'orientation</Link></li>
              </ul>
            </li>
            <li className="mobile-menu-item">
              <Link href="/ecoles" onClick={closeMenu}>Écoles</Link>
            </li>
          </ul>

          <div className="mobile-auth-btn">
            <Link href="/sign-up" className="btn btn-primary" onClick={closeMenu}>
              S'authentifier
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default AlloEcoleHeader;