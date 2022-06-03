interface UserInterface {
    name: string;
    age: number;
    division: string;
    // ? means optional
    location?: string;
    introduction(): void;
    // ? means optional
    optionalFunction?(): void;
}


let andika: UserInterface = {
    name: "Andika",
    age: 19,
    division: "Tech Researcher",
    location: 'Bogor',
    introduction() {
        console.log(`Hi! My name is ${this.name}, I am ${this.age} year/s old, also part of ${this.division} division`);
    },
    optionalFunction() {
        console.log('Optional')
    }
}

let andi: UserInterface = {
    name: "Andi",
    age: 20,
    division: "Product Researcher",
    introduction() {
        console.log(`Hi! My name is ${this.name}, I am ${this.age} year/s old, also part of ${this.division} division`);
    }
}

andika.introduction();
andi.introduction();
