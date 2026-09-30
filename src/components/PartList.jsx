import { useEffect } from 'react';
import { Part } from './Part';
import { useSelector, useDispatch } from 'react-redux';
import { selectPartIds, selectParts } from '../core/selectors';
import { loadParts, setSelectedPartId } from '../core/actions';

export function PartList() {
  const partIds = useSelector(selectPartIds);
  const partsFromStore = useSelector(selectParts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (partIds.length > 0) {
      fetch(`https://robot-cpe.cleverapps.io/parts?${partIds.map(id => `id=${id}`).join('&')}`)
        .then((response) => response.json())
        .then((data) => dispatch(loadParts(data)))
        .catch((error) => console.error('Error fetching parts:', error));
    } else {
      dispatch(loadParts([]));
    }
  }, [partIds]);

  function onPartSelected(partId) {
    console.log('Selected part ID:', partId);
    dispatch(setSelectedPartId(partId));
  }

  if (partsFromStore.length === 0) {
    return <p>No parts selected.</p>;
  }

  return (
    <div>
      <h2>Selected Parts</h2>
      <ul>
        {partsFromStore.map((part) => (
          <Part key={part.id} id={part.id} title={part.title} price={part.price} onPartSelect={onPartSelected} description={part.description} />
        ))}
      </ul>
    </div>
  );
}