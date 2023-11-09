// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// describe("shuffleArray", () => {
//     it("removes the first item from the array and shuffles the remaining items", () => {
//       expect(shuffleArray(colors1)).toEqual(["purple", "blue", "green", "yellow", "pink"])
//       expect(shuffleArray(colors2)).toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
//     })
//   })
  // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

//Spent too much time on this one. I tried to solve this one first then afterwards using ChatGPT
//I am not fully understanding the for loop section
// My original thought process was to make a function to take in an array
// Create a placeholder array for the new elements to go into.
// Remove the first index
// Then use .map to iterate over each with a shuffle command found from the internet.
// Return the array


const shuffleArray = (arr) => {
    arr.shift()
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

console.log(shuffleArray(colors1)) //console.log isn't running , cannont access 'j' before intialization?

// Pseudo code:
// Input: An array
// Output: Array with the first item removed and the remaining shuffled
// Create a function that takes in an array
// Remove the first item in the array
// Shuffle the remaining array
// Return the new array 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// describe("totalTallys", () => {
//     it("returns the end tally", () => {
//         expect(totalTallys(votes1)).toEqual(11)
//         expect(totalTallys(votes2)).toEqual(-31)
//     })
// })

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// const totalTallys = (votes) => {
//     return votes.upVotes - votes.downVotes
// }

// console.log(totalTallys(votes1))
// console.log(totalTallys(votes2))

// Pseudo code: 
// Input: An object
// Output: Total tallys
// Create a function that takes in an object
// Subtract the up votes from the down votes
// Returns total tallys