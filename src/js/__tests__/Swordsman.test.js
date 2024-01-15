import { Swordsman } from "../Swordsman";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Swordsman'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Swordsman'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Swordsman(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Swordsman('Юрий', 'Swordsman');
    expect(result.toString()).toEqual('Swordsman Юрий (уровень: 1, здоровье: 100, атака: 40, защита: 10)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Swordsman('Юрий');
    result.health = 0;
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const result = new Swordsman('Юрий');
    result.level = 3;
    result.health = 98;
    result.levelUp();
    expect(result.toString()).toEqual('Swordsman Юрий (уровень: 4, здоровье: 100, атака: 48, защита: 12)');
  })

  test.each([
    [87, 69, 20], [45, 0, 50], [25, 0, 37],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Swordsman('Юрий');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });