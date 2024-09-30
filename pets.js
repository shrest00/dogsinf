const allDogs = [
    { dogName: "Anthony",
       breed: "Terrier Pit Bull",
       age: 6 },
    { dogName: "Axel", 
        breed: "American Pit Bull",
        age: 2 },
    { dogName: "Baluna", 
        breed: "Spayed Terrier Bull", 
        age: 1 },
    { dogName: "Barry", 
        breed: "Australian Cattle Dog", 
        age: 1 },
    { dogName: "Beanie",
        breed: "Terrier Pit Bull", 
        age: 2 },
    { dogName: "Bebe", 
        breed: "American Pit Bull", 
        age: 2 },
    { dogName: "BooBoo", 
        breed: "American Eskimo", 
        age: 4 },
    { dogName: "Crimson", 
        breed: "German Shepherd", 
        age: 1 },
    { dogName: "Daisy", 
        breed: "Spayed Terrier", 
        age: 4 },
    { dogName: "Estelle", 
        breed: "Shepherd", 
        age: 1 }
];

// Function to find dogs based on minimum age
function findDogs() {
    const minAge = document.querySelector("#dogAge").value;
    const selectedDogs = [];

    // Validation:
    if (isNaN(minAge) || minAge <= 0) {
        document.querySelector('.selectedDogInfo').innerHTML = "Error: Please enter a valid age greater than 0.";
        return; 
    }

    // Filter dogs by age using forEach
    allDogs.forEach(dog => {
        if (dog.age >= minAge) {
            selectedDogs.push(dog);
        }
    });

    // Get the dogInfo element and clear previous results
    const dogInfo = document.querySelector('.selectedDogInfo');
    dogInfo.innerHTML = ""; 

    // Check if there are any selected dogs and display them
    if (selectedDogs.length > 0) {
        selectedDogs.forEach(dog => {
            
            dogInfo.innerHTML += `${dog.dogName} is a ${dog.breed} and is ${dog.age} years old.<br>`;
        });
    } else {
        //not found age
        dogInfo.textContent = "No Dogs Found older than that age.";
    }
}