export const newCoordsByRotate = (initCoords, axis, rotate) => {
  const R = Math.sqrt((axis.x - initCoords.x) ** 2 + (axis.y - initCoords.y) ** 2)
  
  const curDeg =
    (Math.atan((initCoords.y - axis.y) / (initCoords.x - axis.x)) * 180) /
    Math.PI

  const d = (initCoords.x - axis.x < 0) ? 180 : 0

  const x = R * Math.cos(((curDeg + rotate-d) / 180) * Math.PI) + axis.x
  const y = R * Math.sin(((curDeg + rotate-d) / 180) * Math.PI) + axis.y
  return { x, y }
}
