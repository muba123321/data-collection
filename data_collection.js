let csvFile =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


//   Part 1: Refactoring Old Code
let rows = csvFile.split("\n");

for (let i = 0; i < rows.length; i++) {
  rows[i] = rows[i].split(",");
}


// Part 2: Expanding Functionality
let keyss = [];
for (let i = 0; i < rows[0].length; i++) {
  keyss.push(rows[0][i].toLowerCase());
}

// Part 3: Transforming Data
let valuess = [];
for (let i = 1; i < rows.length; i++) {
  let obj = {};
  for (let j = 0; j < rows[i].length; j++) {
    obj[keyss[j]] = rows[i][j];
  }
  valuess.push(obj);
}

console.log(valuess);


// Part 4: Sorting and Manipulating Data

valuess.pop();

valuess.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
 
valuess.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


console.log(valuess);

// Average Age of the group
let sumOfallAge = 0;
for (let i = 0; i < valuess.length; i++) {
    sumOfallAge += parseInt(valuess[i].age);
  }
  let averageAge = sumOfallAge / valuess.length;
  
  console.log(`Average age: ${averageAge}`);

//   Part 5: Full Circle

let csv = keyss.join(',') + '\\n';
for (let i = 0; i < valuess.length; i++) {
  let row = [];
  for (let j = 0; j < keyss.length; j++) {
    row.push(valuess[i][keyss[j]]);
  }
  csv += row.join(',');
  if (i < valuess.length - 1) {
    csv += '\\n';
  }
}

console.log(csv);