/*Ecrire un algorithme qui demande un nombre de départ,
 et qui ensuite écrit la table de multiplication de ce nombre,
 présentée comme suit (cas où l'utilisateur entre le nombre 7):
 */
let nombre = prompt("entrez le nombre de depart")
let i = 0
while(i<10){
    i++
    resultat = nombre * i
    console.log(nombre, "X" , i , "=" , resultat)
}