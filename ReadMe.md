Dans cette colle, nous avons reproduis un morpion.

Tu pourras les tester directement sur ton navigateur !

Je te détails ci-dessous, les parties de mon code :

Premièrement, je crée deux variable en dehors du plug-in qui me permettrons d'afficher les scores grace à une incrémentation dans le plug-in.

Dans mon plug-in :

- j'initie la fonction morpion.

Dans cette fonction :

- Je crée une fonction qui au clique dans un cellule permettra au tour par tour d'afficher ou un "X" ou un "O" dans une case. Pour ce faire j'utilise une variable move avec un %2.

- Je crée aussi l'affichage et le traitement du vainqueur si vainqueur il y a.

- J'initie également une variable count qui va compté le nombre de mouvement qu'il y a. Etant donné qu'il n'y a que 9 case, je lui indique que si les 9 cases sont pleines, cela signifie qu'il y a une égalité.

- Si il y a un vainqueur, je bloque le jeu et affiche le pop-up.

Dans une autre fonction que j'ai appelé "checkWinner" j'établis toutes les conditions de victoire.

Il existe au morpion 8 façon de gagné :

- Chaque ligne (3).
- Chaque colonnes (3).
- Chaque diagonales (2).

Pour ce faire, je definis chaque case grace à "row" et à "cell".
Je verifie ensuite les conditions en faisant :
case 1 = case 2 = case 3
case 4 = case 5 = case 6
... et ainsi de suite pour les 8 possibilités de victoire.

J'appele les éléments qui se trouve dans le plug-in afin de lancer le jeu.

J'ai également dissocié quelques éléments afin qu'il ne soit pas dans le plug-in.
Par exemple, la fonction pour relancer le jeu n'est pas dans le plug-in.
En effet, elle appelle le plug-in pour relancer le jeu en appelant avant une fonction qui nettoie toute la grille.

Amuse-toi bien, tout est fonctionnel, tu peux même jouer avec tes amis :)