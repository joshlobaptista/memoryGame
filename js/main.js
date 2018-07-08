// what can the user do?
// what does the user expect?
// What can the user see?

//click on card
//add selected
//if two cards have selected - see if they are a match
//if they are a match add match class and remove select, so you can keep selecting
$(document).ready(function(){
  //memory game
  const app = {
    cards: ['JOSH', 'JOSH', 'WILL', 'WILL', 'RULE', 'RULE', 'THE', 'THE', 'WORLD', 'WORLD', 'SOON', 'SOON'],
    beginGame: function(){
      app.shuffle();
    },

    shuffle: function(){
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;
      }
      app.assignCards();
      console.log('Shuffled Cards: ' + app.cards);
    },

    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', app.cards[index]);
      });
      app.clickHandlers();
    },

    clickHandlers: function() {
      $('.card').on('click', function() {
        $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected');
        app.checkForMatch();
      });
    },

    checkForMatch: function(){
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          app.checkForWin();
        }else{
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 600);
        }
      }
    },

    checkForWin: function() {
      if ($('.unmatched').length === 0) {
        $('.container').html('<h1>YOU WON. But most importantly it is True Josh Will Rule The World Soon!</h1>');
      }
    }
  };

  app.beginGame()
});
