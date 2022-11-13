// aliases
type ID  = string;
type PopularTag  = string;
// combining aliases and unions
type MaybePopularTag = PopularTag | null ;

interface userInterface {
    id: ID;
    name : string;
    surname : string;
}

// here we can store either string or null
const dragonTags : MaybePopularTag = "dragon";

// here we can store the array of strings
const popularTags: PopularTag[] = ['vishal','singh'];

let username : string = 'alex';

// | pipe in b/w string and number is known as union and it is used to allow multiple data types
let pageName : string | number = '1';

let errorMessage : string | null = null;

let person : userInterface | null = null;

let someProp : string | number | null | string[] | undefined | object;

