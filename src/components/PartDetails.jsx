import { useSelector } from 'react-redux';
import { selectSelectedPart } from '../core/selectors';

export function PartDetail() {
  const part = useSelector(selectSelectedPart);

  if (!part) {
    return <p>No part selected.</p>;
  }

  return (
    <div>
      <h2>Part Details</h2>
      <p><strong>Title:</strong> {part.title}</p>
      <p><strong>Price:</strong> ${part.price.toFixed(2)}</p>
      <p><strong>Description:</strong> {part.description}</p>
    </div>
  );
}