import { Card } from "react-bootstrap";

export function Part({ id, title, price, onPartSelect, description }) {
  return (
    <Card key={id} onClick={() => onPartSelect({ id, title, price, description })}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
