import { Character } from './Character';

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1, 25, 25);
    }
}