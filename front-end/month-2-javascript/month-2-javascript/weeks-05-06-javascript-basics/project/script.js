// A student is an object: related information grouped together
let student = {
  name: "Ada",
  age: 16,
  scores: [70, 55, 90, 82]
};

// A function that works out the average of a list of scores
function average(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  return total / scores.length;
}

// A function that turns an average into a grade
function getGrade(avg) {
  if (avg >= 70) {
    return "A";
  } else if (avg >= 60) {
    return "B";
  } else if (avg >= 50) {
    return "C";
  } else {
    return "F";
  }
}

// A function that tells us if a number is even
function isEven(n) {
  return n % 2 === 0;
}

let avg = average(student.scores);

console.log("Student: " + student.name + " (age " + student.age + ")");
console.log("Scores: " + student.scores);
console.log("Average: " + avg);
console.log("Grade: " + getGrade(avg));
console.log("Is the number of subjects even? " + isEven(student.scores.length));
