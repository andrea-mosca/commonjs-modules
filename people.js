const completeNameObject = require("./names.js");
const createHobbies = require("./hobbies.js");

const createPeople = () =>{
    const people = {
        fullName : completeNameObject("Andrea", "moscatelli"),
        hobbies : createHobbies("studiare", "correre", "leggere")
    };
    return people;
};

console.log(createPeople());

