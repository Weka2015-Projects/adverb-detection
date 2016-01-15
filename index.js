var getAdverbs = require('adverb-where')

var adverbArray = getAdverbs('The hairy gingerly dog interestingly likes wearily to lick his butt hastily')
//returns object with each adverb located by the (index/offset) of the first character of the word.
console.log(adverbArray)

const getText = getAdverbs('#input')
console.log(getText)

// var submitText = function(onClick)

$('#submitButton').click(function() {
  return getText
  //append new div
})

//onclick of submit button
//take value of textarea input into function
//Run getAdverbs on text
//Count number of objects returned
//Find index and offset of returned objects
//append to div for results with highlighted verbs
//take index/offset of each object and use jquery to change css on them with background and color



//split by empty spaces
