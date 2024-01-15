import { Zombie } from "../Zombie";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Zombie'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Zombie'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Zombie(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Zombie('Михаил', 'Zombie');
    expect(result.toString()).toEqual('Zombie Михаил (уровень: 1, здоровье: 100, атака: 40, защита: 10)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Zombie('Михаил');
    result.health = 0;
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const result = new Zombie('Михаил');
    result.level = 99;
    result.health = 52;
    result.levelUp();
    expect(result.toString()).toEqual('Zombie Михаил (уровень: 100, здоровье: 100, атака: 48, защита: 12)');
  })

  test.each([
    [38, 20, 20], [45, 0, 50], [27, 0, 39],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Zombie('Михаил');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });