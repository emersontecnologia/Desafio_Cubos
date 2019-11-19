$(document).ready(function(){
	console.log("Página carregada");
	

		$("#buscar").on('click', function () {



new Vue({
  el: '#app',
  data: {
    dogs: []
  },
  created: function() {
    var self = this;
  
    $.get('https://api.themoviedb.org/3/movie/" + nome_filme + "?language=pt-BR&api_key=0b8836684c0e3b1939307ee7bd6fd887', function(data) {
      self.dogs = data.message;
    })
  }
})
			

			var nome_filme = $("#filme").val();
			var urls = "https://api.themoviedb.org/3/movie/" + nome_filme + "?language=pt-BR&api_key=0b8836684c0e3b1939307ee7bd6fd887";
				alert(urls);
				$.ajax({
					url : urls,
					type : "get",
		//			dataType : "json",
					success : function (data){
						console.log(data);
					},
					error : function(erro){
						console.log(erro);
					}
				});

		});
});

new Vue({
  el: '#app',
  data: {
    dogs: []
  },
  created: function() {
    var self = this;
  
    $.get('https://api.themoviedb.org/3/movie/" + nome_filme + "?language=pt-BR&api_key=0b8836684c0e3b1939307ee7bd6fd887', function(data) {
      self.dogs = data.message;
    })
  }
})