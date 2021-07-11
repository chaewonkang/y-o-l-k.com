import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// images

import itemArrow from '../static/images/arrow.png';
import itemArrowWhite from '../static/images/arrowWhite.png';

const Wrapper = styled.div`
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  width: 100%;
  z-index: 100000;
`;

const ProductArea = styled.div`
  display: grid;
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

const Item = ({ theme, info }) => {
  return (
    <Link
      key={info.no}
      href={`/product/[productNo]?productNo=${info.no}`}
      as={`/product/${info}`}
    >
      <a style={{ textDecoration: 'none', color: 'var(--color-primary)' }}>
        <Wrapper>
          <ProductArea>
            <ImageArea>
              <img src={info.image}></img>
            </ImageArea>
            <TextArea>
              <div>
                No.{info.no} <br></br> {info.category} <br></br> {info.title}
              </div>
              {theme === 'dark' ? (
                <div
                  style={{ backgroundImage: `url(${itemArrowWhite})` }}
                ></div>
              ) : (
                <div style={{ backgroundImage: `url(${itemArrow})` }}></div>
              )}
              <div></div>
            </TextArea>
          </ProductArea>
        </Wrapper>
      </a>
    </Link>
  );
};

export default Item;
