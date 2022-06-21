const API_KEY = '08a1958aa3aa482605fdecbd72083db1';
localStorage.clear();
function exibeFilmes(response) {
   let divlancamentos = document.getElementById('tela');
   let texto = ``;
   //MONTAR TEXTO HTML
   let dados = JSON.parse(response).results;
   console.log(dados);
   for (i=0;i<dados.length;i++){
  
     let filmes = dados[i];

     texto = texto + `
     <div class="row medium-8 large-7 columns">
     <div class="blog-post">
       <h3>${filmes.title} </h3>
       <img class="nov" src="https://image.tmdb.org/t/p/original${filmes.backdrop_path}" width="500"></img>
       <div class="col-8 col-sm-8 col-md-8 col-lg-6 col-xl-4">
       <p class="text">${filmes.overview}</p> </div>
       <div class="callout">
         <ul class="menu simple">
           <p style="padding 20px;">Data de lançamento: ${filmes.release_date}</p>
           <p style="padding 20px;">Popularidade: ${filmes.popularity}</p>
           <p style="padding 20px;">Crítica do público:${filmes.vote_average}</p>
           <p style="padding 20px;">Classificação indicativa:${filmes.genre_ids}</p>
           <p style="padding 20px;">Crítica:${filmes.vote_count}</p>
           <p style="padding 20px;">Título Original:${filmes.original_title}</p>
         </ul>
       </div>
      </div>
     </div>
     `;
   }
   

   //PREENCHER COM O TEXTO
  divlancamentos.innerHTML = texto;

}


function executaPesquisa() {
   let query = document.getElementById('txtBusca').value;

   let xhr = new XMLHttpRequest ();
   xhr.onload = function(){exibeFilmes(this.responseText)};
   xhr.open ('GET',`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
   xhr.send();
}
document.getElementById('btnPesquisa').addEventListener('click',executaPesquisa);




//BOTÃO +SERIES

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


$(document).ready(function(){
  $("#maiscrit").click(function(){
    $("#mais").slideToggle("slow");
  });
});


//MENU MOBILE

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
