import { Card } from "react-bootstrap";

export function Part({ id, title, price, onPartSelect, description }) {
  return (
    <Card onClick={() => {
      console.log(`Part selected: ${id}`);
      onPartSelect(id);
    }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
