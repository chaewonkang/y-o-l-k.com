import React, { useEffect, useRef, useState } from 'react';

const delay = 3000;

function SlideShow({ list }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === list.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className='slideshow'>
        <div
          className='slideshowSlider'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {list.map((image, index) => (
            <>
              <div className='slide' key={index}>
                <img src={image.imgUrl.url}></img>
              </div>
            </>
          ))}
        </div>

        <div className='slideshowDots'>
          {list.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .slideshow {
          margin: auto;
          overflow: hidden;
          max-width: 100vw;
          height: 40%;
          max-height: 40%;
          position: relative;
        }

        .slideshowSlider {
          white-space: nowrap;
          transition: ease 1000ms;
          height: 50%;
          max-height: 50%;
          margin-bottom: 1.5em;
        }

        .slide {
          display: inline-block;
          object-fit: cover;
          width: 100%;
          position: relative;
          margin: 0;
          height: 40%;
          max-height: 40%;
          margin-bottom: 3em;
        }

        .slide > img {
          display: flex;
          align-self: center;
          justify-self: center;
          width: 30%;
          max-width: 30%;
          height: inherit;
          object-fit: cover;
          margin: 0 auto;
        }

        .slide > span {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          height: 15%;
          display: flex;
          align-items: center;
          padding-left: 1.5em;
          font-size: 20px;
          color: #fff;
          font-family: 'HUFSM';
        }

        /* Buttons */
        .slide_label {
          text-align: center;
          position: absolute;
          bottom: 20px;
          left: 50%;
        }

        .slideshowDots {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          vertical-align: middle;
          margin: 0 auto;
        }

        .slideshowDot {
          display: inline-block;
          height: 12px;
          width: 12px;

          cursor: pointer;
          margin: 15px 7px 0px;
          border: 1px solid var(--color-primary);
          background-color: rgba(0, 0, 0, 0);
        }

        .slideshowDot.active {
          background-color: var(--color-primary);
        }

        @media screen and (max-width: 770px) {
          .slideshow {
            margin: auto;
            overflow: hidden;
            max-width: 100vw;
            margin-top: 1.5em;
            position: relative;
          }

          .slide {
            display: inline-block;
            object-fit: cover;
            width: 100%;
            position: relative;
            margin: 0;
            margin-bottom: 3em;
          }

          .slide > img {
            display: flex;
            align-self: center;
            justify-self: center;
            width: 70%;
            max-width: 70%;
            object-fit: cover;
            margin: 0 auto;
          }

          .slide > span {
            font-size: 0.75em;
          }
        }
      `}</style>
    </>
  );
}

export default SlideShow;
