/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
import findSpecialAttacks from '../src/js/app';

test('Special is', () => {
  const result = findSpecialAttacks({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  });

  expect(result).toEqual([
    [8, 'Двойной выстрел', 'Двойной выстрел наносит двойной урон'],
    [9, 'Нокаутирующий удар', 'Описание недоступно'],
  ]);
});

test('No special', () => {
  expect(() =>
    findSpecialAttacks({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
    })
  ).toThrowError('Нет специальных атак');
});
