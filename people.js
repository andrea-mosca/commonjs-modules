const completeNameObject = require("./names.js");
const createHobbies = require("./hobbies.js");

const createPeople = () =>{
    const nameObject = completeNameObject("Andrea", "Moscatelli");
    const people = {
        
        fullName : `${nameObject.firstName} ${nameObject.lastName}`,
        // fullName : completeNameObject("Andrea", "moscatelli"),
        hobbies : createHobbies("studiare", "correre", "leggere")
    };
    return people;
};

console.log(createPeople());

