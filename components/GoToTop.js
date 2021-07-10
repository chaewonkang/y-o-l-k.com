import React from 'react';
import styled from 'styled-components';

const GoToTopContainer = styled.div`
  width: 34px;
  height: 76px;
  border: 1px solid ${(props) => props.theme.toggleButtonTextColor};
  border-radius: 35px / 80px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  display: grid;
`;

const GoToTopText = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  font-size: 14px;
`;

const GoToTop = () => {
  return (
    <GoToTopContainer>
      <GoToTopText>top</GoToTopText>
    </GoToTopContainer>
  );
};

export default GoToTop;
