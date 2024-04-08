const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructuring to assign all appropriate variables using the keys
const { muppetName, color, song, job, partner } = muppet;

// Testing
console.log(muppetName);   // Output: Miss Piggy
console.log(color);        // Output: pink
console.log(song);         // Output: Never Before, Never Again
console.log(job);          // Output: Cast member of The Muppet Show
console.log(partner);      // Output: Kermit
 
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


// Define the sounds animals make
const sounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

// Destructuring to assign variables based on sounds
const { moo, neigh, baa, oink, cluck } = sounds;

// Testing the assignments
console.log(moo);    // Output: cow
console.log(neigh);  // Output: horse
console.log(baa);    // Output: sheep
console.log(oink);   // Output: pig
console.log(cluck);  // Output: chicken
//
// Define the animals with their traditional names
const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

// Destructuring to declare the four traditional animal names
const { bessie, dolly, babe, little } = animals;

// Testing the assignments
console.log(bessie);  // Output: cow
console.log(dolly);   // Output: sheep
console.log(babe);    // Output: pig
console.log(little);  // Output: chicken
//
// Define the animals with their traditional colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

// Destructuring to declare the three traditional animal colors
const { blackAndWhite, black, pink } = animalColors;

// Testing the assignments
console.log(blackAndWhite);  // Output: cow
console.log(black);          // Output: sheep
console.log(pink);           // Output: pig
//
// Define the color names array
const colorNames = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring to declare the seven traditional rainbow color variables
const [red, orange, yellow, green, blue, indigo, violet] = colorNames;

// Testing the assignments
console.log(red);     // Output: red
console.log(orange);  // Output: orange
console.log(yellow);  // Output: yellow
console.log(green);   // Output: green
console.log(blue);    // Output: blue
console.log(indigo);  // Output: indigo
console.log(violet);  // Output: violet
//
// Define the rainbow color initials array
const colorInitials = ["red", "orange", "yellow", "green", "blue", "violet"];

// Destructuring to declare the six rainbow color variables using initials
const [r, o, y, g, b, v] = colorInitials;

// Testing the assignments
console.log(r);  // Output: red
console.log(o);  // Output: orange
console.log(y);  // Output: yellow
console.log(g);  // Output: green
console.log(b);  // Output: blue
console.log(v);  // Output: violet
//

// Testing the value of Indigo
// Define the rainbow color initials array
const  newColorInitials = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring to declare Indigo using indigo
const [,, , , , indg] = newColorInitials;

// Testing the value of Indigo
console.log(indg);

//

const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

// Testing
console.log(song2); // Output: Moving Right Along
console.log(song4); // Output: I Hope That Something Better Comes Along
console.log(nestedJob); // Output: Host of The Muppet Show
console.log(nestedPartner); // Output: Miss Piggy
