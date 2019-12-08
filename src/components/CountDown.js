import React, {useState, useEffect} from 'react';
import Result from './Result';

const CountDown = () => {
  let [count, setCount] = useState(3);
  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        count--;
        setCount(count);
      };
      clearInterval(timer);
    }, 1000);
  }, [count]);

  return (
    <div>
      {
        count > 0
          ?
          <p>{count}</p>
          :
          <Result />
      }
    </div>
  );
};

export default CountDown;
