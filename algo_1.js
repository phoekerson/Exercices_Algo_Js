/* Enoncé du sujet 
	Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
	Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27 
	Avec une boucle pour.
*/
let number = prompt("entrez un nombre au hasard")
for (i=0;i<10;i++){
    number++
    console.log(number)
}