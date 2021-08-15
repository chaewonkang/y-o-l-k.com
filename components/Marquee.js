import React from 'react';
import styled from 'styled-components';

const MarqueeContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: var(--color-background);
  z-index: 10000;
`;

const MarqueeParagraph = styled.p`
  position: absolute;
  width: 100%;
  height: 30px;
  margin: 0;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  -moz-animation: scroll-left 40s linear infinite;
  -webkit-animation: scroll-left 40s linear infinite;
  animation: scroll-left 40s linear infinite;

  @media screen and (max-width: 770px) {
    -moz-animation: scroll-left 10s linear infinite;
    -webkit-animation: scroll-left 10s linear infinite;
    animation: scroll-left 10s linear infinite;
  }

  &:hover {
    -moz-animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
`;

const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeParagraph>A nest with glowing eggs in it...</MarqueeParagraph>
    </MarqueeContainer>
  );
};

export default Marquee;
