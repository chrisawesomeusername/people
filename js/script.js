console.log('hahaha');



$.ajax({
  url:'js/friends.json',
  type:'GET',
  data:'json',
  success:function(frend){
    console.log(frend);
    var i;
    for (var i = 0; i < frend.length; i++) {
    document.getElementById('result').innerHTML +=
      '<div class="card" style="width: 12rem;">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' + frend[i].name + '</h5>' +
      '<h6 class="card-subtitle mb-2 text-muted">' + frend[i].age + '</h6>' +
      '<p class="card-text">' + frend[i].gender + '</p>' +
      '</div>' +
      '</div>'
    }
  },
  error: function(){
    console.log('error');
  }
});
