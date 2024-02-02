console.log("Welcome to inclusive Hogwarts!");

const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "GRYFFINDOR",
    pronouns: "he/him",
    crest: "image/gryffindor-crest.jpg",

  },

  {
    id: 2,
    name: "Luna Lovegood",
    house: "RAVENCLAW",
    pronouns: "she/her",
    crest: "image/ravenclaw-crest.jpg",
  },

  {
    id: 3,
    name: "Hermione Granger",
    house: "GRYFFINDOR",
    pronouns: "she/her",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 4,
    name: "Ron Weasley",
    house: "GRYFFINDOR",
    pronouns: "he/him",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 5,
    name: "Rowena Ravenclaw",
    house: "RAVENCLAW",
    pronouns: "she/her",
    crest: "image/ravenclaw-crest.jpg",
  },

  {
    id: 6, 
    name: "Draco Malfoy",
    house: "SLYTHERIN",
    pronouns: "he/him",
    crest: "image/slytherin-crest.jpg",
  },

  {
    id: 7,
    name: "Hannah Abbot",
    house: "HUFFLEPUFF",
    pronouns: "she/they",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 8,
    name: "Haley Smith",
    house: "HUFFLEPUFF",
    pronouns: "she/they",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 9, 
    name: "Rachel Spite",
    house: "RAVENCLAW",
    pronouns: "she/her",
    crest: "image/ravenclaw-crest.jpg",
  },

  {
    id: 9,
    name: "Shane Smith",
    house: "SLYTHERIN",
    pronouns: "he/him",
    crest: "image/slytherin-crest.jpg",
  },

  {
    id: 10,
    name: "Nik Stroupe",
    house: "HUFFLEPUFF",
    pronouns: "he/him",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 11,
    name: "Heathcliff",
    house: "GRYFFINDOR",
    pronouns: "he/him/good-boi",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 12,
    name: "Kennedy",
    house: "SLYTHERIN",
    pronouns: "she/her/queen",
    crest: "image/slytherin-crest.jpg",
  },

  {
    id: 13,
    name: "Amelia Pond",
    house: "GRYFFINDOR",
    pronouns: "she/her",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 14,
    name: "Rory Williams",
    house: "HUFFLEPUFF",
    pronouns: "he/him",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 15, 
    name: "River Song",
    house: "SLYTHERIN",
    pronouns: "she/her",
    crest: "image/slytherin-crest.jpg",
  },

  {
    id: 16, 
    name: "Donna Noble",
    house: "GRYFFINDOR",
    pronouns: "she/her",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 17, 
    name: "Rose Noble",
    house: "GRYFFINDOR",
    pronouns: "she/her",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 18,
    name: "Jack Harkness",
    house: "GRYFFINDOR",
    pronouns: "he/him",
    crest: "image/gryffindor-crest.jpg",
  },

  {
    id: 19,
    name: "Cedric Diggory",
    house: "HUFFLEPUFF",
    pronouns: "he/him",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 20,
    name: "Nymphodora Tonks",
    house: "HUFFLEPUFF",
    pronouns: "they/them",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 21,
    name: "The Doctor",
    house: "HUFFLEPUFF",
    pronouns: "they/them",
    crest: "image/hufflepuff-crest.jpg",
  },

  {
    id: 22,
    name: "Susan Bones",
    house: "RAVENCLAW",
    pronouns: "she/her",
    crest: "image/ravenclaw-crest.jpg",
  }
]


// **********************
// CREATE AND RENDER HTML
// **********************


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const formOnDom = () => {
  let formDomString = 
    `<div class="mb-3">
        <h3>Enter First Year's Name </h3>
        <input type="text" class="form-control" id="student-name" required>
        <label for="student-name" class="form-label">Student's Name</label>
      </div>

      <div class="fmb-3">
        <input type="text" class="form-control" id="student-pronouns" required>
        <label for="student-pronouns">Preferred Pronouns</label>
      </div>

      <button type="submit" class="btn btn-light" id="submitStudent">Start the Sorting!</button>`;

  renderToDom('#form-container', formDomString);
}


const buttonsOnDom = () => {
  let buttonDomString = 
  `<button type="button" class="btn btn-danger"      id="gryffindor">Gryffindor</button>
  <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
  <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
  <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
  <button type="button" class="btn btn-secondary" id="all">All</button>`;

  renderToDom('#house-btn-container', buttonDomString);
}


const cardsOnDom = (array) => {
  let domString = `<h3 id="first-years">First Years</h3>`;

  array.forEach((student) => {
    domString += 
      `<div class="card mb-3" style="max-width: 300px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${student.crest}" class="img-fluid rounded-start" alt="${student.house} crest">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.house}</h5>
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.pronouns}</p>
              <button type="button" class="btn btn-outline-danger expel" id="expel--${student.id}">Expel</button>
          </div>
          </div>
        </div>
      </div>
      
      `
  });

  renderToDom('#student-container', domString);
}


// **************************************
// START SORTING BUTTON RENDERS MAIN PAGE
// **************************************

const startSorting = document.querySelector('#startSorting');

startSorting.addEventListener('click', (e) => {
  formOnDom();
});



// ************************
// FILTER STUDENTS BY HOUSE
// ************************

const houseFilter = document.querySelector('#house-btn-container');

houseFilter.addEventListener("click", (e) => {

  if (e.target.id.includes('gryffindor')) {
    const gryffindorStudents = students.filter(student => student.house.toLowerCase() === "gryffindor");
    cardsOnDom(gryffindorStudents);
  } else if (e.target.id.includes('hufflepuff')) {
    const hufflepuffStudents = students.filter(student => student.house.toLowerCase() === "hufflepuff");
    cardsOnDom(hufflepuffStudents);
  } else if (e.target.id.includes('ravenclaw')) {
    const ravenclawStudents = students.filter(student => student.house.toLowerCase() === "ravenclaw");
    cardsOnDom(ravenclawStudents);
  } else if (e.target.id.includes('slytherin')) {
    const slytherinStudents = students.filter(student => student.house.toLowerCase() === "slytherin");
    cardsOnDom(slytherinStudents);
  } else {
    cardsOnDom(students);
  }
});


// ************************************
// SORT NEW STUDENTS INTO RANDOM HOUSES
// ************************************
let house = "";

const sortingHat = () => {
  let num = Math.floor(Math.random() * 4);
  console.log(num);
  if (num === 0) {
     house = "GRYFFINDOR";
  } else if (num === 1) {
     house = "RAVENCLAW";
  } else if (num === 2) {
     house = "HUFFLEPUFF";
  } else if (num === 3) {
     house = "SLYTHERIN";
  } else {
     house = "unknown";
  }

  return house;
}

const addCrest = (house) => {
  let studentCrest = "";
  if (house === "GRYFFINDOR") {
    studentCrest = "image/gryffindor-crest.jpg";
  } else if (house === "RAVENCLAW") {
    studentCrest = "image/ravenclaw-crest.jpg";
  } else if (house === "HUFFLEPUFF") {
    studentCrest = "image/hufflepuff-crest.jpg";
  } else if (house === "SLYTHERIN") {
    studentCrest = "image/slytherin-crest.jpg";
  }
  return studentCrest;
}

// ****************************
// CREATE NEW STUDENTS IN ARRAY
// ****************************


const submitForm = document.querySelector('#student-form');

const addStudent = (e) => {
  e.preventDefault();

  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#student-name').value,
    house: sortingHat(),
    pronouns:document.querySelector('#student-pronouns').value,
    crest: addCrest(house),
  };

  students.unshift(newStudentObj);
  buttonsOnDom();
  cardsOnDom(students);
  submitForm.reset();

}

submitForm.addEventListener('submit', addStudent);



// **************
// EXPEL STUDENTS
// **************

const expelledStudents = [];

const studentContainer = document.querySelector('#student-container');

studentContainer.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split('--');

    const index = students.findIndex(e => e.id === Number(id));


    let expelledStudent = students.splice(index, 1)[0];
    
    console.log(expelledStudent);
    expelledStudents.unshift(expelledStudent);
    console.log(expelledStudents);
  }

  cardsOnDom(students);
  expelledOnDom(expelledStudents);
});



const expelledOnDom = (array) => {
  let domString = `<h3 id="expelled">Expelled Students</h3>`;

  array.forEach((deathEater) => {
    domString += 
      `<div class="card mb-3" style="max-width: 300px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="image/death-eater.jpg" class="img-fluid rounded-start" alt="the dark mark flashes across the sky in green">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${deathEater.name} has joined Voldemort's army.</h5>
              <p class="card-text">${deathEater.pronouns}</p>
          </div>
          </div>
        </div>
      </div>
      `
  });

  renderToDom('#expelled-container', domString);
}
