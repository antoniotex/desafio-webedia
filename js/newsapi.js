var url = 'https://newsapi.org/v2/top-headlines?country=br&apiKey=0374b95ead8b4547b4180d4b531d9026';
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var newsapi = JSON.parse(xhttp.responseText);
       var linha1 = '';
       var linha2 = '';
       var linha3 = '';
       var cont = 0;
       for(var i = 0; i < 7; i++){
        if( cont < 2){
            linha1 += 
            '<div class="card-g"><a href="'+ newsapi.articles[i].url +'" target="_blank">'+
                '<div id="container-img">'+
                    '<img src="' +newsapi.articles[i].urlToImage+ '" alt="">'+
                '</div>'+
                '<p>'+newsapi.articles[i].publishedAt+'</p>'+
                '<h3>' +newsapi.articles[i].title+ '</h3>'+
                '<p>' +newsapi.articles[i].description+ '</p>'+
                '<p>POR : ' +newsapi.articles[i].author+ '</p>'+
            '<a></div>';
            cont++;
            }else if(cont < 5){
                linha2 +=
                '<div class="card-p">'+
                '<div id="container-img">'+
                    '<img src="' +newsapi.articles[i].urlToImage+ '" alt="">'+
                '</div>'+
                '<p>' +newsapi.articles[i].publishedAt+'</p>'+
                '<h3><a href="'+ newsapi.articles[i].url +'" target="_blank">' +newsapi.articles[i].title+ '<a></h3>'+
                '<p>' +newsapi.articles[i].description+ '</p>'+
                '<p>POR : ' +newsapi.articles[i].author+ '</p>'+
            '</div>';
            cont++;
            }else if(cont < 7){
                linha3 +=
                '<div class="card-g">'+
                '<div id="container-img">'+
                    '<img src="' +newsapi.articles[i].urlToImage+ '" alt="">'+
                '</div>'+
                '<p>' +newsapi.articles[i].publishedAt+'</p>'+
                '<h3><a href="'+ newsapi.articles[i].url +'" target="_blank">' +newsapi.articles[i].title+ '<a></h3>'+
                '<p>' +newsapi.articles[i].description+ '</p>'+
                '<p>POR : ' +newsapi.articles[i].author+ '</p>'+
            '</div>';
            }else{
                cont = 0;
            }
                document.getElementById("linha1").innerHTML = linha1;
                document.getElementById("linha2").innerHTML = linha2;
                document.getElementById("linha3").innerHTML = linha3;
                
       }
    }
};

xhttp.open("GET", url, true);
xhttp.send();