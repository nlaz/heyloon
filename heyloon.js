function Loon(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getLoon = {
  init: function(myLoon){
    this.myLoon = myLoon;
  },

  horizontal: function(){
    return this.myLoon.filter(function(myLoon){
      return myLoon.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myLoon.filter(function(myLoon){
      return myLoon.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myLoon.filter(function(myLoon){
      return myLoon.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myLoon = [ 
new Loon("horizontal", "http://www.wolfsvisionphotography.com/Common_Loon_XX_III_-_Island_Lake_2012.jpg"),
new Loon("vertical", "http://www.seagrant.wisc.edu/birds/images/MichellePWoodford_commonLoon2.jpg"),
new Loon("square", "http://www.hww.ca/assets/images/birds/loons/loons.jpg")
]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}     
           
(function (document) {
  
  getLoon.init(myLoon);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getLoon[ratio]());
    var img = getLoon[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
