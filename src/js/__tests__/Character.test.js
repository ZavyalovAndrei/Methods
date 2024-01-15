import { Character } from "../Character";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Magician'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Daemon'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Character(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Character('Олег', 'Undead');
    expect(result.toString()).toEqual('Undead Олег (уровень: 1, здоровье: 100, атака: undefined, защита: undefined)');
  });

  test("shouldn't change characteristics when levelUp", () => {
    const testCharacter = new Character('Олег', 'Undead');
    testCharacter.levelUp();
    expect(testCharacter.toString()).toEqual('Undead Олег (уровень: 1, здоровье: 100, атака: undefined, защита: undefined)');
  })

  test("shouldn't change characteristics when damage", () => {
    const testCharacter = new Character('Олег', 'Undead');
    testCharacter.damage(35);
    expect(testCharacter.toString()).toEqual('Undead Олег (уровень: 1, здоровье: 100, атака: undefined, защита: undefined)');
  })