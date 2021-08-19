console.log ("your index.js file is loaded correctly!")

$( ".toHoverNav" ).hover(
    function() {
      $( this ).toggleClass( "whenHoveredNav", 300 );
    }
  );