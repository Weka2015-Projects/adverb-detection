var getAdverbs = require('adverb-where')

var adverbArray = getAdverbs('The hairy gingerly dog interestingly likes wearily to lick his butt hastily')
//returns object with each adverb located by the (index/offset) of the first character of the word.
console.log(adverbArray)

const wordCount = function (input) {
  return input[0].value.split(' ').length
}

const adverbCount = function (input) {
  return getAdverbs(input).length
}

const checkWriting = function (input) {
  if(((( getAdverbs(input).length) / input[0].value.length ) * 100 ) > 3 ) {
    return "Hemingway just turned in his grave!"
  } else {
    return "You write like Hemingway, Hooray!"
  }
}

$('#submitButton').click(function() {
console.log( 'Word Count:', wordCount($('#input')), 'Adverb Count:', adverbCount($('#input')), checkWriting($('#input')))
  // return getText
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
