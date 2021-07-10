import React from 'react';
import styled from 'styled-components';
import light from '../static/images/light.png';

const Wrapper = styled.div`
  grid-column: 6 / 8;
  margin-top: 1em;
  width: 100%;

  & > div {
    display: grid;
    grid-template-rows: 4fr 1fr;
    object-fit: cover;
    width: 100%;
  }

  & > div > div:nth-child(1) {
    object-fit: cover;
    width: 100%;
    border-bottom: 2px solid;
    margin-bottom: 0.5em;
  }

  & > div > div:nth-child(1) > img {
    object-fit: cover;
    width: 100%;
  }
`;

const Item = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src={light}></img>
        </div>
        <div>
          No.87 <br></br>Playful desk lamp <br></br> Hooded monk
        </div>
      </div>
    </Wrapper>
  );
};

export default Item;
