import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  width: 34px;
  height: 76px;
  border: 1px solid;
  border-radius: 35px / 80px;
  position: fixed;
  right: 20px;
  bottom: 116px;
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr 1px 1fr;
  cursor: pointer;
`;

const BtnOnOff = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 14px;
`;

const BtnBorder = styled.div`
  height: 1px;
  width: 25px;
  border-bottom: 1px solid ${(props) => props.theme.toggleButtonTextColor};
  display: flex;
  justify-self: center;
  align-self: center;
`;

const DarkMode = ({ toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <BtnOnOff>on</BtnOnOff>
      <BtnBorder></BtnBorder>
      <BtnOnOff>off</BtnOnOff>
    </ToggleContainer>
  );
};

export default DarkMode;
