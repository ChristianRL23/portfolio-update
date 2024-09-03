import hamburgerIcon from './hamburger.svg';
import { slide as Burger, Item } from 'burger-menu';
import 'burger-menu/lib/index.css';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const isTablet = useMediaQuery({
    query: '(max-width: 700px)',
  });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (scrollPosition >= 75 && navbarTransparent === true) {
      setNavbarTransparent(false);
    } else if (scrollPosition < 75 && navbarTransparent === false) {
      setNavbarTransparent(true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const scrollToSection = (e) => {
    const sectionId = '#' + e.text.charAt(0).toLowerCase() + e.text.slice(1);
    setSidebarIsOpen(false);
    window.location.href = sectionId;
  };

  return (
    <nav className={`navbar${navbarTransparent ? '--transparent' : ''}`}>
      <div className="navbar__left">
        <Logo />
      </div>
      {isTablet ? (
        <>
          <div onClick={() => setSidebarIsOpen(true)}>
            <img
              className="navbar__hamburger-icon"
              src={hamburgerIcon}
              alt="Hamburger icon"
            />
          </div>
          <Burger
            width={200}
            className="burger-menu"
            isOpen={sidebarIsOpen}
            selectedKey={'entry'}
            onClose={() => setSidebarIsOpen(false)}
          >
            <>
              <Item
                onClick={(e) => scrollToSection(e)}
                itemKey="About"
                text="About"
              ></Item>
              <Item
                onClick={(e) => scrollToSection(e)}
                itemKey="Projects"
                text="Projects"
              ></Item>
              <Item
                onClick={(e) => scrollToSection(e)}
                itemKey="Contact"
                text="Contact"
              ></Item>
            </>
          </Burger>
        </>
      ) : (
        <div className="navbar__right">
          <a className="navbar__right-link" href="#about">
            About
          </a>
          <a className="navbar__right-link" href="#projects">
            Projects
          </a>
          <a className="navbar__right-link" href="#contact">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
