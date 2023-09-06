import { useState } from 'react';
import { sculptureList } from './Result.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  function handlePClick() {
    setIndex(index - 1);
  }

  const sculpture = sculptureList[index];
  const isNextDisabled = index === sculptureList.length - 1; // Check if at the end

  return (
    <>
      <button className='' onClick={handlePClick} disabled={index === 0}>
        Previous
      </button>
      <button onClick={handleClick} disabled={isNextDisabled}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
