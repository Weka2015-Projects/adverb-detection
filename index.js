var getAdverbs = require('adverb-where')

$("#submitButton").click(function() {
  console.log(getAdverbs($("#input").val()))
  var adverbObject = getAdverbs($("#input").val())
  $('#results').append("<p>Holy crap, you had " + getAdverbs($("#input").val()).length + " adverb(s) in your writing!").removeClass('hidden')

})


//onclick of submit button
//take value of textarea input into function
//Run getAdverbs on text
//Count number of objects returned
//Find index and offset of returned objects
//append to div for results with highlighted verbs
//take index/offset of each object and use jquery to change css on them with background and color
