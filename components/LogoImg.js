import React, { useEffect, useState } from 'react';
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

const LogoImg = ({ theme }) => {
  const [type, setType] = useState(theme);

  if (type === 'light')
    return (
      <LogoBg
        style={{
          backgroundImage: `url(${light})`,
        }}
      ></LogoBg>
    );

  return (
    <LogoBg
      style={{
        backgroundImage: `url(${dark})`,
      }}
    ></LogoBg>
  );
};

export default LogoImg;
