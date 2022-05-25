function create_robot(){
    let bender=document.createElement('img');
    bender.src="../img/Bender.png";
    bender.style.height="100px";
    bender.style.position="absolute";
    bender.style.top="0px";
    bender.style.left="0px";
    bender.style.transition="all 2s";
    bender.id="bender";
    document.body.append(bender);
}

function move_bot_right(){
    bender.style.left=parseInt(bender.style.left)+100+"px";
}

function move_bot_left(){
    bender.style.left=parseInt(bender.style.left)-100+'px';
}

function move_bot_down(){
    bender.style.top=parseInt(bender.style.top)-100+'px';
}

function move_bot_up(){
    bender.style.top=parseInt(bender.style.top)+100+'px';
}

function activate_bot(){
    console.log("BOT GO!");
    window.alert("BOT GO!");

    var table=document.getElementById("datatable");
    for(var i=0, row; row=table.rows[i] ;i++){
        var currentVal=row.cells[0].innerHTML;
        console.log(currentVal);
        get_bot_action(currentVal);
    }
}

function get_bot_action(query){
    
    switch(query){
        case 'BOT_CREATE':
            create_robot();
        break;

        case 'BOT_LEFT':
            move_bot_left();
        break;
        case 'BOT_RIGHT':
            this.move_bot_right();
        break;
        case 'BOT_UP':
            move_bot_up();
        break;
        case 'BOT_DOWN':
            move_bot_down();
        break;
        default:
            console.log("Nothing to do here");
    }
}