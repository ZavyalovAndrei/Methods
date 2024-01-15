import { Magician } from "../Magician";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Magician'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Magician'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Magician(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Magician('Виталий', 'Magician');
    expect(result.toString()).toEqual('Magician Виталий (уровень: 1, здоровье: 100, атака: 10, защита: 40)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Magician('Виталий');
    result.health = 0;
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const result = new Magician('Виталий');
    result.level = 8;
    result.health = 18;
    result.levelUp();
    expect(result.toString()).toEqual('Magician Виталий (уровень: 9, здоровье: 100, атака: 12, защита: 48)');
  })

  test.each([
    [63, 33, 50], [36, 0, +60], [15, 0, 32],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Magician('Виталий');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });