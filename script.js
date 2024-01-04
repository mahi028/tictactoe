const box = document.querySelectorAll('.box');
const xwin = document.querySelector('.xwin');
const owin = document.querySelector('.ywin');
const drw = document.querySelector('.drw');
const xname = document.querySelector('.xname');
const yname = document.querySelector('.yname');
const shapeX = '<div class="cross c1"></div><div class="cross c2"></div>';
const shapeO = '<div class="circle"></div>';
const rline = '<div class="line rline"></div>';
const cline = '<div class="line cline"></div>';
const mdiag = '<div class="line mdiag"></div>';
const sdiag = '<div class="line sdiag"></div>';

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
    owin.innerHTML='0'
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

function isEqualArr(arr1,arr2){
    al1=arr1.length
    al2=arr2.length
    if(al1!=al2){
        return false
    }
    for(i=0;i<al1;i++){
        if(arr1[i]!=arr2[i]){
            return false
        }
    }return true
}

function winAnime(ar){
    for(i=1;i<ar.length-1;i++){
        switch (ar[ar.length-1]) {
            case 'row':
                document.querySelector(`.box${ar[i][0]}${ar[i][1]}`).innerHTML+=rline
                break;
            case 'col':
                document.querySelector(`.box${ar[i][0]}${ar[i][1]}`).innerHTML+=cline
                break;
            case 'mdiag':
                document.querySelector(`.box${ar[i][0]}${ar[i][1]}`).innerHTML+=mdiag
                break;
            case 'sdiag':
                document.querySelector(`.box${ar[i][0]}${ar[i][1]}`).innerHTML+=sdiag
                break;
            default:
                console.log('something\'s wrong')
                break;
        }
    }
}