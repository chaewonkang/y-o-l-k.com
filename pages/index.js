import React from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { Marquee, GoToTop, DarkMode, Item } from '../components';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';

import responsive from '../styles/responsive';

import { getContentfulData } from '../utils/api';

import dark from '../static/images/Logo.png';
import light from '../static/images/LogoWhite.png';

import image_1 from '../static/images/image_1.png';
import image_2 from '../static/images/image_2.png';
import image_3 from '../static/images/image_3.png';
import image_4 from '../static/images/image_4.png';
import image_5 from '../static/images/image_5.png';
import image_6 from '../static/images/image_6.png';
import image_7 from '../static/images/image_7.png';
import image_8 from '../static/images/image_8.png';

const LogoBg = styled.div`
  width: 20%;
  position: fixed;
  top: 50px;
  left: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100000000;

  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const Container = styled.div`
  max-width: 100vw;
  margin: 50px 20px 20px 20px;
  display: grid;
  grid-template-columns: repeat(11, 1px);
  column-gap: calc((100vw - 51px) / 10);
  grid-template-rows: repeat(12, 400px);
  row-gap: 10px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div:nth-child(even) {
    grid-column: span 5;
  }

  & > div:nth-child(odd) {
    grid-column: span 2;
  }

  & > div:nth-child(6n) {
    grid-column: span 3;
  }

  & > div:nth-child(3) {
    grid-column: span 2;
  }
  & > div:nth-child(5n) {
    grid-column: span 4;
  }

  & > div:nth-child(10n) {
    grid-column: span 4;
  }

  & > div:nth-child(2) {
    grid-column: 3 / span 4;
  }

  & > div:nth-child(1) {
    grid-column: span 4;
  }

  & > div:nth-child(3) {
    grid-column: span 2;
  }

  & > div:nth-child(4) {
    grid-column: span 2;
  }

  & > div {
    @media screen and (max-width: 812px) {
      grid-column: span 12;
    }
  }
`;

const ItemContainer = styled.div`
  grid-column: span 2;

  @media ${responsive.mobile} {
    grid-column: span 12;
  }
  z-index: 100000;
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

  -webkit-animation: GreenGradient 2.5s ease infinite;
  animation: GreenGradient 2.5s ease infinite;
`;

const products = [
  {
    no: 1,
    title: 'Hooded Monk',
    image: image_1,
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 2,
    image: image_2,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 3,
    image: image_3,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 4,
    image: image_4,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 5,
    image: image_5,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 6,
    image: image_6,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 7,
    image: image_7,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 8,
    image: image_8,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 9,
    image: image_1,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 10,
    image: image_2,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 11,
    image: image_3,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 12,
    image: image_4,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 13,
    image: image_5,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 14,
    image: image_6,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 15,
    image: image_7,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 16,
    image: image_8,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 17,
    image: image_1,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 18,
    image: image_2,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
  {
    no: 19,
    image: image_3,
    title: 'Hooded Monk',
    category: 'Playful Desk Lamp',
    type: 'Table Stand',
    origin: 'Belgium, 1960s',
    material: 'Glass, Metal',
    size: '24 x 15 cm',
    weight: '840 g',
    detail:
      'This product is simple to assemble. This is an acrylic light designed to fit the IKEA stands. Mirror acrylic and transparent acrylic are arranged to form a semicircle. It shines around the Half Mirror bulb. The bottom acrylic is made of mirror acrylic.It has a reflective effect.',
  },
];

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
      <GoToTop scrollStepInPx='100' delayInMs='30.50'></GoToTop>
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
        {products.map((product) => (
          <ItemContainer key={product.no}>
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
