export default function returnHealthStatus(arrObj) {
  const unitHealthStatus = [];
  arrObj.forEach((unit) => {
    if (unit.health > 50) {
      unitHealthStatus.push('healthy');
    }
    if (unit.health >= 15 && unit.health <= 50) {
      unitHealthStatus.push('wounded');
    }
    if (unit.health < 15) {
      unitHealthStatus.push('critical');
    }
    return unitHealthStatus;
  });

  return unitHealthStatus;
}
