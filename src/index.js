import { Bowerman } from'./js/Bowerman';
import { Daemon } from'./js/Daemon';
import { Undead } from'./js/Undead';
import { Zombie } from'./js/Zombie';
import { Swordsman } from'./js/Swordsman';
import { Magician } from './js/Magician';

const infoField = document.getElementById('info');

const charactersInfo = [
    new Magician('Вася').toString(), 
    new Swordsman('Миша').toString(), 
    new Zombie('Гера').toString(),
    new Undead('Юра').toString(),
    new Daemon('Илья').toString(),
    new Bowerman('Саша').toString()
]
infoField.insertAdjacentHTML("afterbegin", charactersInfo.reduce((acc, value) => acc + '<p>' + value + '</p>', ""));