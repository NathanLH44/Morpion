var scoreOne = 0;
var scoreTwo = 0;

(function($) {

    $.fn.morpion = function() {

        var move = 1;
        var count = 0;
        var play = true;

        // Initialisation du joueurs qui commence.

        $('#currentPlayer').text("Joueur 1");

        // Placement des "X" et des "O".

        $('.cell').click(function() {
            if ($(this).text()== "" && play) {
                if ( (move % 2) == 1) {
                    $('#currentPlayer').text("Joueur 2");
                    $(this).append("X");
                    $(this).css('color', '#61892f');
                }
                else {
                    $('#currentPlayer').text("Joueur 1");
                    $(this).append("O");
                    $(this).css('color', '#e85a4f');
                }
                move ++;

                console.log(this);

                // on compte les tours.

                count ++;

                // on affiche le gagnant.
                
                if (checkWinner() != null && checkWinner() != "") {
                    if (checkWinner() == "X") {
                        $('#grid').addClass("won");
                        $('.win-display').text('Joueur 1 a gagné !')
                        play = false;
                        scoreOne ++;
                        $('#playerOne').text(scoreOne);
                    }
                    else if (checkWinner() == "O") {
                        $('#grid').addClass("won");
                        $('.win-display').text('Joueur 2 a gagné !')
                        play = false;
                        scoreTwo ++;
                        $('#playerTwo').text(scoreTwo);
                    }
                }

                // si le nombre de tours est égale à 9 alors toutes les cases sont pleines, il y a donc égalité.

                else if (count == 9) {
                    $('#grid').addClass("won");
                    $('.win-display').text('Egalité !')
                    play = false;
                }
            }
        });

        // Check du gagnant.

        function checkWinner() {

            // On defini chaque cellules.

            cell_1 = $('.row:nth-child(1) .cell:nth-child(1)').text();
            cell_2 = $('.row:nth-child(1) .cell:nth-child(2)').text();
            cell_3 = $('.row:nth-child(1) .cell:nth-child(3)').text();
            cell_4 = $('.row:nth-child(2) .cell:nth-child(1)').text();
            cell_5 = $('.row:nth-child(2) .cell:nth-child(2)').text();
            cell_6 = $('.row:nth-child(2) .cell:nth-child(3)').text();
            cell_7 = $('.row:nth-child(3) .cell:nth-child(1)').text();
            cell_8 = $('.row:nth-child(3) .cell:nth-child(2)').text();
            cell_9 = $('.row:nth-child(3) .cell:nth-child(3)').text();

            // Check par ligne.

            if ((cell_1 == cell_2) && (cell_2 == cell_3)) {
                return cell_3;
            }
            if ((cell_4 == cell_5) && (cell_5 == cell_6)) {
                return cell_6;
            }
            if ((cell_7 == cell_8) && (cell_8 == cell_9)) {
                return cell_9;
            }

            // check par colonnes.

            if ((cell_1 == cell_4) && (cell_4 == cell_7)) {
                console.log("OK C L")
                return cell_7;
            }
            if ((cell_2 == cell_5) && (cell_5 == cell_8)) {
                console.log("OK C M")
                return cell_8;
            }
            if ((cell_3 == cell_6) && (cell_6 == cell_9)) {
                return cell_9;
            }

            // check par diagonales.

            if ((cell_1 == cell_5) && (cell_5 == cell_9)) {
                return cell_9;
            }
            if ((cell_3 == cell_5) && (cell_5 == cell_7)) {
                return cell_7;
            }
        }
    }

}(jQuery));

$('#grid').morpion();

// On recommence une partie en appelant le plugin à nouveau et en initiant toutes les valeurs à

// On crée une fonction qui remet la grille à 0.

function clearGame() {
    $('.cell').empty();
    $('#grid').removeClass("won");
    $('.win-display').empty();
}

// On crée le bouton rejouer.

$('#replay').click(function() {
    clearGame();
    $('#grid').morpion();
});