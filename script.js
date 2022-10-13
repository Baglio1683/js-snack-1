
let word1 = prompt("inserire la prima parola: ")
let word2 = prompt("Inserire la seconda parola: ")

if(word1.length > word2.length){
    alert("la parola più corta è " + word2 + " e quella più lunga è " + word1)
}


if(word1.length < word2.length){
    alert("la parola più corta è " + word1 + " e quella più lunga è " + word2)
}