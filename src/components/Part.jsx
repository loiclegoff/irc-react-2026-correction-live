import { Visual } from "./Visual";

export function Part({ part }) {
  return (
    <article className="item-card">
      <h3>{part.title}</h3>
      <Visual type={part.visual_type} src={part.visual_src} title={part.title} />
      <p>{part.description}</p>
      <p className="price">{part.price} €</p>
    </article>
  );
}
