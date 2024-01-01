import React, { useState, useCallback } from 'react';

const HocCounter = (WrappedComponent, incrementValue = 1) => {
  return function HOCComponent(props) {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
      setCount((prevCount) => prevCount + incrementValue);
    }, [incrementValue]);

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        {...props}
      />
    );
  };
};

export default HocCounter;
