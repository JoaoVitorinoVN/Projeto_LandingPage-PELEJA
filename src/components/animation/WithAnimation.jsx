import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WithAnimation.css';

const WithAnimation = (WrappedComponent) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={`animate-section ${inView ? 'animate-visible' : ''}`}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithAnimation;
