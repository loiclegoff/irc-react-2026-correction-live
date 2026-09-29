import { useState, useEffect } from "react";

export const useParts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch("https://robot-cpe.cleverapps.io/parts");
        if (response.ok) {
          const data = await response.json();
          setParts(data);
        }
      } catch (error) {
        console.error("Error fetching parts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { parts, loading };
}