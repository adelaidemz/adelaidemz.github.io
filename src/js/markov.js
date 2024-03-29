import data from '../data/markov-names.json';

const ORDER = 2;
const NUM_NAMES = 100;

const first_names = data.first_names;
const last_names = data.last_names;
const blacklist_names = data.blacklist;

// functions

export function generateNames(numNames, markovOrder) {
    var firstData = initializeMarkovData(first_names, markovOrder);
    var lastData = initializeMarkovData(last_names, markovOrder);
    
    var newNames = [];

    var firstNames = makeNewNames(numNames, markovOrder, firstData, first_names, blacklist_names);
    var lastNames = makeNewNames(numNames, markovOrder, lastData, last_names, blacklist_names);
    
    for (var i = 0; i < numNames; i++) {
        var finalFirst = firstNames[i][0].toUpperCase() + firstNames[i].substring(1,firstNames[i].length);
        var finalLast = lastNames[i][0].toUpperCase() + lastNames[i].substring(1,lastNames[i].length);
        newNames.push([finalFirst + " " + finalLast]);
    }
    return newNames;
}

export function initializeMarkovData(sourceData, markovOrder) {
    var markovData = {};
  
    for (var index = 0; index < sourceData.length; index++) {
      
      var currentName = sourceData[index];
      
      for (var sIndex = 0; sIndex <= currentName.length - markovOrder; sIndex++) {
        var keyString = currentName.substring(sIndex, sIndex + markovOrder);
        var nextLetter = "";
  
        if (sIndex < currentName.length) {
          nextLetter = currentName.substring(sIndex + markovOrder, sIndex + markovOrder + 1);
          }
        var existingEntry = markovData[keyString];
  
        if (existingEntry == undefined) {
          markovData[keyString] = [nextLetter];	
        }
        else {
          markovData[keyString].push(nextLetter);
        }
      }
    }
    return markovData;
  };

export function makeNewNames(numNames, markovOrder, markovData, sourceNames, blacklistNames) {
  
    var newNames = [];
    for (var newNameIndex = 0; newNameIndex < numNames; newNameIndex++) {
      var randomStartingName = getRandomArrayEntry(sourceNames).toString();
      var newName = randomStartingName.substring(0, markovOrder);
      
      var done = false;
      
      while (!done) {
        var keyString = newName.substring(newName.length - markovOrder, newName.length);
        var lettersArray = markovData[keyString];
        if (lettersArray == undefined) {
          lettersArray = getRandomMarkovDataEntry(markovData);
        }
        var newNextLetter = getRandomArrayEntry(lettersArray);
        if (newNextLetter == "") {
          done = true;
        }
        else {
          newName = newName += newNextLetter;
        }
      }
  
      /* test if blacklist names are in or equal to newName */
      var blacklist = false;
  
      for (var i = 0; i < blacklistNames.length; i++) {
        if (newName.toLowerCase().indexOf(blacklistNames[i]) != -1) {
          blacklist = true;
        }
      }
      /* Filtering */
      if ((!blacklist)  && (newNames.indexOf(newName) == -1) && (sourceNames.indexOf(newName) == -1) && (newName.length > 3 && newName.length < 12)) {
        newNames.push(newName);
      }
      else {
        newNameIndex--;
      }
    }
    return newNames;
};
  
function getRandomArrayEntry(objectArray) {
    var randomVal = Math.random() * objectArray.length;
    var index = Math.floor(randomVal);
    return objectArray[index];
};

function getRandomMarkovDataEntry(markovData) {
    var markovKeys = Object.keys(markovData); 
    var randomKey = getRandomArrayEntry(markovKeys);
    return markovData[randomKey];
};