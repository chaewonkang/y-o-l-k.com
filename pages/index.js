import React from 'react';
import { Marquee, GoToTop, DarkMode, Item } from '../components';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
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
  grid-template-rows: repeat(3, 300px);
  column-gap: 10px;
  row-gap: 10px;
`;

const PinkGradient = styled.div`
  width: 600px;
  height: 300px;
  -moz-border-radius: 400px / 200px;
  -webkit-border-radius: 400px / 200px;
  border-radius: 400px / 200px;
  transform: rotate(30deg);
  background: linear-gradient(4deg, #ffbffd, #ee27e8);
  background-size: 400% 400%;
  opacity: 50%;
  filter: blur(50px);
  -webkit-filter: blur(50px);
  position: fixed;
  top: calc(100vh * 0.5);
  left: calc(100vw * 0.05);

  -webkit-animation: PinkGradient 3s ease infinite;
  animation: PinkGradient 3s ease infinite;
`;

const YellowGradient = styled.div`
  width: 300px;
  height: 300px;
  -moz-border-radius: 150px;
  -webkit-border-radius: 150px;
  border-radius: 150px;
  background: linear-gradient(4deg, #eae2bf, #ffce00);
  background-size: 400% 400%;
  opacity: 50%;
  filter: blur(50px);
  -webkit-filter: blur(50px);
  position: fixed;
  top: calc(100vh * 0.1);
  left: calc(100vw * 0.45);

  -webkit-animation: YellowGradient 2s ease infinite;
  animation: YellowGradient 2s ease infinite;
`;

const GreenGradient = styled.div`
  width: 200px;
  height: 400px;
  -moz-border-radius: 200px / 400px;
  -webkit-border-radius: 200px / 400px;
  border-radius: 200px / 400px;
  transform: rotate(70deg);
  background: linear-gradient(4deg, #e4ffb1, #a7ff00);
  background-size: 400% 400%;
  opacity: 50%;
  filter: blur(50px);
  -webkit-filter: blur(50px);
  position: fixed;
  top: calc(100vh * 0.5);
  left: calc(100vw * 0.7);

  -webkit-animation: GreenGradient 2s ease infinite;
  animation: GreenGradient 2s ease infinite;
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

      <DarkMode toggleTheme={handleToggle} theme={theme}></DarkMode>
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
        <Item theme={theme}></Item>
      </Container>
      {theme === 'dark' ? (
        <>
          <PinkGradient></PinkGradient>
          <YellowGradient></YellowGradient>
          <GreenGradient></GreenGradient>
        </>
      ) : null}
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
