function confirmEnding(str, target) {
  const x=str.slice(str.length-target.length)
  console.log(x)
  console.log(target)
  if (x==target){
    return true
  }else{
    return false
  }
}

confirmEnding("Bastian", "n");
confirmEnding('Congratulation','on')

function repeatStringNumTimes(str, num) {
  let str1=''
  for (let i=0;i<num;i++){
    str1+=str
  console.log(str1)
  }
  return str1;
}

repeatStringNumTimes("*", 3);

function truncateString(str, num) {
  if (num<str.length){
    const section=str.slice(0,num).concat('...')
    //console.log(section)
    return section}
  else{
    const section=str.slice(0,num)
    console.log(section)
    return section;
}}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

function findElement(arr, func) {
  let num = 0;
  for (let i=0;i<arr.length;i++){
    let x=arr[i]
    //console.log(x)
    if (func(x)){
      //console.log(func(x))
      console.log(x)
      return x
      break
    }

    }
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
  if (typeof bool==='boolean'){
    console.log(bool)
    return true;
  }else{
    return false
  }
}

booWho([1, 2, 3]);

function titleCase(str) {
  const x=str.split(' ')
  for (let i=0;i<x.length;i++){
    let first=x[i][0].toUpperCase()
    let rest=x[i].slice(1).toLowerCase()
    x[i]=first.concat(rest)
    console.log(x.join(' '))
    }
  return x.join(' ');
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  let newArr=arr2.slice()
  newArr.splice(n,0,arr1)
  console.log(newArr.flat())
  return newArr.flat()
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);

function bouncer(arr) {
  return arr.filter(i => Boolean(i))
  }
console.log(bouncer([7, "ate", "", false, 9]))


bouncer([7, "ate", "", false, 9]);

function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b)
  for (let i=0;i<arr.length;i++){
    if (arr[i]>=num){
      arr.splice(i,0,num)
      console.log(arr)
      //break
      return i
    }}
  arr.push(num)
  console.log(arr.length)
  return arr.length-1
  //break

}

getIndexToIns([[10, 20, 30, 40, 50], 35]);

function mutation(arr) {
  for (const char of arr[1]){
    if (!arr[0].toLowerCase().includes(char.toLowerCase())){
      return false
  }
  }return true
}

mutation(["hEllo", "hey"]);

function chunkArrayInGroups(arr, size) {
  const newArr=[]
  for (let i=0;i<arr.length;i+=size){
    let chunk=arr.slice(i,i+size)
    newArr.push(chunk)
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//exercise
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
  Dog.prototype=Object.create(Animal.prototype)
  Dog.prototype.constructor=Dog
// Only change code below this line

  Dog.prototype.bark=function(){
    console.log('Woof!')
  }
// Only change code above this line

let beagle = new Dog();
beagle.bark()
beagle.eat()
//exercise
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly=function(){
  return "Alas, this is a flightless bird."
}
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//exercise
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin=function(obj){
  obj.glide=function(){
    console.log('whee')
  }
}
glideMixin(bird)
glideMixin(boat)
bird.glide()
boat.glide()

//exercise
let funModule=(function(){
  return{
    isCuteMixin : function(obj) {
      obj.isCute = function() {
        return true;
  };
},
  singMixin : function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
  };
}
  }
})()

//exercise
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {

  const newArr=[...arr]//.push(bookName);
  //console.log(newArr)
  newArr.push(bookName)
  console.log(newArr)
  return newArr;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const newArr=[...arr]
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}
add(bookList, "A Brief History of Time")

//exercise
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line
  let chris=watchList.filter((movie)=>movie.Director=='Christopher Nolan')
  const ratings=chris.map((rating)=>Number(rating.imdbRating))
  const averageRating= ratings.reduce((accumulator,currVal)=>
    accumulator+currVal,0)/ratings.length
    console.log(averageRating)

  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList));

//exercise
const squareList = arr => {
  // Only change code below this line
  const int=arr.filter((num)=>Number.isInteger(num) && num>0)
  const square=int.map((posint)=>Math.pow(posint,2))
  return square;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//exercise
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function(a,b){
    return a===b?0:a>b?1:-1
  })
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//exercise
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const newArr=arr.slice()
  return newArr.sort(function(a,b){
    return a-b
  })

  // Only change code above this line
}

nonMutatingSort(globalArray);

//exercise
// Only change code below this line
function urlSlug(title) {
  const trim=title.trim()
  const sp=trim.split(/\s+/)
  console.log(sp)
  const hyphen=sp.map((word,index)=>{
    if (index !== sp.length-1){
      return word.toLowerCase()+'-'}
    else{
      return word.toLowerCase()
    }

  })
const slug=hyphen.join('')
console.log(slug)
return slug
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(' Winter Is  Coming')

//exercise
function sumAll(arr) {
  const max=Math.max(...arr)
  //console.log(max)
  const min=Math.min(...arr)
  //console.log(min)
  let sum=0
  for (let i=min;i<=max;i++){
    sum+=i
    console.log(sum)
  }
  return sum;
}

sumAll([1, 4]);

//exercise
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i=0;i<arr2.length;i++)

    if (!arr1.includes(arr2[i])){
      newArr.push(arr2[i])
    }
  for (let i=0;i<arr1.length;i++){
    if (!arr2.includes(arr1[i])){
      newArr.push(arr1[i])
    }
  }
  console.log(newArr)

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//exercise
function spinalCase(str) {
  const sp=str.split(/\s|_|(?=[A-Z])/)
  const hyphen=sp.map((word,index)=>{
  if (index !== sp.length-1){
    return word.toLowerCase()+'-'
    }
  else{
    return word.toLowerCase()
    }
    })
  const slug=hyphen.join('')
  console.log(slug)
  return slug;
}
spinalCase('thisIsSpinalTap');

//exercise
function myReplace(str, before, after) {
  const capital=/[A-Z]/
  if (capital.test(before[0])){
    str=str.replace(before,after[0].toUpperCase()+after.slice(1))
    console.log(str)
  }else {
    str=str.replace(before,after[0].toLowerCase()+after.slice(1))
  }
  return str;
}

myReplace("I think we should look up there", "up", "Down");

//exercise
function pairElement(str) {
  str=str.split('')
  const pairs={
    'G':'C',
    'C':'G',
    'A':'T',
    'T':'A'
  }
  let result=[]
  for (let i=0;i<str.length; i++){
    result.push([str[i],pairs[str[i]]])
  }
  console.log(result)
  return result;
}
pairElement("ATCGA");

//exercise
function fearNotLetter(str) {
  for (let i=0;i<str.length;i++){
    if (str.charCodeAt(i+1)-str.charCodeAt(i)>1){
      const missing=str.charCodeAt(i)+1
      return String.fromCharCode(missing)
    }
  }
  return undefined
}
fearNotLetter("abce");

//exercise
function uniteUnique(arr) {
  const args=Array.from(arguments)
  console.log(args)
  let newArr=[]
  //console.log(arr1)
  for (let i=0;i<args.length;i++){
    for (let j=0;j<args[i].length;j++){
      if (newArr.indexOf(args[i][j])===-1){
       newArr.push(args[i][j])
    }
    }
  }
  console.log(newArr)
  return newArr;
}
uniteUnique([1, 2, 3], [5, 2, 1]);

//exercise
function convertHTML(str) {
  str=str.replaceAll('&','&amp;')
  str=str.replaceAll('<','&lt;')
  str=str.replaceAll('>','&gt;')
  str=str.replaceAll('"','&quot;')
  str=str.replaceAll('\'','&apos;')
  console.log(str)
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");

//exercise
function dropElements(arr, func) {
  let newArr=[]
  for (let i=0;i<arr.length;i++){
    if (func(arr[i])){
      newArr=arr.slice(i)
      break
    }
    }
  //return newArr
  console.log(newArr)
  }
dropElements([1, 2, 3, 7, 4], function(n) {return n >3; });
