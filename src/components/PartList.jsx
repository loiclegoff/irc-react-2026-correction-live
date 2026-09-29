import { useEffect, useState } from "react";
import { Part } from "./Part";

const API_URL = "https://robot-cpe.cleverapps.io";

export function PartList({ robot }) {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    if (!robot) return;

    const query = new URLSearchParams(robot.parts.map((id) => ["id", id]));
    fetch(`${API_URL}/parts?${query}`)
      .then((response) => response.json())
      .then((data) => setParts(data))
      .catch((error) => console.log(error));
  }, [robot]);

  return (
    <section className="panel" aria-label="Pièces">
      <h2>Pièces</h2>
      {robot ? (
        <div className="item-list">
          {parts.map((part) => <Part key={part.id} part={part} />)}
        </div>
      ) : (
        <p>Sélectionnez un robot.</p>
      )}
    </section>
  );
}
