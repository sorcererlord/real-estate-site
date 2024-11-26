import React, { useRef, useEffect, useState } from 'react';
import './ImageBlurStyles.css'

const BlurredImage = ({className,divClassName , src, alt}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);



  useEffect(() => {
    let observerRefValue = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.intersectionRatio > 0) {
            observer.unobserve(targetRef.current)
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0, // 10% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
      observerRefValue = targetRef.current;
    }

    // Clean up the observer
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div className={`zoom ${divClassName}`}>
      <img ref={targetRef} className={`img-blur ${className}${isVisible ? ' visible' : ''}`} src={src} alt={alt} />
    </div>
  );
};

export default BlurredImage;

