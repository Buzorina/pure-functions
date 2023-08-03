import healthIndication from './index';

test.each([
  { name: 'мечник', health: 10, expected: 'critical' },
  { name: 'маг', health: 80, expected: 'healthy' },
  { name: 'лучник', health: 30, expected: 'wounded' },
])(
  'determines the level %s of health %i',
  ({ name, health, expected }) => {
    const result = healthIndication({ name, health, expected });
    expect(result).toBe(expected);
  },
);
