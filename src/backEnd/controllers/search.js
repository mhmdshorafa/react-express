const nodeio = require('node.io');
const google = require('google')
google.resultsPerPage = 25;
var nextCounter = 0
const numberPattern = /\d+/g;

module.exports = {
  googleSearch: () => {
    google(['phone number','businuss'], function (err, res){
      if (err) console.error(err)

      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        var description = link.description;
        description.replace(/\s/g,'');
        description.replace(/[-+()\s]/g, '');
        console.log(description);
      console.log(description.match( numberPattern )+ "\n");
      }

      if (nextCounter < 100) {
        nextCounter =+ 1
        if (res.next) res.next()
      }
    })
  }
}
