import { coordinates } from "./displayTypes";

function throwOnBadString(value: string): void {
    if (value.length != 1) {
        throw new Error(`Invalid character. Expected a string of length 1; got a string of length ${value.length}`);
    }
}

export function validateSetCharCharacter(_, __, descriptor: PropertyDescriptor) {
    const setChar = descriptor.value;
    
    descriptor.value = function(coords: coordinates, character: string) {
        throwOnBadString(character);
        
        return setChar.call(this, coords, character);
    }
}