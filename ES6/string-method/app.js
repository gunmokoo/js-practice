// first string method : includes

const isEmail = (email) => email.includes("@");

console.log(isEmail("minju1348@gmail.com"));

// second string method : repeat

const CC_NUMBER = "6060";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);

// third string method : startsWith, endsWith

const name = "gunmo koo";

console.log(name.startsWith("gunmo"));
console.log(name.endsWith("koo"));
