// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => 
        driver.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
        driver.startsWith(letters)
    );
}

function matchName(drivers, name) {
    return drivers.filter(driver => 
        driver.name === name
    );
}

// Example usage
const drivers = ["Alice", "Bob", "Charlie", "alice", "David"];
const driverObjects = [
    { name: "Alice", hometown: "Seattle" },
    { name: "Bob", hometown: "Portland" },
    { name: "Charlie", hometown: "New York" },
];

// Testing the functions
console.log(findMatching(drivers, "Alice")); // ["Alice", "alice"]
console.log(fuzzyMatch(drivers, "Al"));      // ["Alice", "alice"]
console.log(matchName(driverObjects, "Alice")); // [{ name: "Alice", hometown: "Seattle" }]
