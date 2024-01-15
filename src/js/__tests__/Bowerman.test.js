import { Bowerman } from "../Bowerman";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Bowerman'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Bowerman'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Bowerman(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Bowerman('Олег', 'Bowerman');
    expect(result.toString()).toEqual('Bowerman Олег (уровень: 1, здоровье: 100, атака: 25, защита: 25)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Bowerman('Иван');
    result.health = 0;
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const result = new Bowerman('Олег');
    result.levelUp();
    expect(result.toString()).toEqual('Bowerman Олег (уровень: 2, здоровье: 100, атака: 30, защита: 30)');
  })

  test.each([
    [50, 35, 20], [30, 0, 50], [32, 0, 60],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const result = new Bowerman('Олег');
      result.health = currentHealth;
      result.damage(points);
      expect(result.health).toBe(newHealth);
  });