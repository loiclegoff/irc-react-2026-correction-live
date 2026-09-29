import { Visual } from "../visual/Visual";

export const PartCard = ({ part, onClick, selected }) => {
  return (
    <div
      className={"card" + (selected ? " selected" : "")}
      onClick={() => onClick()}
    >
      <h3>{part.title}</h3>
      <Visual visual_type={part.visual_type} visual_src={part.visual_src} />
    </div>
  );
};
