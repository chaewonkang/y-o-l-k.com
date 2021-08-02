import React from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { Marquee, GoToTop, DarkMode, Item, Detail } from '../components';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getContentfulData } from '../utils/api';

import responsive from '../styles/responsive';

import dark from '../static/images/Logo.png';
import light from '../static/images/LogoWhite.png';

const LogoBg = styled.div`
  width: 20%;
  position: fixed;
  top: 50px;
  left: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000000;

  @media ${(props) => props.theme.mobile} {
    width: 50%;
    left: 10px;
  }

  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    -webkit-animation: float 3s ease-in-out infinite;
    animation: float 3s ease-in-out infinite;
  }
`;

const Container = styled.div`
  max-width: 100vw;
  margin: 50px 20px 20px 20px;
  display: grid;
  grid-template-columns: repeat(12, 1px);
  column-gap: calc((100vw - 21px) / 12);
  grid-template-rows: repeat(12, auto);
  row-gap: 80px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:nth-child(even) {
    grid-column: span 3;
    max-width: 400px;
  }

  & > div:nth-child(odd) {
    grid-column: span 3;
  }

  & > div:nth-child(6n) {
    grid-column: span 3;
  }

  & > div:nth-child(3) {
    grid-column: span 3;
  }

  & > div:nth-child(5n) {
    grid-column: span 3;
    max-width: 400px;
  }

  & > div:nth-child(10n) {
    grid-column: span 2;
  }

  & > div:nth-child(2) {
    grid-column: 3 / span 3;
  }

  & > div:nth-child(1) {
    grid-column: span 4;
  }

  & > div:nth-child(3) {
    grid-column: span 2;
  }

  & > div:nth-child(4) {
    grid-column: span 3;
    max-width: 300px;
  }

  & > div:nth-child(8) {
    grid-column: span 2;
    max-width: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 50vw;
    justify-content: center;
    column-gap: 0;
    grid-template-rows: auto;
    row-gap: 10px;

    & > div {
      grid-column: 1 / 2 !important;
    }

    & > div:nth-child(odd) {
      grid-column: 1 / 2 !important;
    }
  }
`;

const ItemContainer = styled.div`
  grid-column: span 2;

  @media ${(props) => props.theme.mobile} {
    grid-column: 1 / 2;
  }
`;

const PinkGradient = styled.div`
  width: 600px;
  height: 300px;
  -moz-border-radius: 400px / 200px;
  -webkit-border-radius: 400px / 200px;
  border-radius: 400px / 200px;
  z-index: 1;

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

  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: 150px;
    -moz-border-radius: 200px / 100px;
    -webkit-border-radius: 200px / 100px;
    border-radius: 200px / 100px;
    top: calc(100vh * 0.35);
    left: -40px;
  }
`;

const YellowGradient = styled.div`
  width: 300px;
  height: 300px;
  -moz-border-radius: 150px;
  -webkit-border-radius: 150px;
  border-radius: 150px;
  z-index: 1;

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

  @media ${(props) => props.theme.mobile} {
    width: 150px;
    height: 150px;
    -moz-border-radius: 75px;
    -webkit-border-radius: 75px;
    border-radius: 75px;
    top: calc(100vh * 0.1);
    left: calc(100vw * 0.5);
  }
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
  z-index: 1;

  @media ${(props) => props.theme.mobile} {
    width: 200px;
    height: 400px;
    -moz-border-radius: 100px / 200px;
    -webkit-border-radius: 100px / 200px;
    border-radius: 100px / 200px;
    top: calc(100vh * 0.45);
    left: calc(100vw * 0.7);
  }

  -webkit-animation: GreenGradient 2.5s ease infinite;
  animation: GreenGradient 2.5s ease infinite;
`;

const customStyles = {
  overlay: {
    position: 'fixed',
    left: 10,
    top: 0,
    zIndex: 10000000000000,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    padding: 0,
    inset: '40px 0px 0px 0px',
    width: '90vw',
    height: '100vh',
    margin: '0 auto',
    borderRadius: '0',
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)',
    overflow: 'auto',
  },
};

export default function Index({ data }) {
  const [theme, setTheme] = useState('dark');
  const router = useRouter();
  const { itemTitle } = router.query;
  const { workList } = data;
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(workList.filter((el) => el.title === itemTitle));
  }, [itemTitle]);

  Modal.setAppElement('#__next');

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
      <Modal isOpen={!!itemTitle} style={customStyles}>
        <Detail item={item}></Detail>
      </Modal>
      <Marquee></Marquee>
      <DarkMode toggleTheme={handleToggle} theme={theme}></DarkMode>
      <GoToTop scrollStepInPx='100' delayInMs='30.50' theme={theme}></GoToTop>
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
        {workList.map((product) => (
          <ItemContainer key={product.title}>
            <Item theme={theme} info={product}></Item>
          </ItemContainer>
        ))}
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

export async function getStaticProps() {
  const { workList } = await getContentfulData();

  return {
    props: {
      data: {
        workList,
      },
    },
  };
}
