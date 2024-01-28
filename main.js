console.log("Welcome to inclusive Hogwarts!");

const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "GRYFFINDOR",
    pronouns: "he/him",

  },

  {
    Id: 2,
    name: "Luna Lovegood",
    house: "RAVENCLAW",
    pronouns: "she/her",
  },

  {
    id: 3,
    name: "Hermione Granger",
    house: "GRYFFINDOR",
    pronouns: "she/her",
  },

  {
    id: 4,
    name: "Ron Weasley",
    house: "GRYFFINDOR",
    pronouns: "he/him",
  },

  {
    id: 5,
    name: "Rowena Ravenclaw",
    house: "RAVENCLAW",
    pronouns: "she/her",
  },

  {
    id: 6, 
    name: "Draco Malfoy",
    house: "SLYTHERIN",
    pronouns: "he/him"
  },

  {
    id: 7,
    name: "Hannah Abbot",
    house: "HUFFLEPUFF",
    pronouns: "she/they",
  },

  {
    id: 8,
    name: "Haley Smith",
    house: "HUFFLEPUFF",
    pronouns: "she/they",
  },

  {
    id: 9, 
    name: "Rachel Spite",
    house: "RAVENCLAW",
    pronouns: "she/her",
  },

  {
    id: 9,
    name: "Shane Smith",
    house: "SLYTHERIN",
    pronouns: "he/him"
  },

  {
    id: 10,
    name: "Nik Stroupe",
    house: "HUFFLEPUFF",
    pronouns: "he/him"
  },

  {
    id: 11,
    name: "Heathcliff",
    house: "GRYFFINDOR",
    pronouns: "he/him/good-boi",
  },

  {
    id: 12,
    name: "Kennedy",
    house: "SLYTHERIN",
    pronouns: "she/her/queen",
  },

  {
    id: 13,
    name: "Amelia Pond",
    house: "GRYFFINDOR",
    pronouns: "she/her",
  },

  {
    id: 14,
    name: "Rory Williams",
    house: "HUFFLEPUFF",
    pronouns: "he/him",
  },

  {
    id: 15, 
    name: "River Song",
    house: "SLYTHERIN",
    pronouns: "she/her",
  },

  {
    id: 16, 
    name: "Donna Noble",
    house: "GRYFFINDOR",
    pronouns: "she/her",
  },

  {
    id: 16, 
    name: "Rose Noble",
    house: "GRYFFINDOR",
    pronouns: "she/her",
  },

  {
    id: 18,
    name: "Jack Harkness",
    house: "GRYFFINDOR",
    pronouns: "he/him",
  },

  {
    id: 19,
    name: "Cedric Diggory",
    house: "HUFFLEPUFF",
    pronouns: "he/him",
  },

  {
    id: 20,
    name: "Nymphodora Tonks",
    house: "HUFFLEPUFF",
    pronouns: "they/them",
  },

  {
    id: 21,
    name: "The Doctor",
    house: "HUFFLEPUFF",
    pronouns: "they/them",
  },

  {
    id: 22,
    name: "Susan Bones",
    house: "RAVENCLAW",
    pronouns: "she/her",
  }
]


// *******************************************
// CREATE AND RENDER HTML FOR ARRAY OF OBJECTS
// *******************************************


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// ************************************
// RENDER GREETING AT START OF APPLICATION
// ************************************
let domString=""

const startApp = () => {
  // console.log("startApp working!")
  domString = 
  ` <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header text-bg-primary">Welcome to Hogwarts!</div>
      <div class="card-body">
        <h5 class="card-title">Ready to be sorted into your house?</h5>
        <button type="button" class="btn btn-info" id="startSorting">Start the Sorting!</button>
      </div>
    </div>`;

  renderToDom('#greeting-container', domString);
}

startApp();


const cardsOnDom = (array) => {
  domString = "";
  headerOnDom();
  domString += `<div id="student-container">`;

  for (const student of array) {
    domString += 
      ` <div class="card mb-3" style="max-width: 18rem;">
          <div class="card-header text-bg-primary">${student.house}</div>
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.pronouns}</p>
          </div>
        </div>
      `
  };

  domString += `</div>`;

  renderToDom('#main-container', domString);
}

// cardsOnDom(students);

const headerOnDom = () => {
  //renders header with buttons to DOM
 domString =
  `<header id="header">
    <h1>Welcome to Hogwarts, the safest (and most inclusive) place on earth! </h1>
      <h2>Unlike the TERF original, everyone is welcome at this Hogwarts!</h2>

      <div class="input-btn-container">
        <div id="house-btn-container">

          <button type="button" class="btn btn-secondary" id="all">All</button>
          <button type="button" class="btn btn-danger" id="gryffindor">Gryffindor</button>
          <button type="button" class="btn btn-warning" id="hufflepuff">Hufflepuff</button>
          <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
          <button type="button" class="btn btn-success" id="slytherin">Slytherin</button>
        </div>
      </div>
    </header>`;
  //Remember to add Student Name input to input-btn-container above!
};



// **************************************
// START SORTING BUTTON RENDERS MAIN PAGE
// **************************************

const startSorting = document.querySelector('#greeting-container');

startSorting.addEventListener('click', (e) => {
  cardsOnDom(students);
  startSorting.remove();
});

// ************************
// FILTER STUDENTS BY HOUSE
// ************************
 
const houseFilter = document.querySelector('body')

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



// ****************************
// CREATE NEW STUDENTS IN ARRAY
// ****************************
