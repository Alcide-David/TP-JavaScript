//Emsesyon mo a pa itilizate a
let moMajiskil = prompt("Antre mo majiskil lan ou ta vle fe miniskil : ")

//N ap teste si mo a vreman an Manjiskil  ak si varyab lan vid
while(moMajiskil !== moMajiskil.toUpperCase() || !moMajiskil.trim()){
    console.info(" ERE : Rezon yo ka :")
    console.info("    --> Yon let oswa mo a pat an majiskil")
    console.info("    --> Varyab lan vid")
    moMajiskil = prompt(" Mo a oswa yon let ladan pat an Majiskil (Oswa chan rete vide), eseye anko : ")
}
let moMiniskil = moMajiskil.toLowerCase();

console.info("Chanjman tout karaktè yo an miniskil : " + moMiniskil);
