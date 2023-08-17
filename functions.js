


function playBtn(){
    let myAudio = document.getElementById("myAudio");
    myAudio.play();
}

function pauseBtn(){
    let myAudio = document.getElementById("myAudio");
    myAudio.pause();
}



let counter;
function func1() {
    signFunc("r1c1");
}

function func2() {
    signFunc("r1c2");
}
function func3() {
    signFunc("r1c3");
}function func4() {
    signFunc("r2c1");
}function func5() {
    signFunc("r2c2");
}
function func6() {
    signFunc("r2c3");
}function func7() {
    signFunc("r3c1");
}function func8() {
    signFunc("r3c2");
}function func9() {
    signFunc("r3c3");
}



function signFunc(id){
    if (counter === undefined) {
        document.getElementById(id).innerHTML = "X";
        counter = 1;

    } else {

        if ((counter % 2) === 0) {

            document.getElementById(id).innerHTML =  "X";
            counter++;
        } else {

            if (!((counter % 2) === 0)){

                document.getElementById(id).innerHTML = "O";
                counter++;
            }
        }
    }
    checkWin();

}

function checkWin(){

    //    check diagonals



    let middle = document.getElementById("r2c2").innerHTML;
    let firstUpLeft = document.getElementById("r1c1").innerHTML;
    let lastUpRight = document.getElementById("r1c3").innerHTML;
    let firstDownLeft = document.getElementById("r3c1").innerHTML;
    let lastDownRight = document.getElementById("r3c3").innerHTML;

    let downDiagonal = false;
    let upDiagonal = false;

    let fullMiddle = false;
    if ((middle==="X")||(middle==="O")){
        fullMiddle=true;
    }

    if (fullMiddle===true) {

        if (((middle == firstUpLeft) && (middle == lastDownRight))) {
            downDiagonal = true;
        }
        if (((middle == lastUpRight) && (middle == firstDownLeft))) {
            upDiagonal = true;
        }

        if (downDiagonal || (upDiagonal)) {
            alert(middle + " WIN!!");
        }
    }

    //    check rows
    let middleUp = document.getElementById("r1c2").innerHTML;
    let middleDown = document.getElementById("r3c2").innerHTML;
    let middleLeft = document.getElementById("r2c1").innerHTML;
    let middleRight = document.getElementById("r2c3").innerHTML;


    let firstRownBlock = false;
    let lastRownBlock = false;

    if ((firstUpLeft==="X")||(firstUpLeft==="O")){
        firstRownBlock=true;
    }

    if ((lastDownRight==="X")||(lastDownRight==="O")){
        lastRownBlock=true;
    }


    if ((firstRownBlock)||(lastRownBlock)||(fullMiddle)){
        //first row/colum
        if (firstRownBlock){
            if ((firstUpLeft == middleUp) && (middleUp == lastUpRight)) {
                alert(firstUpLeft + " WIN!! ");
            }
            if ((firstUpLeft == middleLeft) && (middleLeft == firstDownLeft)) {
                alert(firstUpLeft + " WIN!! ");
            }
        }

        //last row/colum
        if (lastRownBlock){
            if ((firstDownLeft == middleDown) && (middleDown == lastDownRight)) {
                alert(firstDownLeft + " WIN!! ");
            }
            if ((firstUpLeft == middleLeft) && (middleLeft == lastDownRight)) {
                alert(firstDownLeft + " WIN!! ");
            }
        }

        //middle row/colum
        if (fullMiddle){
            if ((middle == middleLeft) && (middle == middleRight)) {
                alert(middle + " WIN!! ");
            }
            if ((middle == middleUp) && (middle == middleDown)) {
                alert(middle + " WIN!! ");
            }
        }



    }
}















