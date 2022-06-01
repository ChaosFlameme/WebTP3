
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
    bender.style.left=parseInt(bender.style.left)-100+"px";
}

function move_bot_down(){
    bender.style.top=parseInt(bender.style.top)+100+"px";
}

function move_bot_up(){
    bender.style.top=parseInt(bender.style.top)-100+"px";
}


function activate_bot(){
    console.log("BOT GO!");
    window.alert("BOT GO!");

    var table=document.getElementById("datatable");
    for(var i=0, row; row=table.rows[i] ;i++){
        var currentVal=row.cells[0].innerHTML;
        console.log(currentVal);
        var s=get_bot_action(currentVal);
        if(typeof s==='function'){
            s();
        }
    }
}



function get_bot_action(query){
    switch(query.substring(4)){
        case "CREATE":
            //console.log("Are we even here?");
            return ()=>{
                //console.log("Are we here?");
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
        case 'LEFT':
            return ()=>{
                bender.style.left=parseInt(bender.style.left)-100+"px";
            }
        case 'RIGHT':
            return ()=>{
                bender.style.left=parseInt(bender.style.left)+100+"px";
            }
        case 'UP':
            return ()=>{
                bender.style.top=parseInt(bender.style.top)-100+"px";
            }
        case 'DOWN':
            return ()=>{
                bender.style.top=parseInt(bender.style.top)+100+"px";
            }
        case 'SHRINK':
            return ()=>{
                bender.style.width=parseInt(bender.style.width)-50+"px";
                bender.style.height=parseInt(bender.style.height)-50+"px";
            }
        case 'GROW':
            return ()=>{
                bender.style.width=parseInt(bender.style.width)+50+"px";
                bender.style.height=parseInt(bender.style.height)+50+"px";
            }
        default:
            console.log("Nothing to do here");
    }
}
    
    
/*
function get_bot_action(query){
    switch(query.substring(4)){
        case "CREATE":
            create_robot();
            break;
        case 'LEFT':
            move_bot_left();
            break;
        case 'RIGHT':
            move_bot_right();
            break;
        case 'UP':
            move_bot_up();
            break;
        case 'DOWN':
            move_bot_down();
            break;
        default:
            console.log("Nothing to do here");
    }
}
*/
