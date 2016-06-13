var url = 'https://pokeapi.co/api/v2/pokemon/'
//


var shows = {
    search: function(cb){
        $.getJSON('http://api.eventful.com/json/events/search?c=music&app_key=jcP6d2QX9tSJ6CDg&keywords=childish+gambino&callback=?', cb);
        $.getJSON('htpp://api.eventful.com/json/events/search?&app_key=jcP6d2QX9tSJ6CDg&location=indianapolis&t=Today&within=10miles&callback=?')
};


var 
function addDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;
   return (console.log(today));
}




$.get({
  url: url,
  success: addDate
});
