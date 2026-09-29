import { useMemo } from "react";

export const useRobotParts = (selectedRobot, parts) => {
  const robotParts = useMemo(() => {
    if (selectedRobot && parts) {
      return parts.filter((p) => selectedRobot.parts.includes(p.id))
    }
    return []
  }, [selectedRobot, parts])

  return { robotParts }
}