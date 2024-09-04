
const {
  Mission1,
  Mission2,
  Mission3,
  Mission4,
  Mission5,
} = require("./exam.js");
//The given data
let militaryUnit = {
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
//Different data
let militaryUnit1 = {
    name: "2nd Armored Brigade",
    location: "Camp Pendleton, California, USA",
    establishmentDate: "1952-08-15",
    unitType: "Armored Brigade",
    commandStructure: {
      commandingOfficer: {
        rank: "Brigadier General",
        name: "Alice Cooper",
        contact: {
          email: "alice.cooper@example.com",
          phone: "+1-555-234-5678",
        },
      },
      executiveOfficer: {
        rank: "Lieutenant Colonel",
        name: "Bob Brown",
        contact: {
          email: "bob.brown@example.com",
          phone: "+1-555-876-5432",
        },
      },
      chiefOfStaff: {
        rank: "Colonel",
        name: "Carol Jones",
        contact: {
          email: "carol.jones@example.com",
          phone: "+1-555-345-6789",
        },
      },
    },
    personnel: [
      {
        id: 1,
        name: "Private First Class John Smith",
        rank: "Private First Class",
        role: "Tank Commander",
        contact: {
          email: "john.smith@example.com",
          phone: "+1-555-111-2222",
        },
      },
      {
        id: 2,
        name: "Sergeant Emma White",
        rank: "Sergeant",
        role: "Squad Leader",
        contact: {
          email: "emma.white@example.com",
          phone: "+1-555-111-3333",
        },
      },
    ],
    equipment: {
      vehicles: [
        {
          type: "M2 Bradley IFV",
          quantity: 30,
          status: "Operational",
        },
        {
          type: "Humvee",
          quantity: 40,
          status: "Operational",
        },
      ],
      firearms: [
        {
          type: "M4 Carbine",
          quantity: 600,
          status: "Operational",
        },
        {
          type: "M240 Machine Gun",
          quantity: 150,
          status: "Operational",
        },
      ],
      otherEquipment: [
        {
          type: "Thermal Imaging Cameras",
          quantity: 200,
          status: "Operational",
        },
        {
          type: "Satellite Phones",
          quantity: 80,
          status: "Operational",
        },
      ],
    },
    missions: [
      {
        missionName: "Operation Iraqi Freedom",
        startDate: "2003-03-20",
        endDate: "2011-12-18",
        description: "Combat operation to remove Saddam Hussein from power in Iraq.",
      },
      {
        missionName: "Operation Inherent Resolve",
        startDate: "2014-08-08",
        endDate: "Present",
        description:
          "Military operations aimed at defeating ISIS and stabilizing Iraq and Syria.",
      },
    ],
    trainingPrograms: [
      {
        programName: "Basic Armor Training",
        duration: 8,
        focus:
          "Fundamentals of armored vehicle operation, maintenance, and combat tactics.",
      },
      {
        programName: "Advanced Tactical Training",
        duration: 14,
        focus:
          "Advanced strategies for armored warfare and combined arms operations.",
      },
    ],
    history: [
      {
        eventDate: "1952-08-15",
        eventDescription: "Establishment of the 2nd Armored Brigade.",
      },
      {
        eventDate: "1965-03-08",
        eventDescription: "Deployed to Vietnam for combat operations.",
      },
    ],
    currentDeployment: {
      location: "Europe",
      mission: "NATO Peacekeeping Operations",
      startDate: "2024-02-01",
      estimatedEndDate: "2024-11-30",
    },
};
//More Complexed data
let militaryUnit2 = {
    name: "3rd Special Operations Group",
    location: "Fort Bragg, North Carolina, USA",
    establishmentDate: "1955-04-12",
    unitType: "Special Operations Group",
    commandStructure: {
        commandingOfficer: {
            rank: "Major General",
            name: "Sarah Mitchell",
            contact: {
                email: "sarah.mitchell@example.com",
                phone: "+1-555-654-3210",
            },
        },
        executiveOfficer: {
            rank: "Colonel",
            name: "David Clark",
            contact: {
                email: "david.clark@example.com",
                phone: "+1-555-987-6543",
            },
        },
        chiefOfStaff: {
            rank: "Brigadier General",
            name: "Linda Harris",
            contact: {
                email: "linda.harris@example.com",
                phone: "+1-555-321-6549",
            },
        },
    },
    personnel: [
        {
            id: 1,
            name: "Staff Sergeant Mark Wilson",
            rank: "Staff Sergeant",
            role: "Team Leader",
            contact: {
                email: "mark.wilson@example.com",
                phone: "+1-555-222-3333",
            },
        },
        {
            id: 2,
            name: "Specialist Jessica Davis",
            rank: "Specialist",
            role: "Medic",
            contact: {
                email: "jessica.davis@example.com",
                phone: "+1-555-222-4444",
            },
        },
        {
            id: 3,
            name: "Private First Class Lucas Garcia",
            rank: "Private First Class",
            role: "Intelligence Analyst",
            contact: {
                email: "lucas.garcia@example.com",
                phone: "+1-555-222-5555",
            },
        },
    ],
    equipment: {
        vehicles: [
            {
                type: "MRAP",
                quantity: 25,
                status: "Operational",
            },
            {
                type: "ATV",
                quantity: 15,
                status: "Operational",
            },
            {
                type: "Unmanned Aerial Vehicle (UAV)",
                quantity: 10,
                status: "Operational",
            },
        ],
        firearms: [
            {
                type: "MK18 Carbine",
                quantity: 400,
                status: "Operational",
            },
            {
                type: "M249 SAW",
                quantity: 80,
                status: "Operational",
            },
            {
                type: "M107 Sniper Rifle",
                quantity: 30,
                status: "Operational",
            },
        ],
        otherEquipment: [
            {
                type: "Night Vision Goggles",
                quantity: 250,
                status: "Operational",
            },
            {
                type: "Secure Satellite Communication Devices",
                quantity: 50,
                status: "Operational",
            },
            {
                type: "Explosive Ordnance Disposal (EOD) Tools",
                quantity: 20,
                status: "Operational",
            },
        ],
    },
    missions: [
        {
            missionName: "Operation Enduring Freedom",
            startDate: "2001-10-07",
            endDate: "2014-12-28",
            description: "Operations targeting al-Qaeda and Taliban in Afghanistan.",
        },
        {
            missionName: "Operation Iraqi Freedom",
            startDate: "2003-03-20",
            endDate: "2011-12-18",
            description: "Combat operation to remove Saddam Hussein from power in Iraq.",
        },
        {
            missionName: "Operation Freedom's Sentinel",
            startDate: "2015-01-01",
            endDate: "Present",
            description: "Ongoing mission to support Afghan forces and counter-terrorism efforts.",
        },
    ],
    trainingPrograms: [
        {
            programName: "Basic Special Operations Training",
            duration: 12,
            focus: "Fundamentals of special operations tactics, survival skills, and advanced combat techniques.",
        },
        {
            programName: "Advanced Special Operations Training",
            duration: 16,
            focus: "Specialized training in covert operations, counter-terrorism, and advanced reconnaissance.",
        },
        {
            programName: "Combat Diver Qualification Course",
            duration: 6,
            focus: "Training in underwater navigation, combat diving, and maritime operations.",
        },
    ],
    history: [
        {
            eventDate: "1955-04-12",
            eventDescription: "Establishment of the 3rd Special Operations Group.",
        },
        {
            eventDate: "1980-04-24",
            eventDescription: "Operation Eagle Claw: A failed mission to rescue American hostages in Iran.",
        },
        {
            eventDate: "1991-01-17",
            eventDescription: "Participation in Operation Desert Storm during the Gulf War.",
        },
    ],
    currentDeployment: {
        location: "Middle East",
        mission: "Counter-terrorism operations and training local forces",
        startDate: "2024-03-01",
        estimatedEndDate: "2024-11-30",
    },
};



test("Mission 1: Get the name, rank, and phone number of the chief of staff", () => {
  const response = Mission1(militaryUnit);
  expect(response).toContain(militaryUnit.commandStructure.chiefOfStaff.name);
  expect(response).toContain(militaryUnit.commandStructure.chiefOfStaff.rank);
  expect(response).toContain(militaryUnit.commandStructure.chiefOfStaff.contact.phone);
  
});

test("Mission 2: Get the amount of soldiers the division has", () => {
  const response = Mission2(militaryUnit);
  expect(response).toContain(` ${militaryUnit.personnel.length} `);
});

test("Mission 3: Add current deployment to history and change to new deployment", () => {
    const newDeployment = {
      location: "Israel",
      mission: "Fighting in Gaza with division 162",
      startDate: "2024-09-05",
      estimatedEndDate: "2025-03-05",
    };
    const oldDeployment = militaryUnit.currentDeployment;
    militaryUnit = Mission3(newDeployment, militaryUnit);
  
    expect(militaryUnit.currentDeployment).toEqual(newDeployment);
    expect([oldDeployment.estimatedEndDate, oldDeployment.startDate])
      .toContain(militaryUnit.history[militaryUnit.history.length - 1].eventDate);
  });
test("Mission 4: Add a weapon to firearms, if the weapon already exists and its status is the same, add to quantity", () => {
    let militaryUnit = {
      equipment: {
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
      },
    };
  
    // Case 1: Adding a new weapon
    const newWeapon1 = {
      type: "M4 Carbine",
      quantity: 200,
      status: "Operational",
    };
  
    militaryUnit = Mission4(newWeapon1, militaryUnit);
  
    expect(militaryUnit.equipment.firearms).toEqual([
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
      {
        type: "M4 Carbine",
        quantity: 200,
        status: "Operational",
      },
    ]);
  
    // Case 2: Updating an existing weapon
    const newWeapon2 = {
      type: "M16 Rifle",
      quantity: 50,
      status: "Operational",
    };
  
    militaryUnit = Mission4(newWeapon2, militaryUnit);
  
    expect(militaryUnit.equipment.firearms).toEqual([
      {
        type: "M16 Rifle",
        quantity: 550,
        status: "Operational",
      },
      {
        type: "M249 SAW",
        quantity: 100,
        status: "Operational",
      },
      {
        type: "M4 Carbine",
        quantity: 200,
        status: "Operational",
      },
    ]);
  });
test("Mission 5: Get the length of all training programs together", () => {
  const totalTrainingLength = Mission5(militaryUnit);
  expect(totalTrainingLength).toBe(militaryUnit.trainingPrograms.reduce((accumulator, currentvalue) => accumulator+currentvalue.duration, 0));
});
