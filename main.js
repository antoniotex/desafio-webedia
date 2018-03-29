var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=pt&' +
          'apiKey=0374b95ead8b4547b4180d4b531d9026';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("").innerHTML = xhttp.responseText;
       var newsapi = JSON.parse(xhttp.responseText);
       var artigo = '';
       for(var i = 0; i < 4; i++){
        artigo += 
            '<div class="card-g">'+
                '<img src="' +newsapi.articles[i].urlToImage+ '" alt="">'+
                '<h4>' +newsapi.articles[i].publishedAt+'</h4>'+
                '<h3>' +newsapi.articles[i].title+ '</h3>'+
                '<p>' +newsapi.articles[i].description+ '</p>'+
                '<h3>POR: ' +newsapi.articles[i].author+ '</h3>'+
            '</div>';
       }
       document.getElementById("artigo-g").innerHTML = artigo;
    }
};

xhttp.open("GET", url, true);
xhttp.send();