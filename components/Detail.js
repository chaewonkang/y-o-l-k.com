import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SlideShow } from './index';
import { useRouter } from 'next/router';

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
    p {
      text-align: left;
      padding-left: 1.25em;
      padding-right: 1.25em;
    }
  }
`;

const Detail = ({ item }) => {
  if (item)
    return (
      <DetailWrapper>
        <DetailContent>
          <DetailTitleArea>
            <span>No.{item[0].index}</span>
            <span>
              {item[0].category} {item[0].title}
            </span>
            <span>{item[0].price}</span>
          </DetailTitleArea>
          <DetailImageArea>
            <SlideShow list={item[0].imgList}></SlideShow>
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
              <span>{item[0].type}</span>
              <span>{item[0].origin}</span>
              <span>{item[0].material}</span>
              <span>{item[0].size}</span>
              <span>{item[0].weight}</span>
            </div>
            <div>
              <span>Product Detail</span>
            </div>
            <div>
              {item[0].description.content.map((elem, index) => (
                <p key={index}>{elem.content[0].value}</p>
              ))}
            </div>
          </DetailInfoArea>
        </DetailContent>
      </DetailWrapper>
    );

  return (
    <DetailWrapper>
      <div>Loading...</div>
    </DetailWrapper>
  );
};

export default Detail;
