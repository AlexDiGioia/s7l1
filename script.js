class Utente {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  isSameAge(userToCompare) {
    if (this.age === userToCompare.age) {
      console.log(
        `${this.firstName} e ${userToCompare.firstName} hanno la stessa età`
      );
    } else if (this.age > userToCompare.age) {
      console.log(
        `${this.firstName} è più vecchio di ${userToCompare.firstName}`
      );
    } else {
      console.log(
        `${userToCompare.firstName} è più vecchio di ${this.firstName}`
      );
    }
  }
}
const user1 = new Utente("Pippo", "Pippetto", "25", "Azzano Decimo");
const user2 = new Utente("Gino", "Gigetto", "23", "Pordenone");

user1.isSameAge(user2);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static isSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}
const form = document.querySelector("form");
const pets = [];
const list = document.getElementsByClassName("listPet")[0];

const updatePets = function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  pets.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.textContent = `Nome: ${element.petName}, Padrone: ${element.ownerName}, Specie: ${element.species}, Razza: ${element.breed} `;
    console.log(newLi.textContent);
    list.appendChild(newLi);
  });
};

form.onsubmit = function (e) {
  // importantissimo il preventDefault per evitare il refresh della pagina!
  e.preventDefault();

  // sotto ad esso possiamo creare la nostra logica
  const petName = document.getElementById("petName");
  const ownerName = document.getElementById("ownerName");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");

  pets.push(
    new Pet(petName.value, ownerName.value, species.value, breed.value)
  );

  console.log(pets);
  console.log(pets[0].ownerName);
  updatePets();

  console.log("Submit");
  form.reset(); // eventualmente alla fine possiamo resettare i campi
};
console.log(pets);

// metodo alternativo per l'applicazione dell'evento submit
// form.addEventListener("submit", function(){})
