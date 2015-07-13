alert("Test js");

<script>
(function() {
  var OlapicAPI = "http://rest.photorank.me/customers/215757/media/photorank?";
  $.getJSON( OlapicAPI, {
    auth_token: "0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 5 ) {
          return false;
        }
      });
    });
})();
</script>