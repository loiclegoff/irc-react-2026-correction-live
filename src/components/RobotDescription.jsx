import { useEffect, useState } from "react";
import { Visual } from "./Visual";

const API_URL = "https://robot-cpe.cleverapps.io";

export function RobotDescription({ robotId }) {
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    if (robotId === null) return;

    fetch(`${API_URL}/robots/${robotId}`)
      .then((response) => response.json())
      .then((data) => setRobot(data))
      .catch((error) => console.log(error));
  }, [robotId]);

  return (
    <section className="panel" aria-label="Description du robot">
      <h2>Description du robot</h2>
      {robot ? (
        <>
          <h3>{robot.title}</h3>
          <p>Robot n°{robot.id}</p>
          <p>Pièces : {robot.parts.join(", ")}</p>
          <Visual type={robot.visual_type} src={robot.visual_src} title={robot.title} />
        </>
      ) : (
        <p>{robotId === null ? "Sélectionnez un robot." : "Chargement..."}</p>
      )}
    </section>
  );
}
