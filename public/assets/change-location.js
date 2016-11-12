$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var val = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/map/',
        data: val,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/map/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        },
        error: function(data){
          console.log(data.status + " " + data.statusText);

        }
      });
  });


});
