const websitesTypes = [
  'Mobile Hairdressers',
  'Cinemas',
  'Holiday Home',
  'Art Gallery',
  'IT Security',
  'Zoo',
  'Cafe',
  'Beef Jerky',
  'Surfing',
  'Social Media',
  'Supermarket',
  'Bar',
  'Pub',
  'Spa',
  'Builder',
  'Tree Surgeon',
  'Plumber',
  'Moviestar',
  'Voice Over',
  'Comedian',
  'Skip Hire',
  'Ice Cube',
  'Sky-diving',
  'Bungee Jumping',
  'Army',
  'Horse Riding',
  'Piano Lessons',
  'Classic Car',
  'UFO Hunters',
  'Micro Brewery',
  'Bread',
  'Unicycle',
  'Social Media',
  'Icecube',
  'Water',
  'Vitamin',
  'Ballet',
  'Video Games',
  'Birthday Cake Maker',
  'Brownie',
  'DJ',
  'Video Editor',
  'Youtuber',
  'Construction',
  'Pie',
  'School',
  'Hair Shampoo',
  'Bicycle',
  'Portfolio Maker',
  'Crisp',
  'Book',
  'Headphones',
  'Tattoo',
  'Restaurant',
  'Sticker',
  'Lightbulb',
  'Interior Design',
  'Robot',
  'Space Rocket'
];
const animationTypes = [
  'fade',
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'fade-up-right',
  'fade-up-left',
  'fade-down-right',
  'fade-down-left',
  'flip-up',
  'flip-down',
  'flip-left',
  'flip-right',
  'slide-up',
  'slide-down',
  'slide-left',
  'slide-right',
  'zoom-in',
  'zoom-in-up',
  'zoom-in-down',
  'zoom-in-left',
  'zoom-in-right',
  'zoom-out',
  'zoom-out-up',
  'zoom-out-down',
  'zoom-out-left',
  'zoom-out-right',
];

const sectionTypes = [
  'Hero Image',
  'Nav-Bar',
  'Gallery',
  'Testimonials',
  'CTA',
  'Email-Signup',
  'Contact-Form',
  'Features',
  'Footer',
  'Social Links',
  'Pricing',
];
const hexCodeLetters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

let websiteText = document.getElementById('website-type');
let colourText = document.getElementById('colour-scheme');
let sectionText = document.getElementById('sections');
let animationText = document.getElementById('animation');
let generateBtn = document.getElementById('generate');

function randomNumber(type) {
  return Math.floor(Math.random() * type.length);
}

function createHexCode() {
  let hexcode = '#';
  for (let i = 0; i < 6; i++) {
    let index = randomNumber(hexCodeLetters);
    hexcode += hexCodeLetters[index];
  }
  return hexcode;
}

createIdea();

generateBtn.addEventListener('click', createIdea);

function randomSections() {
  const numberOfSections = Math.floor(Math.random() * 4) + 1;
  console.log('random sectons' + numberOfSections);
  // Shuffle array
  let shuffled = sectionTypes.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, numberOfSections);
  console.log(selected);
  return selected.join(', ');
}

function createIdea() {
    websiteText.innerText = websitesTypes[randomNumber(websitesTypes)];
    let hexCode = createHexCode();
    colourText.innerText = hexCode;
    colourText.style.backgroundColor = hexCode;
    sectionText.innerText = randomSections();
    animationText.innerText = animationTypes[randomNumber(animationTypes)];
}
