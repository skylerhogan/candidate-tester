const input = require('readline-sync')
function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let name = input.question("Hello! Thank you for expressing interest in our astronaut training program here at SpaceX. \n\nThe following is a short quiz to determine if you are a qualified candidate. \n\nBut before we get to that, please enter your name below:\n");

name = capitalize(name)

//answers
let answerArr = ["True", "40", "Trajectory", "Sally Ride", "3"]

//questions
let questions = ["\nCandidate Name: " + name + "\n1) True or false: 5000 meters = 5 kilometers.\n", "\n2) (5 + 3)/2 * 10 = ?\n", `\n3) Given the array \n[8, "Orbit", "Trajectory", 45],\nwhat entry is at index 2?\n`, "\n4) Who was the first American woman in space?\n", "\n5) What is the minimum crew size for the International Space Station (ISS)\n"]

let correctResponses = 0

for (i = 0; i < questions.length; i++) {
  candidateResponse = capitalize(input.question(questions[i]));
  let feedback = (`Your Answer: ${candidateResponse}
Correct Answer: ${answerArr[i]}`)
    if (candidateResponse === (answerArr[i] || "T")) {
    correctResponses = correctResponses +1;
    console.log(`${feedback}`)
    } else if (candidateResponse != answerArr[i]) {
        console.log(`${feedback}`)
      }
}

//results
let finalPercentage = ((correctResponses)/(questions.length)*100)

if (finalPercentage >= 60) {
  console.log(`
>>> Overall Grade: ${finalPercentage}% (${correctResponses} of 5 responses correct) <<<
>>> Status: PASSED <<<`)
} else {
  console.log(`
>>> Overall Grade: ${finalPercentage}% (${correctResponses} of 5 responses correct) <<<
>>> Status: FAILED <<<`)
}
