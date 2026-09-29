import Card from 'react-bootstrap/Card';

export function VisualRobot({ src, type, title }) {
  if (type === 'img') {
    return <Card.Img variant="top" src={src} alt={title} />
  } else if (type === 'video') {
    return <video src={src} controls />;
  } else {
    return <p>Unsupported visual type: {type}</p>;
  }
}

// export function VisualRobot({ src, type, title }) {
//   return type === 'img' ? <Card.Img variant="top" src={src} alt={title} /> : <video src={src} controls />;
// }


