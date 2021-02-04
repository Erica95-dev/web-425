 /* 
Title: assignment 1.4
Author: Erica Perry
Date:12/19/2020
Modified: Erica Perry
Description: Typescript
*/ 

import { IPerson } from "./person.interface";

class Person implements IPerson {
    
    firstName: string;
    lastName: string;

    /* generated an constructor for two fields */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName =lastName;
    }
}
/* output data */
let myName = new Person(" Erica", "Perry");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);