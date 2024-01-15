import { Undead } from "../Undead";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Undead'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Undead'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Undead(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Undead('Алексей', 'Undead');
    expect(result.toString()).toEqual('Undead Алексей (уровень: 1, здоровье: 100, атака: 25, защита: 25)');
  });

  test('should change characteristics when levelUp', () => {
    const result = new Undead('Алексей');
    result.level = 22;
    result.health = 74;
    result.levelUp();
    expect(result.toString()).toEqual('Undead Алексей (уровень: 23, здоровье: 100, атака: 30, защита: 30)');
  })

  test.each([
    [50, 35, 20], [30, 0, 50], [32, 0, 60],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Undead('Алексей');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });