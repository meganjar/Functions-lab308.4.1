// let mainString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
let mainString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Part 2 - Expanding Fucntionality:

function generate2DArray(str) {
  let arr2D = [];
  let arr1D = str.split("\n");

  arr1D.forEach(row => {
    arr2D.push(row.split(","));
  });

  return arr2D;
}

const Array2D = generate2DArray(mainString);


// Part 3 - Transforming Data:

function generateObjectArray(arr2D) {
  let objectArray = [];
  let headers = arr2D[0];

  for (i = 1; i < arr2D.length; i++) {

    const obj = arr2D[i].reduce((acc, item, index) => {
      acc[headers[index].toLowerCase()] = item;
      return acc;
    }, {});

    objectArray.push(obj);
  }

  return objectArray;
}

const objectArray = generateObjectArray(Array2D);

// Part 4 - Sorting & Manipulating Data:

// Remove the last element from the sorted array.
objectArray.pop();
console.log(objectArray);


// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" } )
console.log(objectArray);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(objectArray);

function calculateAverageAge(arr) {
  let totalAge = 0

  for (i = 0; i < arr.length; i++) {
    totalAge += parseInt(arr[i].age);
  }
 return totalAge / arr.length;
}

const averageAge = calculateAverageAge(objectArray);
console.log(`Average age: ${averageAge}`);


// Part 5: Full Circle

function generateCSV(objArray) {
  let CSVstring = '';
  let headers = Object.keys(objArray[0]);
  
  console.log(headers)

  // for (let key in objArray) {
  //   CSVstring += `${key} \n`
  //   keys.push(key);
  //   console.log()
   
  // }

  let body = objArray.map(
    (element) => Object.values(element).join()
  );


  CSVstring = headers.join() + "\n" + body.join(`\n`)
  console.log(CSVstring);
}
 



generateCSV(objectArray);


