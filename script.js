var oldpageX = false;
var doanim = false;

$.backstretch("together_c2.png", {newElem:'crop',zIn:100,position:'absolute'}, function() {
    //initial animation
    //left
    $("#crop").animate({ marginLeft: "-3px" }, "slow", "swing", function() {
        //right
        $(this).delay(400).animate({ marginLeft: "3px" }, "slow", "swing", function() {
            //back to center
            $(this).delay(400).animate({ marginLeft: "0px" }, "slow", "swing", function() {
                doanim = true;
            });
        });
    });
});

$.backstretch("together.jpg");

//set up animation on mouse move
$(document).mousemove(function(e) {
    if (oldpageX && doanim) {
        doanim = false;
        if (oldpageX < e.pageX) { 
            //move right
            $("#crop").animate({ marginLeft: "3px" }, "slow", "swing", function() {
                //back to center
                $(this).delay(300).animate({ marginLeft: "0px" }, "slow", "swing", function() {
                    doanim = true;
                });
            });
        } else { 
            //move left
            $("#crop").animate({ marginLeft: "-3px" }, "slow", "swing", function() {
                //back to center
                $(this).delay(300).animate({ marginLeft: "0px" }, "slow", "swing", function() {
                    doanim = true;
                });
            });
        }
    }
    oldpageX = e.pageX;
});