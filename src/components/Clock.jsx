import React, { useState, useEffect } from 'react';
import './Clock.css';

export default function NewClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock">
      <h1>Hello, world!</h1>
      <h2>
        It is
        {' '}
        {currentTime.toLocaleTimeString()}
        .
      </h2>
    </div>
  );
}
