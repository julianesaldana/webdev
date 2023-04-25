// outdated version
// jshint esverion:6
// const fs = require('fs');

// import fs from 'fs';        // es module
// fs.copyFileSync("file1.txt", "file2.txt"); this copies file to another file


const superheroes = require('superheroes'); // documentation below
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
// superheroes.random();
//=> 'Spider-Ham'
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);




const supervillains = require('supervillains');     // documentation below
// supervillains.all;
// => ['Abattoir', 'Able Crown', …]
// supervillains.random();
var mySuperVillianName = superheroes.random();
console.log(mySuperVillianName);