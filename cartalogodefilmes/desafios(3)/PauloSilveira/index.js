var listaFilmes = ['https://cinepop.com.br/wp-content/uploads/2016/12/shadowhunters_ver16_xlg.jpg','https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg','https://upload.wikimedia.org/wikipedia/pt/4/40/Alice_in_Borderland_%28s%C3%A9rie%29.png', 'https://m.media-amazon.com/images/I/71HGgigujnL._AC_UF1000,1000_QL80_.jpg','https://br.web.img2.acsta.net/pictures/15/07/29/14/06/297599.jpg','https://s2.glbimg.com/Mzm9GgdZAG6CWhEobVY3ZpcmuEc=/e.glbimg.com/og/ed/f/original/2018/10/14/sabrina_vertical-main_rgb.jpg','https://i.pinimg.com/236x/01/4f/0d/014f0de7ec13834005924c8e27a7270e.jpg', 'https://br.web.img2.acsta.net/pictures/22/12/06/21/04/3971225.jpg']
var nomesFilmes = ['Shadowhunter', 'Breaking Bad', 'Alice in Borderland', 'Suits', 'Narcos', 'O Mundo Sombrio de Sabrina', 'Supernatural', 'The Witcher' ]

document.write('<div class="container_TDFilmes">')

var i = 0;

while( i < listaFilmes.length ) {
    document.write('<div class="CTfilme">')
    document.write("<img class='cartaz' src=" + listaFilmes[i] + ">")
    document.write('<p>' + nomesFilmes[i] + '</p>');
    document.write('</div>')

    i++
}

/*
for(var i=0; i < listaFilmes.length; i++) {
  document.write('<div class="CTfilme">')
  document.write("<img class='cartaz' src=" + listaFilmes[i] + ">")
  document.write('<p>' + nomesFilmes[i] + '</p>');
  document.write('</div>')
}
*/

document.write('</div>')
