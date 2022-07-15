num_cells = 25
cells = []


board = document.getElementById("board")






for(let i=0; i<num_cells; i++){
    for(let j=0; j<num_cells; j++){
        let cell_ij =  document.createElement('div');
        cell_ij.classList.add("cell");
        cells.push(cell_ij);
        board.appendChild(cell_ij);
    }
}


snake = [22,23,24];
snake_direction = "RIGHT";
prize = 30



flag_key_active = true

document.addEventListener('keydown', (event) => {
    
    if (!flag_key_active) return
    else flag_key_active = false

    codes_keys  = {
        "ArrowUp":      { direction: "UP", ignore: "DOWN"},
        "ArrowDown":    { direction: "DOWN", ignore: "UP"},
        "ArrowLeft":    { direction: "LEFT", ignore: "RIGHT"},
        "ArrowRight":   { direction: "RIGHT", ignore: "LEFT"}, 
    }
    
    if (snake_direction != codes_keys[event.key].ignore)
        snake_direction = codes_keys[event.key].direction

  }, false);


function drawnBoard(){
    cells.forEach(cell => cell.className = "cell");
    cells[snake[0]].className = "cell-snake-head";
    
    for(let i=1; i< snake.length; i++)        
        cells[snake[i]].className = "cell-snake";
    
    console.log(prize)
    cells[prize].className = "cell-prize";
}




function moveSnake() {
    cell_cero_key = {
        "LEFT": -1,
        "RIGHT": 1,
        "UP": -num_cells,
        "DOWN": num_cells
    }

    snake.unshift(snake[0] + cell_cero_key[snake_direction]);


    if(prize == snake[0]){
        prize = Math.floor( Math.random() * ( num_cells * num_cells - snake.length))
        if ( (prize >= snake[0]) && (prize <= snake[snake.length-1]))   
            prize = (prize + snake.length) % (num_cells*num_cells)
    }
    else
        snake.pop();    
    flag_key_active = true
    drawnBoard();
}

setInterval(moveSnake, 150);

  




