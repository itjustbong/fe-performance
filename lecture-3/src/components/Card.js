import React, { useEffect, useRef } from 'react';

function Card(props) {
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {};
    const cb = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const prevSibling = target.previousSibling;
          const prev2Sibling = prevSibling.previousSibling;

          target.src = target.dataset.src;
          prevSibling.srcset = prevSibling.dataset.srcset;
          prev2Sibling.srcset = prev2Sibling.dataset.srcset;

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(cb, options);
    observer.observe(imgRef?.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Card text-center">
      <picture>
        <source data-srcset={props.webp} type="image/webp" />
        <source data-srcset={props.image} type="image/jpg" />
        <img data-src={props.image} ref={imgRef} />
      </picture>
      {/* <img data-src={props.image} ref={imgRef} /> */}
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
