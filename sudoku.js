let board = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,0,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
]


function possible(y, x, n) {
  for (let i = 0; i < board.length; i++){
    if (board[y][i] == n) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++){
    if (board[i][x] == n) {
      return false;
    }
  }

  let x0 = Math.floor(x / 3) * 3;
  let y0 = Math.floor(y / 3) * 3 
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[y0 + i][x0 + j] == n) {
        return false;
      }
    }
  }
  return true;
}

//console.log(possible(4, 4, 5))

function solve(){
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board.length; x++) {
      if (board[y][x] == 0){
        for (let n = 1; n <= board.length; n++){
          if (possible(y, x, n)) {
            board[y][x] = n
            solve()
            board[y][x] = 0
          }
        }
        return ;
      }
    }
  }
  console.log(board)
}

solve()