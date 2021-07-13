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
  -moz-animation: scroll-left 3s linear infinite;
  -webkit-animation: scroll-left 3s linear infinite;
  animation: scroll-left 20s linear infinite;
`;

const Marquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeParagraph>
        Among animals which produce eggs, the yolk (also known as the vitellus)
        is the nutrient-bearing portion of the egg whose primary function is to
        supply food for the development of the embryo. Among animals which produ
      </MarqueeParagraph>
    </MarqueeContainer>
  );
};

export default Marquee;
