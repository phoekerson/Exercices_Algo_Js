/* Enoncé du sujet 
    Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
    Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27 
    Avec une boucle Tant que.
*/
let nombre = prompt("entrez un nombre au hasard")
let i = 0
while(i<10){
    i++
    nombre++
    console.log(nombre)
}
