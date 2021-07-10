import React from 'react';
import { Marquee, GoToTop, DarkMode, LogoImg } from '../components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import dark from '../static/images/Logo.png';
import light from '../static/images/LogoWhite.png';

const LogoBg = styled.div`
  width: 248px;
  height: 196px;
  position: fixed;
  top: 50px;
  left: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

function Index() {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    if (window.localStorage.getItem('theme') === 'dark') {
      setTheme('light');
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.removeAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    console.log('init', initialColorValue);

    setTheme(initialColorValue === 'dark');
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  return (
    <>
      <Marquee></Marquee>
      {theme === 'dark' ? (
        <LogoBg
          style={{
            backgroundImage: `url(${light})`,
          }}
        ></LogoBg>
      ) : (
        <LogoBg
          style={{
            backgroundImage: `url(${dark})`,
          }}
        ></LogoBg>
      )}

      <DarkMode toggleTheme={handleToggle}></DarkMode>
      <GoToTop></GoToTop>
    </>
  );
}

export default Index;
