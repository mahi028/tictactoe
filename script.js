const box = document.querySelectorAll('.box');
const xwin = document.querySelector('.xwin');
const ywin = document.querySelector('.ywin');
const drw = document.querySelector('.drw');
const xname = document.querySelector('.xname');
const yname = document.querySelector('.yname');
const shapeX='<div class="cross c1"></div><div class="cross c2"></div>';
const shapeO='<div class="circle"></div>';
let n=3;
let tictactoe=createMatrix(n);
let count=0;
let winX=0;
let winY=0;
let nowin=0;

function clicked(x,y){
    selectedBox = document.querySelector(`.box${x}${y}`)

    if(tictactoe[x][y]==0){
        if(count%2==0){
            tictactoe[x][y]='x'
            selectedBox.innerHTML=shapeX
        }else{
            tictactoe[x][y]='o'
            selectedBox.innerHTML=shapeO
        }
        count+=1
    }
    announceWinner(tictactoe)
}

function reset(){
    for (i of box){
        i.innerHTML=''
    }
    tictactoe=createMatrix(n)
}
function newGame(){
    reset()
    winX=0
    xwin.innerHTML='0'
    winY=0
    ywin.innerHTML='0'
    nowin=0
    drw.innerHTML='0'
}

function createMatrix(n){
    matrix=[]
    for(i=0;i<n;i++){
        row=[]
        for(j=0;j<n;j++){
            row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

function announceWinner(mat){
    //checking for row
    announce(tictactoe)
    //cheaking for column
    announce(transpose(tictactoe))
    //cheacking for diagonal
    announce(diag(tictactoe))
    draw(tictactoe)
}

function announce(mat){
    for(i of mat){
        switch (win(i)) {
            case 'x':
                winX+=1
                xwin.innerHTML=winX
                reset()
                break;
            case 'o':
                winY+=1
                ywin.innerHTML=winY
                reset()
                break
            default:
                break;
        }
    }
}

function win(l){
    let a = 0
    let b = 0
    for(i=0;i<n;i++){
        if(l[i]=='x'){
            a+=1
        }else if(l[i]=='o'){
            b+=1
        }
    }
    if(a==n){
        return 'x'
    }else if(b==n){
        return 'o'
    }else{
        return undefined
    }
}

function transpose(mat){
    let tMat=[]
    for(i=0;i<n;i++){
        let row=[]
        for(j=0;j<n;j++){
            row.push(mat[j][i])
        }
        tMat.push(row)
    }
    return tMat
}

function diag(mat){
    let dMat=[]
    let row=[]
    for(i=0;i<n;i+=1){
        row.push(mat[i][i])
    }
    dMat.push(row)
    row=[]
    for(i=0;i<n;i+=1){
       row.push(mat[i][n - i - 1])
    } 
    dMat.push(row)
    return dMat
}
function draw(mat){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(mat[i][j]==0){
                return false
            } 
        }
    }
    nowin+=1
    drw.innerHTML=nowin

    // reset()
}