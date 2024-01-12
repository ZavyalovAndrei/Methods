import { Bowerman } from'./js/Bowerman';
import { Daemon } from'./js/Daemon';
import { Undead } from'./js/Undead';
import { Zombie } from'./js/Zombie';
import { Swordsman } from'./js/Swordsman';
import { Magician } from './js/Magician';

const infoField = document.getElementById('info');
const daemon = new Daemon('Илья');
const bowerman = new Bowerman('Саша');
daemon.damage(30);
bowerman.levelUp();

const charactersInfo = [
    new Magician('Вася').toString(), 
    new Swordsman('Миша').toString(), 
    new Zombie('Гера').toString(),
    new Undead('Юра').toString(),
    daemon.toString(),
    bowerman.toString()
]
infoField.insertAdjacentHTML("afterbegin", charactersInfo.reduce((acc, value) => acc + '<p>' + value + '</p>', ""));