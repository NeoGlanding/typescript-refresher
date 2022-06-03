"use strict";
var myName = "Ihsan";
var getMyName = function (firstName, lastName, division) {
    return {
        name: firstName + " " + lastName,
        division: division
    };
};
var getInformation = function (profile) {
    console.log(profile.name + " is from division " + profile.division);
};
var ihsan = getMyName("Muhammad", "Ihsan", "Technology Researcher");
getInformation(ihsan);
