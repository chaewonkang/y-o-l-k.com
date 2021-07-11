import React from 'react';
import styled from 'styled-components';

// images
import light from '../static/images/light.png';
import itemArrow from '../static/images/arrow.png';
import itemArrowWhite from '../static/images/arrowWhite.png';

const Wrapper = styled.div`
  grid-column: 6 / 8;
  grid-row: 1 / 2;
  margin-top: 2.5em;
  margin-bottom: 2.5em;
  width: 100%;
`;

const ProductArea = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageArea = styled.div`
  object-fit: cover;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const TextArea = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  font-size: 14px;

  & > div:nth-child(2) {
    margin-top: 0.25em;
    background-position: top right;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 100%;
  }
`;

const Item = ({ theme }) => {
  return (
    <Wrapper>
      <ProductArea>
        <ImageArea>
          <img src={light}></img>
        </ImageArea>
        <TextArea>
          <div>
            No.87 <br></br>Playful desk lamp <br></br> Hooded monk
          </div>
          {theme === 'dark' ? (
            <div style={{ backgroundImage: `url(${itemArrowWhite})` }}></div>
          ) : (
            <div style={{ backgroundImage: `url(${itemArrow})` }}></div>
          )}
          <div></div>
        </TextArea>
      </ProductArea>
    </Wrapper>
  );
};

export default Item;
