import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// images
import itemArrow from '../static/images/arrow.png';
import itemArrowWhite from '../static/images/arrowWhite.png';

const Wrapper = styled.div`
  position: relative;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  height: 100%;

  z-index: 10;

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 2.5em;
  }
`;

const ProductArea = styled.div`
  display: grid;
  width: 100%;
`;

const ImageArea = styled.div`
  object-fit: cover;
  width: 100%;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 1em;

  img {
    object-fit: cover;
    width: 100%;
    // filter: drop-shadow(12px 12px 6px rgba(0, 0, 0, 0.4));

    @media ${(props) => props.theme.mobile} {
      width: 50vw;
      max-width: 50vw;
    }
  }
`;

const TextArea = styled.div`
  border-top: 1px solid;
  display: grid;
  padding-top: 1em;
  grid-template-columns: 4fr 1fr;
  font-size: 14px;

  & > div:nth-child(2) {
    background-position: top right;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

const ItemPreviewMenu = styled.div`
  display: none;
  z-index: 100;

  & {
    display: flex;
    align-self: flex-start;
    justify-self: flex-end;
    cursor: pointer;
  }

  & > div > div {
    width: 20px;
    height: 1px;
    margin: 6px 0;
  }
`;

const StyledBurger = styled.button`
  position: relative;
  background-color: rgba(0, 0, 0, 0) !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ open }) => (open ? '1.5rem' : '1rem')};
    background-color: var(--color-primary) !important;

    height: 0.05rem;
    border-radius: 0px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(30deg)' : 'rotate(50deg)')};
    }

    :last-child {
      transform: ${({ open }) => (open ? 'rotate(-30deg)' : 'rotate(-50deg)')};
      margin-left: ${({ open }) => (open ? '0' : '.6rem')};
    }
  }
`;

const StyledMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: fit-content;
  padding-top: 0px;
  padding-bottom: 0;
  position: absolute;
  font-size: 14px;

  & > div {
    padding-bottom: 0.5em;
    padding-top: 0.15em;
    animation: fadeInFromNone 0.3s ease-in-out;
    color: var(--color-primary) !important;
  }

  & > div > span {
    display: block;
  }

  & > div > a {
    display: block;
    padding: 0.25em;
    margin-top: 0.5em;

    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: em;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Item = ({ info }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <ProductArea>
          <ImageArea>
            <img src={info.imgList[0].imgUrl.url}></img>
          </ImageArea>
          <TextArea>
            <Link
              key={info.title}
              href={`/?itemTitle=${info.title}`}
              as={`/product/${info.title}`}
            >
              <a
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-primary)',
                }}
              >
                <div>
                  No.{info.index} <br></br> {info.category} <br></br>{' '}
                  {info.title}
                </div>
              </a>
            </Link>
            <ItemPreviewMenu>
              <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
              </StyledBurger>
            </ItemPreviewMenu>
          </TextArea>
        </ProductArea>
        <StyledMenu open={open} setOpen={setOpen}>
          <div>
            <span>{info.origin}</span>
            <span>{info.price}</span>
          </div>
        </StyledMenu>
      </Wrapper>
    </>
  );
};

export default Item;
