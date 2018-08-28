import { Injectable } from '@angular/core';

export interface AbilityInterface<K, V> {
    getKeys(): K[];
    getValues(): V[];
    get(key: K): V;
    put(key: K, val: V): void;
}

@Injectable()
export class MyAbilityInterface<K extends string, V> implements AbilityInterface<K, V> {

    private charAbility: Partial<Record<K, V>>;

    constructor() {
        this.charAbility = {};
    }

    public getKeys(): K[] {
        let keys: K[] = [];
        for(let key in this.charAbility) {
            keys.push(key);
        }
        return keys;
    }

    public getValues(): V[] {
        let vals:V[] = [];
        for(let key in this.charAbility) {
            vals.push(this.charAbility[key]);
        }
        return vals;
    }

    public get(key: K): V {
        return this.charAbility[key];
    }

    public put(key: K, val: V): void {
        this.charAbility[key] = val;
    }

    charStats: any = new MyAbilityInterface<string, number>();
    
    // charStats.put('Strength', rawCharStats[0]);
}

/*---------------------------------------------------*/

export interface SkillsInterface<T> {
    Skill(key: string, value: T);
}

export class SkillsInterface<T> implements SkillsInterface<T> {
    private _skill: { [index: string]: T } = {};
}

/*---------------------------------------------------*/

export interface SavThrowInterface<T>{
    SavThrow(key: string, value: T);
}

export class SavThrowInterface<T> implements SavThrowInterface<T> {
    private _savThrow: { [index: string]: T } = {};
}
