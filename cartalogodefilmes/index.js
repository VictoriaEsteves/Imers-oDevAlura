
var listaFilmes = ['https://cinepop.com.br/wp-content/uploads/2016/12/shadowhunters_ver16_xlg.jpg','https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg','https://upload.wikimedia.org/wikipedia/pt/4/40/Alice_in_Borderland_%28s%C3%A9rie%29.png', 'https://m.media-amazon.com/images/I/71HGgigujnL._AC_UF1000,1000_QL80_.jpg','https://br.web.img2.acsta.net/pictures/15/07/29/14/06/297599.jpg']

var nomesFilmes = ['Shadowhunter', 'Breaking Bad', 'Alice in Borderland', 'Suits', 'Narcos' ]
/*listaFilmes[0] = 'https://static.wikia.nocookie.net/shadowhunterstv/images/b/ba/TMI2Promo_Poster01.jpg/revision/latest/scale-to-width-down/1200?cb=20180219132636&path-prefix=pt-br'
listaFilmes[1] = 'https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg'
listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/4/40/Alice_in_Borderland_%28s%C3%A9rie%29.png'*/


for(var i=0;i < listaFilmes.length; i++) {

document.write("<img src=" + listaFilmes[i] + ">")
document.write(nomesFilmes[i])

}
