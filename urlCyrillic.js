const http = require("http");


var server = http.createServer(function(req, res){

	if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    // console.log('favicon removed');
    return;
}
//treba da se dopravi da ne izleva pred prviot zbor / i so zbor vo navodnici da go resis problemot
    urlText = req.url.split("%20");
    res.setHeader('Content-Type', 'text/html')
    res.write('<meta charset="UTF-8" >')
  for(x in urlText){
    var result = "";
    result += transliterate(urlText[x]);   
    console.log(result);
    res.write(result + " ");
  }
	  res.end();

});

server.listen(8080);
console.log("Server running on port 8080");


function transliterate(word) {
    var A = {};
    var result = '';

    A["A"]="А";A["B"]="Б";A["V"]="В";A["G"]="Г";A["D"]="Д";A["E"]="Е";A["Z"]="З";A["I"]="И";A["J"]="Ј";A["K"]="К";A["L"]="Л";A["M"]="М";A["N"]="Н";A["O"]="О";A["P"]="П";A["R"]="Р";A["S"]="С";A["T"]="Т";A["U"]="У";A["F"]="Ф";A["H"]="Х";A["C"]="Ц";

    A["a"]="а";A["b"]="б";A["v"]="в";A["g"]="г";A["d"]="д";A["e"]="е";A["z"]="з";A["i"]="и";A["k"]="к";A["l"]="л";A["m"]="м";A["n"]="н";A["o"]="о";A["p"]="п";A["r"]="р";A["s"]="с";A["t"]="т";A["u"]="у";A["f"]="ф";A["h"]="х";A["c"]="ц";
    
    // karakteri staveni preku if ciklus (golemi i mali).
    // A["gj"]="ѓ";
    // A["zh"]="ж";
    // A["zch"]="ж";
    // A["lj"]="љ";
    // A["nj"]="њ";
    // A["kj"]="ќ";
    // A["ch"]="ч";
    // A["tch"]="ч";
    // A["dzj"]="џ";
    // A["dz"]="џ";
    // A["dj"]="џ";
    // A["sh"]="ш";
    // A["sch"]="ш"



    for(var i = 0; i < word.length; i++) {
        var c = word.charAt(i);

        //da ne transformira vnatre vo navodnici ""
        if (c == "\u0022") {
           result += c;
           i++
           var j=0;
             while(d != "\u0022"){      //dodeka d != od " - vrsi go while ciklusot
             var d = word.charAt(i);
             result += d;               //dodavaj na rezultatot karakteri bez nikakva promena
             i++
             j++
               if (j>30000) {    //dokolku pogreska se otvori navodnik a ne se zatvori, za da ne kruzi do beskraj go
                d = "\u0022";   //ogranicuvam na 30000 karakteri posle otvoreniot navodnik
               }
              };
           i--;
           continue;        
        };
        // };
        //da ne transformira vnatre vo navodnici ''
         if (c == "\u0027") {
           result += c;
           i++
           var j=0;
             while(d != "\u0027"){
             var d = word.charAt(i);
             result += d;
             i++
             j++
                if (j>30000) {    //dokolku pogreska se otvori navodnik a ne se zatvori, za da ne kruzi do beskraj go
                d = "\u0027";   //ogranicuvam na 30000 karakteri posle otvoreniot navodnik
                }
              };
          
           i--;
           continue;        
          };
        if (c == "G" && (word.charAt(i+1) == "J" || word.charAt(i+1) == "j")) {
              result += "Ѓ";   
              i=i+1;
            continue;
        };
        if (c == "g" && word.charAt(i+1) == "j") {
              result += "ѓ";
              i=i+1;
            continue;
        };

         if (c == "Z" && ((word.charAt(i+1) == "C" && word.charAt(i+2) == "H") || (word.charAt(i+1) == "c" && word.charAt(i+2) == "h"))) {
              result += "Ж";
              i=i+2;
            continue;
        };
         if (c == "z" && word.charAt(i+1) == "c" && word.charAt(i+2) == "h") {
              result += "ж";
              i=i+2;
            continue;
        };
        if (c == "Z" && (word.charAt(i+1) == "H" || word.charAt(i+1) == "h")) {
              result += "Ж";
              i=i+1;
            continue;
        };
        if (c == "z" && word.charAt(i+1) == "h") {
              result += "ж";
              i=i+1;
            continue;
        };
        if (c == "L" && (word.charAt(i+1) == "J" || word.charAt(i+1) == "j")) {
              result += "Љ";
              i=i+1;
            continue;
        };
        if (c == "l" && word.charAt(i+1) == "j") {
              result += "љ";
              i=i+1;
            continue;
        };
        if (c == "N" && (word.charAt(i+1) == "J" || word.charAt(i+1) == "j")) {
              result += "Њ";
              i=i+1;
            continue;
        };
        if (c == "n" && word.charAt(i+1) == "j") {
              result += "њ";
              i=i+1;
            continue;
        };
         if (c == "K" && (word.charAt(i+1) == "J" || word.charAt(i+1) == "j")) {
              result += "Ќ";
              i=i+1;
            continue;
        };
        if (c == "k" && word.charAt(i+1) == "j"){
              result += "ќ";
              i=i+1;
            continue;
        };

        if (c == "T" && ((word.charAt(i+1) == "C" && word.charAt(i+2) == "H") || (word.charAt(i+1) == "c" && word.charAt(i+2) == "h"))) {
              result += "Ч";
              i=i+2;
            continue;
        };
         if (c == "t" && word.charAt(i+1) == "c" && word.charAt(i+2) == "h") {
              result += "ч";
              i=i+2;
            continue;
        };
        if (c == "C" && (word.charAt(i+1) == "H" || word.charAt(i+1) == "h")) {
              result += "Ч";
              i=i+1;
            continue;
        };
         if (c == "c" && word.charAt(i+1) == "h") {
              result += "ч";
              i=i+1;
            continue;
        };

        if (c == "S" && (word.charAt(i+1) == "H" || word.charAt(i+1) == "h")) {
              result += "Ш";
              i=i+1;
            continue;
        };
        if (c == "S" && ((word.charAt(i+1) == "C" && word.charAt(i+2) == "H") || (word.charAt(i+1) == "c" && word.charAt(i+2) == "h"))) {
              result += "Ш";
              i=i+2;
            continue;
        };
        if (c == "s" && word.charAt(i+1) == "h") {
              result += "ш";
              i=i+1;
            continue;
        };
        if (c == "s" && word.charAt(i+1) == "c" && word.charAt(i+2) == "h") {
              result += "ш";
              i=i+2;
            continue;
        };
        if (c == "D" && ((word.charAt(i+1) == "Z" && word.charAt(i+2) == "J") || (word.charAt(i+1) == "z" && word.charAt(i+2) == "j"))) {
              result += "Џ";
              i=i+2;
            continue;
        };
        if (c == "D" && ((word.charAt(i+1) == "Z") || (word.charAt(i+1) == "z"))) {
              result += "Џ";
              i=i+1;
            continue;
        };
        if (c == "D" && ((word.charAt(i+1) == "J") || (word.charAt(i+1) == "j"))) {
              result += "Џ";
              i=i+1;
            continue;
        };
        if (c == "d" && (word.charAt(i+1) == "z" && word.charAt(i+2) == "j")) {
              result += "џ";
              i=i+2;
            continue;
        };
        if (c == "d" && (word.charAt(i+1) == "z")) {
              result += "џ";
              i=i+1;
            continue;
        };
        if (c == "d" && (word.charAt(i+1) == "j")) {
              result += "џ";
              i=i+1;
            continue;
        };

        result += A[c] || c;  // Ako nikoj od if-ovite ne se izvrsi se izvrsuva ova
    }

    return result;
}
