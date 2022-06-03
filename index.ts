let myName: string = "Ihsan";

interface Profile {
    name: string;
    division: string;
}

const getMyName = (firstName: string, lastName: string, division: string): Profile => {
    return {
        name: `${firstName} ${lastName}`,
        division
    }
}

const getInformation = (profile: Profile): void => {
    console.log(`${profile.name} is from division ${profile.division}`)
}

let ihsan: Profile = getMyName("Muhammad", "Ihsan", "Technology Researcher");
getInformation(ihsan);