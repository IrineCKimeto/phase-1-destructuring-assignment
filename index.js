const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const animalSounds = ['cow', 'horse', 'sheep', 'pig', 'chicken'];
const [moo, neigh, baa, oink, cluck] = animalSounds;

const animalNames = ['cow', 'sheep', 'pig', 'chicken'];
const [bessie, dolly, babe, little] = animalNames;

const animalColors = ['cow', 'sheep', 'pig'];
const [blackAndWhite, black, pink] = animalColors;

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;


const muppetDetails = {
  name: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { name: muppetName, color, song, job, partner } = muppet;
