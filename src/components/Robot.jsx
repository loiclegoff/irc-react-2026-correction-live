import Card from 'react-bootstrap/Card';
import { VisualRobot } from './VisualRobot';

export function Robot({ id, title, src, type }) {
  return (
    <Card style={{ width: '18rem' }}>
      <VisualRobot src={src} type={type} title={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
      </Card.Body>
    </Card>
  );
}