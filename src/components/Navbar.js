import React, { useState, useRef } from 'react';
import { ListaFavoritos } from './ListaFavoritos';
import { FaBars } from 'react-icons/fa';
import './NavBar.css'

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar w-full h-10 bg-green-300 text-gray-900">
      <button className="navbar__toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <nav className={`sidebar ${showSidebar ? 'sidebar--active' : ''} bg-gray-600`} ref={sidebarRef}>
        <ListaFavoritos />
      </nav>
    </div>
  );
}
