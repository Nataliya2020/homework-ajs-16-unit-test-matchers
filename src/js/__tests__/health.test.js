import returnHealthStatus from '../health';

test('matching the main points', () => {
  const result = returnHealthStatus([
    { name: 'маг', health: 50 },
    { name: 'мечник', health: 15 },
    { name: 'лучник', health: 0 },
  ]);

  expect(result).toEqual(['wounded', 'wounded', 'critical']);
});

test('matching min, max, between', () => {
  const result = returnHealthStatus([
    { name: 'маг', health: 51 },
    { name: 'лучник', health: 16 },
    { name: 'мечник', health: 1 },
  ]);

  expect(result).toEqual(['healthy', 'wounded', 'critical']);
});
