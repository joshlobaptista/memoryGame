//click on card
//add selected
//if two cards have selected = see if they are a match
// if they are a match add match class and remove select, so you can keep selecting


const game = {
  checkIfMatch: function(){
    if ($('.selected').eq(0).attr('class') == $('.selected').eq(1).attr('class')) {
      $('.selected').addClass('matched').removeClass('selected')
    }else {
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if ($('.card').length == $('.matched').length) {
      alert('GAME OVER')
    }
  }
}

$('.card').on('click',function(){
  $(this).toggleClass('selected')
  if ($('.selected').length == 2) {
    game.checkIfMatch()
  }
});
