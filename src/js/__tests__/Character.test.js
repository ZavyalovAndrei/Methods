import { Character } from "../Character";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Magician'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Daemon'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Character(name, type, 100, 1, 10, 40)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result= new Character('Олег', 'Undead', 100, 1, 10, 40);
    expect(result.toString()).toEqual('Undead Олег (уровень: 1, здоровье: 100, атака: 10, защита: 40)');
  });

  test('should throw error when levelUp with health <= 0', () => {
    const result = new Character('Иван', 'Bowerman', 0, 1, 25, 25);
    expect(()=>{result.levelUp()}).toThrow('Нельзя повысить левел умершего персонажа.');
  })

  test('should change characteristics when levelUp', () => {
    const testCharacter = new Character('Олег', 'Undead', 78, 3, 10, 40);
    testCharacter.levelUp();
    expect(testCharacter.toString()).toEqual('Undead Олег (уровень: 4, здоровье: 100, атака: 12, защита: 48)');
  })

  test.each([
    [50, 32, 30], [30, 0, 50], [32, 0, 60],
    ])(
    'health %i should change to %i when dealing damage %i', ( currentHealth, newHealth, points ) => {
      const testCharacter = new Character('Олег', 'Undead', currentHealth, 1, 10, 40);
      testCharacter.damage(points);
      expect(testCharacter.health).toBe(newHealth);
  });