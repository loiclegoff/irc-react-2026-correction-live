import Card from 'react-bootstrap/Card';

export function Robot({ id, title, src, type }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Type: {type}</Card.Text>
      </Card.Body>
    </Card>
  );
}