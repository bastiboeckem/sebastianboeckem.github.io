$(document).ready(function(){
    const players = [];
    let active_player = 0;
    let darts = 3;

    const new_player = (name) => {
        let points = parseInt($('#goal :checked').attr('value'));

        return {
            name: name !== '' ? name : `Spieler ${players.length + 1}`,
            points
        }
    };

    const showStep = step => {
        $('.step').hide();
        $(`.step_${step}`).show();
    };

    const showPlayer = id => {
        $('h2.player_name').text(players[id].name);
        $('span.points_remaining').text(players[id].points);
    };

    const listPlayers = () => {
      let html = '';
      players.forEach(({name, points}) => {
          html = html + `<li><span class="name">${name}</span><span class="points">${points}</span></li>`
      });
        $('.players_list ul').html(html);
    };

    showStep(0);

    $("button").on("click",function(e){
        showStep($(this).attr('next'));
    });

    $("form#darts .typeSubmit").on("click",function(e){
        e.preventDefault();
        let factore = parseInt($('#factors :checked').attr('value'));
        let field = parseInt($(this).attr('value'));
        let score = field === 25 || field === 50 ? field : field * factore;
        let remainingPoints = players[active_player].points;

        console.log(remainingPoints, score);

        if (remainingPoints >= score) {
            remainingPoints = remainingPoints - score;
            players[active_player].points = remainingPoints;
            $('span.points_remaining').text(remainingPoints);
            listPlayers();
        }
    });

    $("form#addPlayer").on("submit",function(e){
        e.preventDefault();

        $('.newPlayer :disabled').removeAttr('disabled');

        const name = $("input#newPlayer").val();
        players.push(new_player(name));

        players.length === 1 && showPlayer(0);
        $('input#newPlayer').val('');
        listPlayers();
    });

    $('.game button').on('click', function (e) {
        active_player < players.length -1 ? active_player++ : active_player = 0;
        showPlayer(active_player);
    })
});