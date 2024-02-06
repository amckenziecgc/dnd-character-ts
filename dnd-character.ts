export class DnDCharacter {
    hitpoints: number
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number

    constructor(){
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();

        //this may in theroy need to be dynamic
        this.hitpoints = DnDCharacter.getModifierFor(this.constitution) + 10;
    }

    static getModifierFor(roll: number){
        return Math.floor((roll-10) / 2);
    }
    static generateAbilityScore(){
        //this isn't at all statistically correct. 4d6 drop the lowest is not at all 'random'
        //return Math.floor(Math.random()*15) + 3;
        const rolls: number[] = [];

        for(let i=0; i<4; i++){
            rolls[i] = DnDCharacter.rollDie(6);
        }

        return rolls.sort().slice(1).reduce((sum, roll) => sum + roll);
    }

    //roll any kind of die!
    static rollDie(die: number){
        return (Math.random() * (die-1)) + 1
    }
}
