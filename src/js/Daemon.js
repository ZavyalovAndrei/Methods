import { Character } from './Character';

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1, 10, 40);
    }
}