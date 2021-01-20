let game = document.getElementById("game");

const mapGenerator = (rows, columns, mines) => { 
    game.innerHTML = "";
    let grid = []
    for (j = 0 ; j <= (rows-1); j++) {
        let array = [];
        for (i = 0 ; i <= (columns-1); i++) {
            const randomNumber = Math.floor(Math.random() * (rows/(mines/columns))) + 1;
            if (randomNumber===Math.floor(rows/(mines/columns))){
                array[i] = "x";
            } else {
                array[i] = 0 ;
            }
        } grid.push(array);
    }

    for (j = 1 ; j < (rows-1); j++){
        for (i = 1 ; i < (columns-1) ; i++){
            let currentgridElement = (grid[j][i]);
            if(currentgridElement === "x"){
                if(grid[j-1][i-1] !== "x") {grid[j-1][i-1] += 1};
                if(grid[j-1][i+1] !== "x") {grid[j-1][i+1] += 1};
                if(grid[j+1][i+1] !== "x") {grid[j+1][i+1] += 1}; 
                if(grid[j+1][i-1] !== "x") {grid[j+1][i-1] += 1};
                if(grid[j][i+1] !== "x") {grid[j][i+1] += 1};            
                if(grid[j][i-1] !== "x") {grid[j][i-1] += 1};
                if(grid[j+1][i] !== "x") {grid[j+1][i] += 1};
                if(grid[j-1][i] !== "x") {grid[j-1][i] += 1};
            } 
        }
    }

    for(j=1; j<(rows-1); j++){
        for(i=0; i<1; i++){
            let currentgridElement = (grid[j][i]);
            if(currentgridElement === "x"){
                if(grid[j-1][i] !== "x"){grid[j-1][i] += 1};
                if(grid[j-1][i+1] !== "x"){grid[j-1][i+1] += 1};
                if (grid[j][i+1] !== "x"){grid[j][i+1] += 1}; 
                if(grid[j+1][i+1] !== "x") {grid[j+1][i+1] += 1}; 
                if(grid[j+1][i] !== "x") {grid[j+1][i] += 1};
            }
        }
    }
    for(j=1; j<(rows-1); j++){
        for(i=(columns-1); i<=(columns-1); i++){
            let currentgridElement = (grid[j][i]);
            if(currentgridElement === "x"){
                if(grid[j-1][i] !== "x"){grid[j-1][i] += 1};
                if(grid[j+1][i] !== "x") {grid[j+1][i] += 1};
                if(grid[j-1][i-1] !== "x"){grid[j-1][i-1] += 1};
                if (grid[j][i-1] !== "x"){grid[j][i-1] += 1}; 
                if(grid[j+1][i-1] !== "x") {grid[j+1][i-1] += 1};    
            }
        }
    }
    for(j=0; j<1; j++){
        for(i=1; i<(columns-1); i++){
            let currentgridElement = (grid[j][i]);
            if(currentgridElement === "x"){
                if(grid[j+1][i] !== "x") {grid[j+1][i] += 1};
                if(grid[j][i+1] !== "x") {grid[j][i+1] += 1};
                if(grid[j][i-1] !== "x") {grid[j][i-1] += 1}; 
                if(grid[j+1][i-1] !== "x") {grid[j+1][i-1] += 1}; 
                if(grid[j+1][i+1] !== "x") {grid[j+1][i+1] += 1};   
            }
        }
    }
    for(j=(rows-1); j<=(rows-1); j++){
        for(i=1; i<(columns-1); i++){
            let currentgridElement = (grid[j][i]);
            if(currentgridElement === "x"){
                if(grid[j-1][i] !== "x") {grid[j-1][i] += 1};
                if(grid[j][i+1] !== "x") {grid[j][i+1] += 1};
                if(grid[j][i-1] !== "x") {grid[j][i-1] += 1}; 
                if(grid[j-1][i-1] !== "x") {grid[j-1][i-1] += 1}; 
                if(grid[j-1][i+1] !== "x") {grid[j-1][i+1] += 1};   
            }
        }
    }

    if(grid[0][0]==="x"){
        if(grid[1][1]!== "x") {grid[1][1]+=1};
        if(grid[0][1]!== "x") {grid[0][1]+=1};
        if(grid[1][0]!== "x") {grid[1][0]+=1}
    };
    if(grid[(rows-1)][(columns-1)]==="x"){
        if(grid[(rows-2)][(columns-2)]!== "x") {grid[(rows-2)][(columns-2)]+=1};
        if(grid[(rows-1)][(columns-2)]!== "x") {grid[(rows-1)][(columns-2)]+=1};
        if(grid[(rows-2)][(columns-1)]!== "x") {grid[(rows-2)][(columns-1)]+=1}
    };
    if(grid[0][(columns-1)]==="x"){
        if(grid[0][(columns-2)]!== "x") {grid[0][(columns-2)]+=1};
        if(grid[1][(columns-1)]!== "x") {grid[1][(columns-1)]+=1};
        if(grid[1][(columns-2)]!== "x") {grid[1][(columns-2)]+=1}
    };
    if(grid[(rows-1)][0]==="x"){
        if(grid[(rows-1)][1]!== "x") {grid[(rows-1)][1]+=1};
        if(grid[(rows-2)][1]!== "x") {grid[(rows-2)][1]+=1};
        if(grid[(rows-2)][0]!== "x") {grid[(rows-2)][0]+=1}
    };

    
    game.style.gridTemplateColumns = `repeat(${columns}, auto [col-start])`
    grid.forEach((array) => {
        array.forEach((el) => {
            if(el===0){
                return game.innerHTML += `<div class="empty">${el}</div>`;
            } else if(el==="x"){
                return game.innerHTML += `<div><i class="fas fa-bomb"></i></div>`
            } else {
                return game.innerHTML += `<div>${el}</div>`
            }
        })
    });
}
mapGenerator(15,15,30);

const newMapGenerator = (difficulty) => {
    if(difficulty==='easy'){
        mapGenerator(15,15,15);
    } else if (difficulty===`medium`){
        mapGenerator(15,15,30);
    } else if(difficulty==='hard') {
        mapGenerator(15,15,60);
    }
}





