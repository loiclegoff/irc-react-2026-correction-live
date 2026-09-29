import { Visual } from "./Visual";

export function Robot({ robot, selected, onSelect }) {
  return (
    <article className={`item-card ${selected ? "selected" : ""}`}>
      <button
        type="button"
        className="robot-select"
        onClick={onSelect}
        aria-pressed={selected}
      >
        <span className="item-title">{robot.title}</span>
      </button>
      <Visual type={robot.visual_type} src={robot.visual_src} title={robot.title} />
    </article>
  );
}
