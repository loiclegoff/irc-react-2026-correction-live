import { Visual } from "../visual/Visual";

export const RobotCard = ({ robot, onClick, selected }) => {
  return (
    <div
      className={"card" + (selected ? " selected" : "")}
      onClick={() => onClick()}
    >
      <h3>{robot.title}</h3>
      <Visual visual_type={robot.visual_type} visual_src={robot.visual_src} />
    </div>
  );
};
