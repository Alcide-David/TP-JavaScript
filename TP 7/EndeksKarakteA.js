//Ensesyon chen lan
let chenKarakte =  prompt("Antre chen karakte a : ");

while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

let endeksA =  chenKarakte.indexOf("a");

// Kondisyon pou si pat gen okenn mo ki gen a e afiche chanjman
if (!endeksA === undefined) {
    console.info("Sa se chen lan : "+ chenKarakte);
    console.info("Index premye let la ki gen a se : " + endeksA);
} else {
    console.info("Pat gen okenn mo ki gen 'a' na sa w te mete yo");
    
}