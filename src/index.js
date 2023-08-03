export default function healthIndication(hero) {
  let meaning;
  if (hero.health > 50) {
    meaning = 'healthy';
  } else if (hero.health < 15) {
    meaning = 'critical';
  } else {
    meaning = 'wounded';
  }
  return meaning;
}
