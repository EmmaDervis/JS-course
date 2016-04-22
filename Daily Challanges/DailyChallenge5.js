var Knight=[[7,1],[9,2]];
var Queen=[[1,2],[1,6]];

function MoveKnight(knightStartCoordinate, knightEndCoordinate, queenStartCoordinate){   
    // If knight movement is L shape
    if((Math.abs((knightStartCoordinate[0]) - (knightEndCoordinate[0]))==1
        && Math.abs((knightStartCoordinate[1]) - (knightEndCoordinate[1]))==2)
        ||
        ((Math.abs((knightStartCoordinate[0]) - (knightEndCoordinate[0]))==2
        && Math.abs((knightStartCoordinate[1]) - (knightEndCoordinate[1]))==1))){
       
        // If not outside of the board
        if(knightEndCoordinate[0] >= 1 && knightEndCoordinate[1] >= 1 && knightEndCoordinate[0]<=8 && knightEndCoordinate[1]<=8){
            // If not stepping on queen
            if(knightEndCoordinate!=queenStartCoordinate){               
                return "Knight movement is permited and possible";
            }
            else{           
                return "Knight movement is permited, but not possible - position is taken";
            }
        }else{
            return "Knight movement is not permited - Figure outside of board!";
        }    
    }
    else {
       
        return "Knight movement is not permited!";
    }
   
}


function MoveQueen(queenStartCoordinate, queenEndCoordinate, knightStartCoordinate){
   
    //If not outside of the board
   
    if(queenEndCoordinate[0] >= 1 && queenEndCoordinate[1] >= 1 && queenEndCoordinate[0]<=8 && queenEndCoordinate[1]<=8){
        //if not stepping on knight
        if(queenEndCoordinate!=knightStartCoordinate){
        return "Queen movement is permited";
        }
        else{
        return "Queen movement is not permited";
        }
    }
   
}


console.log(MoveKnight(Knight[0],Knight[1],Queen[0]));
console.log(MoveQueen(Queen[0],Queen[1],Knight[0]));