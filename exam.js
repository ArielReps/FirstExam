const militaryUnit = {
  name: "1st Infantry Division",
  location: "Fort Bragg, North Carolina, USA",
  establishmentDate: "1941-06-01",
  unitType: "Infantry Division",
  commandStructure: {
    commandingOfficer: {
      rank: "Major General",
      name: "John Doe",
      contact: {
        email: "john.doe@example.com",
        phone: "+1-555-123-4567",
      },
    },
    executiveOfficer: {
      rank: "Colonel",
      name: "Jane Smith",
      contact: {
        email: "jane.smith@example.com",
        phone: "+1-555-987-6543",
      },
    },
    chiefOfStaff: {
      rank: "Brigadier General",
      name: "Robert Brown",
      contact: {
        email: "robert.brown@example.com",
        phone: "+1-555-555-1234",
      },
    },
  },
  personnel: [
    {
      id: 1,
      name: "Private First Class Alice Johnson",
      rank: "Private First Class",
      role: "Rifleman",
      contact: {
        email: "alice.johnson@example.com",
        phone: "+1-555-000-1111",
      },
    },
    {
      id: 2,
      name: "Sergeant Michael White",
      rank: "Sergeant",
      role: "Squad Leader",
      contact: {
        email: "michael.white@example.com",
        phone: "+1-555-000-2222",
      },
    },
  ],
  equipment: {
    vehicles: [
      {
        type: "M1 Abrams Tank",
        quantity: 20,
        status: "Operational",
      },
      {
        type: "Humvee",
        quantity: 50,
        status: "Operational",
      },
    ],
    firearms: [
      {
        type: "M16 Rifle",
        quantity: 500,
        status: "Operational",
      },
      {
        type: "M249 SAW",
        quantity: 100,
        status: "Operational",
      },
    ],
    otherEquipment: [
      {
        type: "Night Vision Goggles",
        quantity: 150,
        status: "Operational",
      },
      {
        type: "Field Radios",
        quantity: 100,
        status: "Operational",
      },
    ],
  },
  missions: [
    {
      missionName: "Operation Desert Storm",
      startDate: "1991-01-17",
      endDate: "1991-02-28",
      description: "Combat operation to liberate Kuwait from Iraqi occupation.",
    },
    {
      missionName: "Operation Enduring Freedom",
      startDate: "2001-10-07",
      endDate: "2014-12-28",
      description:
        "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
    },
  ],
  trainingPrograms: [
    {
      programName: "Basic Combat Training",
      duration: 10,
      focus:
        "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
    },
    {
      programName: "Advanced Individual Training",
      duration: 12,
      focus:
        "Specialized training for specific military occupational specialties.",
    },
  ],
  history: [
    {
      eventDate: "1941-06-01",
      eventDescription: "Establishment of the 1st Infantry Division.",
    },
    {
      eventDate: "1944-06-06",
      eventDescription: "Participated in the D-Day landings in Normandy.",
    },
  ],
  currentDeployment: {
    location: "Middle East",
    mission: "Counter-terrorism operations",
    startDate: "2024-01-01",
    estimatedEndDate: "2024-12-31",
  },
};

//Mission 1: Get the name, rank and phone number of the chief of staff.
console.log(
  `Chief of staff ${militaryUnit.commandStructure.chiefOfStaff.rank} ${militaryUnit.commandStructure.chiefOfStaff.name} \n PN: ${militaryUnit.commandStructure.chiefOfStaff.contact.phone}`
);

//Mission 2: Get the ammount of soldiers the division have.
console.log(`The division contains ${militaryUnit.personnel.length} soldiers`);

//Mission 3: Make a function which Adds the current deployment to history and change it to the following object:
const GivenObjectAsNewDelpoyment = {
  location: "Israel",
  mission: "Fighting in Gaza with division 162",
  startDate: "2024-09-05",
  estimatedEndDate: "2025-03-05",
};
const NewDeployment = (newdeployment) => {
    militaryUnit.history.push({
        eventDate: militaryUnit.currentDeployment.startDate,
        eventDescription: militaryUnit.currentDeployment.mission + " In " + militaryUnit.currentDeployment.location
      });
      militaryUnit.currentDeployment = newdeployment;
      console.log(militaryUnit)
}

NewDeployment(GivenObjectAsNewDelpoyment)

//Mission 4: Make a function which adds a weapon to firearm, ** if the weapon already exists and it's status is the same add to quantity
const GivenObjectAsFirearm =   {
    type: "MAG36",
    quantity: 300,
    status: "Operational",
  }
  const AddFirearm = (firearm) =>{
    let isExists = false;
   militaryUnit.equipment.firearms.forEach(element => {
    if(element.status == firearm.status && element.type == firearm.type)
    {
        element.quantity += firearm.quantity;
        isExists = true;
    }
   });
   if(!isExists)
   {
    militaryUnit.equipment.firearms.push(firearm);
   }
   console.log(militaryUnit.equipment.firearms)
  }
  AddFirearm(GivenObjectAsFirearm);
  AddFirearm(GivenObjectAsFirearm);
//Mission 5: Using reduce,make a function which gets the length of all the training programs together
const GetLengthOfTraining = () =>{
    return militaryUnit.trainingPrograms.reduce((accumulator, currentvalue) => accumulator+currentvalue.duration, 0)
}
console.log("The length of the training are "+GetLengthOfTraining() + " weeks")