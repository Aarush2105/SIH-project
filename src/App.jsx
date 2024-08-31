import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React, { useRef, useState, useEffect } from 'react'
import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';

const App = () => {
  const [hover, setHover] = useState(false);

  const navContainerRef = useRef(null);


  useEffect(() => {
    const navContainer = navContainerRef.current;

    const handleMouseEnter = () => {
      setHover(true);
    }
    const handleMouseLeave = () => {
      setHover(false);
    }

    navContainer.addEventListener('mouseenter', handleMouseEnter);
    navContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      navContainer.removeEventListener('mouseenter', handleMouseEnter);
      navContainer.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])


  return (
    <main>
      <div ref={navContainerRef}>
        <Navbar hover={hover} />
      </div>
      <Home hover={hover} />
      
    </main>
  )
}

export default App;