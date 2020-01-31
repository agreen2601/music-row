const allArtists = [];
const JumpStop = [];
const Chatten = [];
const Polar = [];

const createArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const bruce = createArtist("Bruce Atikins", "Country", 23);
const jensen = createArtist("Jensen Brown", "Pop", 20);
const dre = createArtist("Dre Funkz", "Funk", 25);
const dusta = createArtist("Dusta Grimes", "Rap", 21);
const bart = createArtist("Bartholomew Danielson", "Bluegrass", 23);
const avilee = createArtist("Avilee Dallas", "Country", 19);
const austin = createArtist("Austin Kinkaid", "Pop", 22);
const loy = createArtist("Loyonce Branis", "Rap", 27);

allArtists.push(bruce, jensen, dre, dusta, bart, avilee, austin, loy);

const artistGenreSorter = () => {
  for (let i = 0; i < allArtists.length; i++) {
    if (allArtists[i].genre === "Country" || allArtists[i].genre === "Bluegrass") {
      Chatten.push(allArtists[i])
    } else if (allArtists[i].genre === "Funk" || allArtists[i].genre === "Rap") {
      JumpStop.push(allArtists[i])
    } else {
      Polar.push(allArtists[i])
    }
  }
};

artistGenreSorter(allArtists);

console.log("JumpStop", JumpStop);
console.log("Chatten", Chatten);
console.log("Polar", Polar);


// DRY version of MVP Below

/*
const createGenericArtist = (name, genre, age) => {
    return {
      name: name,
      genre: genre,
      age: age
    };
  };

  const bruce = createGenericArtist("Bruce Atikins", "Country", 23);
  const jensen = createGenericArtist("Jensen Brown", "Pop", 20);
  const dre = createGenericArtist("Dre Funkz", "Funk", 25);
  const dusta = createGenericArtist("Dusta Grimes", "Rap", 21);
  const bart = createGenericArtist("Bartholomew Danielson", "Bluegrass", 23);
  const avilee = createGenericArtist("Avilee Dallas", "Country", 19);
  const austin = createGenericArtist("Austin Kinkaid", "Pop", 22);
  const loy = createGenericArtist("Loyonce Branis", "Rap", 27);
  
  JumpStop.push(dre, dusta, loy);
  Chatten.push(bruce, bart, avilee);
  Polar.push(jensen, austin);
  
  console.log("Jumpstop", JumpStop);
  console.log("Chatten", Chatten);
  console.log("Polar", Polar);
*/

//MVP Below
//IS THERE ANY REASON TO CREATE GENRE SPECIFIC FUNCTIONS? THAT IS DONE BELOW...
//BUT THE ABOVE CODE DOES THE SAME AND IS DRY
//OR PERHAPS I MISINTERPRETTED THE OBJECTIVE

/*const createFunkArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const createRapArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const createCountryArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const createBluegrassArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const createPopArtist = (name, genre, age) => {
  return {
    name: name,
    genre: genre,
    age: age
  };
};

const bruce = createCountryArtist("Bruce Atikins", "Country", 23);
const jensen = createPopArtist("Jensen Brown", "Pop", 20);
const dre = createFunkArtist("Dre Funkz", "Funk", 25);
const dusta = createRapArtist("Dusta Grimes", "Rap", 21);
const bart = createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23);
const avilee = createCountryArtist("Avilee Dallas", "Country", 19);
const austin = createPopArtist("Austin Kinkaid", "Pop", 22);
const loy = createRapArtist("Loyonce Branis", "Rap", 27);

JumpStop.push(dre, dusta, loy);
Chatten.push(bruce, bart, avilee);
Polar.push(jensen, austin);

console.log("Jumpstop", JumpStop);
console.log("Chatten", Chatten);
console.log("Polar", Polar);
*/
