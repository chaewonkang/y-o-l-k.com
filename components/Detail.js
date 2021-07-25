import React from 'react';
import styled from 'styled-components';
import { SlideShow } from './index';

const DetailWrapper = styled.div`
  overflow: auto;
  height: 90%;
  position: relative;
  padding: 20px;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.75em;
    padding: 10px;
  }
`;

const DetailContent = styled.div``;

const DetailTitleArea = styled.div`
  margin-bottom: 1em;
  position: sticky;
  top: 0;
  z-index: 2;
  span {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
`;

const DetailImageArea = styled.div`
  margin-bottom: 1em;
`;

const DetailInfoArea = styled.div`
  text-align: center;

  div:first-child,
  div:nth-child(2) {
    display: flex;

    & > span {
      width: 25%;
    }
  }

  div:first-child,
  div:nth-child(3) {
    border-top: 1px solid var(--color-primary);
    border-bottom: 1px solid var(--color-primary);
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }

  div:nth-child(2),
  div:last-child {
    padding-top: 1.25em;
    padding-bottom: 1.25em;
  }

  div:nth-child(3),
  div:last-child {
    padding-bottom: 0;
    p {
      text-align: left;
      padding-left: 1.25em;
      padding-right: 1.25em;
    }
  }
`;

const Detail = () => {
  return (
    <DetailWrapper>
      <DetailContent>
        <DetailTitleArea>
          <span>No.87</span>
          <span>Playful desk lamp Hooded Monk</span>
          <span>170,000</span>
        </DetailTitleArea>
        <DetailImageArea>
          <SlideShow></SlideShow>
        </DetailImageArea>
        <DetailInfoArea>
          <div>
            <span>Type</span>
            <span>Origin</span>
            <span>Material</span>
            <span>Size</span>
            <span>Weight</span>
          </div>
          <div>
            <span>Table Stand</span>
            <span>Belgium, 1960s</span>
            <span>Glass, Metal</span>
            <span>24 x 15 cm</span>
            <span>840 g</span>
          </div>
          <div>
            <span>Product Detail</span>
          </div>
          <div>
            <p>
              This product is simple to assemble. This is an acrylic light
              designed to fit the IKEA stands. Mirror acrylic and transparent
              acrylic are arranged to form a semicircle. It shines around the
              Half Mirror bulb. The bottom acrylic is made of mirror acrylic. It
              has a reflective effect.
            </p>
          </div>
        </DetailInfoArea>
      </DetailContent>
    </DetailWrapper>
  );
};

export default Detail;
