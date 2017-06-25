const Clarifai = require('clarifai');
var app = new Clarifai.App(
  '0QUPwaFvYeJwL1m4CAM3aGWt3WoxP5yhWylbLnw0',
  'EE7-CGtwU0p-Ft4_-UHQckqRIbIO5e52WLf6yhBS'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://sha.org/bottle/Body/bodyshapes.jpg').then(
  function(response) {
    var data = JSON.stringify(response);
	 var n = false;
	 if (data.includes("ljksadf")) {
		 n = true;
	 }
	 console.log(n);
  },
  function(err) {
    console.error(err);
  }
);
