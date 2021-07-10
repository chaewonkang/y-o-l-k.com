import React from 'react';
import { Marquee, GoToTop, DarkMode, Item } from '../components';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import responsive from '../styles/responsive';
import { getContentfulData } from '../utils/api';

import dark from '../static/images/Logo.png';
import light from '../static/images/LogoWhite.png';

const LogoBg = styled.div`
  grid-column: 1 / 4;
  width: calc((100vw / 16) * 4);
  height: 196px;
  position: fixed;
  top: 50px;
  left: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;

  & > img {
    object-fit: cover;
    width: 100%;
  }
`;

const Container = styled.div`
  margin: 30px 20px 20px 20px;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(3, 350px);
  column-gap: 10px;
  row-gap: 10px;
`;

export default function Index() {
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
    <ThemeProvider theme={responsive}>
      <Marquee></Marquee>

      <DarkMode toggleTheme={handleToggle}></DarkMode>
      <GoToTop scrollStepInPx='100' delayInMs='10.50'></GoToTop>
      <Container>
        {theme === 'dark' ? (
          <LogoBg>
            <img src={light}></img>
          </LogoBg>
        ) : (
          <LogoBg>
            <img src={dark}></img>
          </LogoBg>
        )}
        <Item></Item>
      </Container>
    </ThemeProvider>
  );
}

// export async function getStaticProps() {
//   const { workList } = await getContentfulData();

//   return {
//     props: {
//       data: {
//         workList,
//       },
//     },
//   };
// }
