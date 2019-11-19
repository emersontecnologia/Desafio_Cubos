$(document).ready(function(){
	console.log("Página carregada");
	genero = document.getElementById("genero");
	generos = document.getElementById("generos");
	nomefilme = document.getElementById("nomefilme");	

		$("#buscar").on('click', function () {

			var nome_filme = $("#filme").val();
			var urls = "https://api.themoviedb.org/3/movie/" + nome_filme + "?language=pt-BR&api_key=0b8836684c0e3b1939307ee7bd6fd887";
				$.ajax({
					url : urls,
					type : "get",
					dataType : "json",
					success : function (data){
						console.log(data);

					//alert(urls);
					genero.innerHTML = ''
					generos.innerHTML = ''
					nomefilme.innerHTML = ''

					for (var i = 0; i < 3; i++) {

//						$("#paginas").val(data.genres[0].name);
//						$("#escreva").val(data.genres[1].name);

						genero.innerHTML = data.genres[0].name;
						generos.innerHTML = data.genres[1].name;
						nomefilme.innerHTML = data.original_title;
						

						}
					},
					error : function(erro){
						console.log(erro);
					}
				});

		});
});


requestAPI = function(){

alert(form_filme.nome_filme);

	console(response);
	var form_filme = document.getElementById("form_filme");
	var nome_filme = form_filme.filme
	alert(nome_filme);
			var urls = "https://api.themoviedb.org/3/movie/" + nome_filme + "?language=pt-BR&api_key=0b8836684c0e3b1939307ee7bd6fd887";
			percorrePagina();
}


function percorrePagina(paginas){
	pagina = document.getElementById('paginas');
	pagina.innerHTML = ''


}