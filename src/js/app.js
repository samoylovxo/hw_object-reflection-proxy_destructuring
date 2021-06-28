/* eslint-disable linebreak-style */

export default function findSpecialAttacks(characterOfHero) {
  if (!characterOfHero.special) {
    throw new Error('Нет специальных атак');
  }
  const attackProperties = [];

  characterOfHero.special.forEach((el) => {
    const { id, name, description = 'Описание недоступно' } = el;
    attackProperties.push([id, name, description]);
  });

  return attackProperties;
}
