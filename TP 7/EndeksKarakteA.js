//Ensesyon chen lan
let chenKarakte =  prompt("Antre chen karakte a : ");

while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

//Varyab boolean k ap pemet nou konnen si l jwenn let a
test = false;

for (let i = 0; i < chenKarakte.length; i++) {
    if (chenKarakte[i] === "a") {
        endeksA = i;
        test = true;
        break;  // Soti nan bouk la lè ou jwenn premye "a"
    }
}

// Kondisyon pou si pat gen okenn mo ki gen a 
if (test === true) {
    console.info("Sa se chen lan : "+ chenKarakte);
    console.info("Index premye let la ki gen a se : " + endeksA);
} else {
    console.info("Pat gen okenn mo ki gen 'a' na sa w te mete yo");
    
}
