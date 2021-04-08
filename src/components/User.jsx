import React, { useState } from 'react';

export default function User({
  id, name, age, onUserAgeChange,
}) {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    onUserAgeChange(id, event.target.value);
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>
        I am
        {' '}
        {age}
      </p>
      <p>
        New age:
        {' '}
        {inputValue}
      </p>
      <p>
        City:
        {' '}
        {city}
      </p>
      <input value={inputValue} onChange={onInputChange} placeholder="age" />
      <input value={city} onChange={onCityChange} placeholder="city" />
    </li>
  );
}
