import { useState, useEffect } from 'react';
import { Part } from './Part';

export function PartList({ partIds, setPart }) {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    if (partIds.length > 0) {
      fetch(`https://robot-cpe.cleverapps.io/parts?${partIds.map(id => `id=${id}`).join('&')}`)
        .then((response) => response.json())
        .then((data) => setParts(data))
        .catch((error) => console.error('Error fetching parts:', error));
    } else {
      setParts([]);
    }
  }, [partIds]);

  if (parts.length === 0) {
    return <p>No parts selected.</p>;
  }

  return (
    <div>
      <h2>Selected Parts</h2>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} title={part.title} price={part.price} onPartSelect={setPart} description={part.description} />
        ))}
      </ul>
    </div>
  );
}