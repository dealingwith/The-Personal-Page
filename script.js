// var oldpageX = false;
// var doanim = false;

// $.backstretch("together_c2.png", {newElem:'crop',zIn:100,position:'absolute'}, function() {
//     //initial animation
//     //left
//     $("#crop").animate({ marginLeft: "-3px" }, "slow", "swing", function() {
//         //right
//         $(this).delay(400).animate({ marginLeft: "3px" }, "slow", "swing", function() {
//             //back to center
//             $(this).delay(400).animate({ marginLeft: "0px" }, "slow", "swing", function() {
//                 doanim = true;
//             });
//         });
//     });
// });

// $.backstretch("lucy-1mo.jpg");

//set up animation on mouse move
// $(document).mousemove(function(e) {
//     if (oldpageX && doanim) {
//         doanim = false;
//         if (oldpageX < e.pageX) { 
//             //move right
//             $("#crop").animate({ marginLeft: "3px" }, "slow", "swing", function() {
//                 //back to center
//                 $(this).delay(300).animate({ marginLeft: "0px" }, "slow", "swing", function() {
//                     doanim = true;
//                 });
//             });
//         } else { 
//             //move left
//             $("#crop").animate({ marginLeft: "-3px" }, "slow", "swing", function() {
//                 //back to center
//                 $(this).delay(300).animate({ marginLeft: "0px" }, "slow", "swing", function() {
//                     doanim = true;
//                 });
//             });
//         }
//     }
//     oldpageX = e.pageX;
// });

$(function() {
    
    
    $.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157628702575473&nsid=27134490@N00&lang=en-us&format=json&jsoncallback=?", function(data){
      var items = data.items; //fisherYates(data.items)
      $.each(items, function(i,item){
        $img = $('<img id="' + i + '" src="' + item.media.m + '">');
        $img.css('visibility', 'hidden');
        $img.appendTo("body");
        console.log($("#" + i).width());
        $('<div class="img_container" style="background:url(' + item.media.m + ') center center no-repeat"></div>').prependTo("body");
        //.replace(/_m.(\w{3})/, ".$1")
      });
      // $(".content.image:eq(0)").show();
      // setTimeout(imageChange, 15000);
    });
    
});

function fisherYates (myArray) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
  return myArray;
}