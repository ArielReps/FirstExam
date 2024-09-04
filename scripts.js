// Mock Data for Training Schedule
const trainingData = [
    {
        date: "2024-09-05",
        description: "Morning Run - 5km",
        type: "physical",
        instructor: "Sgt. Johnson"
    },
    {
        date: "2024-09-06",
        description: "Urban Combat Training",
        type: "tactical",
        instructor: "Lt. Smith"
    },
    {
        date: "2024-09-07",
        description: "Radio Communications",
        type: "technical",
        instructor: "Cpl. Davis"
    },
    {
        date: "2024-09-08",
        description: "Obstacle Course",
        type: "physical",
        instructor: "Sgt. Johnson"
    },
    {
        date: "2024-09-09",
        description: "Map Reading",
        type: "tactical",
        instructor: "Lt. Smith"
    },
    {
        date: "2024-09-10",
        description: "Vehicle Maintenance",
        type: "technical",
        instructor: "Cpl. Davis"
    }
];

// Display the current date
document.getElementById('currentDate').textContent = `Date: ${new Date().toLocaleDateString()}`;

// Populate the training schedule list
const trainingList = document.getElementById('trainingList');

function displayTrainings(trainings) {
    trainingList.innerHTML = '';
    trainings.forEach(training => {
        const listItem = document.createElement('li');   
        listItem.innerHTML = `
            <span class="training-date">${training.date}</span>
            <p class="training-description">${training.description}</p>
            <span class="instructor">Instructor: ${training.instructor}</span>
            <span class="training-type ${training.type}">${training.type.charAt(0).toUpperCase() + training.type.slice(1)}</span>
        `;
        trainingList.appendChild(listItem);
    });
}

displayTrainings(trainingData);
