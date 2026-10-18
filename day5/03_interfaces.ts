interface Encounter{
    encounter_id:number,
    patient_nbr:number,
    age: string,
    risk_level: string,
    status: string
}

const encounter: Encounter ={
    encounter_id:12346,
    patient_nbr:2003,
    age: "44",
    risk_level: "HIGH",
    status: "ASSIGNED"
}




const encounter2: Encounter ={
    encounter_id:12347,
    patient_nbr:2003,
    age: "48",
    risk_level: "MEDIUM",
    status: "ASSIGNED"
}
const encounters: Encounter[] =[encounter,encounter2]
//const encounters: Encounter[] = [encounter,];
console.log(encounters);
