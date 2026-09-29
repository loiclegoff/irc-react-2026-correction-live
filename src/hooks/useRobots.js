import { useState, useEffect } from "react";

export const useRobots = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("https://robot-cpe.cleverapps.io/robots");
        if (response.ok) {
          const data = await response.json();
          setRobots(data);
        }
      } catch (error) {
        console.error("Error fetching robots:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { robots, loading };
}