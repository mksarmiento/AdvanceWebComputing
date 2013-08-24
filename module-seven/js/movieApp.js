$(document).ready(function(){
	$('#send').click(function(){

		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the Movie Title");
		}
			$(function(){
			$('#resultleft').html("");
			$('#resultleft').append('<p class="text-info"><font color="black">Searching for: ' +moviesearch+ '</p>');
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: 'hcrurhsttexasrgfm2y6yahm'
				},
					dataType: 'jsonp',
					success: showMovies
			});
			function showMovies(response){
				//console.log(response);
				$('.movie_container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h2 style="text-align: center;"><font color="black">No Available Synopsis</h2>';
						$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title"><font color="back"><font color="black">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
						
					}else{					
					$('.movie_container').append('<div class="movie_holder">'+'<div class="thumb">'+'<img src="' +movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="movie_title"><font color="black">' +movie.title+ '</p>'+'<div class="synopsis">'+'<p>"'+synop+'"</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: ' +movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
					}
				}
					var lengthofmov = response.movies.length;
					$('#resultright').html("");
					$('#resultright').append('<p class="text-info"><font color="black">Number of Entry: '+lengthofmov+'</p>');
			}
				
			});
				$( '#formmovie' ).each(function(){
					this.reset();
				});
			
		});
		

});

