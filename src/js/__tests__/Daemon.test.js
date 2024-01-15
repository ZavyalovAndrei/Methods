import { Daemon } from "../Daemon";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Daemon'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Daemon'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Daemon(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Daemon('Иван', 'Daemon');
    expect(result.toString()).toEqual('Daemon Иван (уровень: 1, здоровье: 100, атака: 10, защита: 40)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Daemon('Иван');
    result.health = 0;
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const result = new Daemon('Иван');
    result.level = 4;
    result.health = 33;
    result.levelUp();
    expect(result.toString()).toEqual('Daemon Иван (уровень: 5, здоровье: 100, атака: 12, защита: 48)');
  })

  test.each([
    [50, 26, 40], [48, 0, 80], [15, 0, 30],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Daemon('Иван');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });