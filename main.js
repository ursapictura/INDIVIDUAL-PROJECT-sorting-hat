console.log("Welcome to inclusive Hogwarts!");

const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    pronouns: "he/him",

  },

  {
    Id: 2,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    pronouns: "she/her",
  },

  {
    id: 3,
    name: "Hermione Granger",
    house: "Gryffindor",
    pronouns: "she/her",
  },

  {
    id: 4,
    name: "Ron Weasley",
    house: "Gryffindor",
    pronouns: "he/him",
  },

  {
    id: 5,
    name: "Cho Chang",
    house: "Ravenclaw",
    pronouns: "she/her",
  },

  {
    id: 6, 
    name: "Draco Malfoy",
    house: "Slytherin",
    pronouns: "he/him"
  },

  {
    id: 7,
    name: "Hannah Abbot",
    house: "Hufflepuff",
    pronouns: "she/they",
  },

  {
    id: 8,
    name: "Haley Smith",
    house: "Hufflepuff",
    pronouns: "she/they",
  },

  {
    id: 9, 
    name: "Rachel Spite",
    house: "Ravenclaw",
    pronouns: "she/her",
  },

  {
    id: 9,
    name: "Shane Smith",
    house: "Slytherine",
    pronouns: "he/him"
  },

  {
    id: 10,
    name: "Nik Stroupe",
    house: "Hufflepuff",
    pronouns: "he/him"
  },

  {
    id: 11,
    name: "Heathcliff",
    house: "Gryffindor",
    pronouns: "he/him/good-boi",
  },

  {
    id: 12,
    name: "Kennedy",
    house: "Slytherine",
    pronouns: "she/her/queen",
  },

  {
    id: 13,
    name: "Amelia Pond",
    house: "Gryffindor",
    pronouns: "she/her",
  },

  {
    id: 14,
    name: "Rory Williams",
    house: "Hufflepuff",
    pronouns: "he/him",
  },

  {
    id: 15, 
    name: "River Song",
    house: "Slytherine",
    pronouns: "she/her",
  },

  {
    id: 16, 
    name: "Donna Noble",
    house: "Gryffindor",
    pronouns: "she/her",
  },

  {
    id: 16, 
    name: "Rose Noble",
    house: "Gryffindor",
    pronouns: "she/her",
  },

  {
    id: 18,
    name: "Jack Harkness",
    house: "Gryffindor",
    pronouns: "he/him",
  },
]


// *******************************************
// CREATE AND RENDER HTML FOR ARRAY OF OBJECTS
// *******************************************


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";

  for (const student of array) {
    domString += 
      ` <div class="card mb-3" style="max-width: 18rem;">
          <div class="card-header text-bg-primary">${student.house}</div>
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">pronouns: ${student.pronouns}</p>
          </div>
        </div>
      `
  };
  renderToDom('#students-container', domString);
}

// cardsOnDom(students);


// ************************************
// RENDER CARDS ON START OF APPLICATION
// ************************************

const startApp = () => {
  // console.log("startApp working!")
  cardsOnDom(students);
}

startApp();


// ************************
// FILTER STUDENTS BY HOUSE
// ************************
