function generateRandom(maxLimit = 100){
    var odp = "Prawdopodobieństwo, że tak będzie, wynosi: " 
    var rand = Math.random() * maxLimit;
    rand = Math.floor(rand) 
   odp += rand
   
    if(rand >= 0 && rand <= 33){
    document.getElementById('test').innerHTML = odp + "%"
    document.getElementById("test").style.color = "red";
    console.log(odp)
    }
    else if(rand >=34 && rand <= 66) {
        document.getElementById('test').innerHTML = odp + "%"
        document.getElementById("test").style.color = "blue";
        console.log(odp)
    }

    else{
        document.getElementById('test').innerHTML = odp + "%"
        document.getElementById("test").style.color = "green";
        console.log(odp)
    }
};

var pytia = document.getElementById("buttonJs");
pytia.addEventListener("click", function() {
generateRandom(maxLimit = 100)
    
});

