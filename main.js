$(document).ready(function(){
$("button").click(function(){
    $("p").toggle();
  });

  $("input").focus(function(){
  $(this).css("background-color", "red");
});

$("button").click(function(){
  $("p").slideToggle(2000);
});

$(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
});