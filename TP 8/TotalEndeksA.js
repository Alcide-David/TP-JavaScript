
//Ensesyon chen lan
let chenKarakte =  prompt("Antre chen karakte a : ");

while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

let TotalEndeksA = 0;


for (let i = 0; i < chenKarakte.length; i++) {
    //If sa ap pemet nou soti nan bouk lan depoi nou jwenn yon a
    if (chenKarakte[i] === "a" || chenKarakte[i] === "A") {
        TotalEndeksA += i;
    }
}

// Kondisyon pou si pat gen okenn mo ki gen a e afiche chanjman
if (TotalEndeksA != 0) {
    console.info("Sa se chen lan : "+ chenKarakte);
    console.info("Total endeks [ a ] yo se  : " + TotalEndeksA);
} else {
    console.info("Pat gen okenn mo ki gen 'a' na sa w te mete yo");
}