function announceWinner(mat){
    rowwin=checkrow(mat)
    updateWinner(rowwin)

    colwin=checkcol(transpose(mat))
    updateWinner(colwin)

    diagwin=checkdiag(mat)
    updateWinner(diagwin)

    if(isEqualArr(rowwin,[]) || isEqualArr(colwin,[]) || isEqualArr(diagwin,[])){
        draw(mat)
    }
}

function updateWinner(winner){
    if(winner[0]=='x'){
        winX+=1
        xwin.innerHTML=winX
        winAnime(winner)
        x=setTimeout(() => {
            reset()
        }, 1000);
    }else if(winner[0]=='o'){
        winY+=1
        ywin.innerHTML=winY
        winAnime(winner)
        x=setTimeout(() => {
            reset()
        }, 1000);
    }
}

function checkrow(mat){
    let winner=[]
    for(i=0;i<n;i++){
        xcount=0
        ocount=0
        for(j=0;j<n;j++){
            if(mat[i][j]=='x'){
                winner.push([i,j])
                xcount+=1
            }else if(mat[i][j]=='o'){
                winner.push([i,j])
                ocount+=1
            }
        }
        if(xcount==n){
            winner.splice(0,0,'x')
            winner.push('row')
            return winner
        }else if(ocount==n){
            winner.splice(0,0,'o')
            winner.push('row')
            return winner
        }else{
            winner=[]   
        }
    }return winner
}

function checkcol(mat){
    let winner=[]
    for(i=0;i<n;i++){
        xcount=0
        ocount=0
        for(j=0;j<n;j++){
            if(mat[i][j]=='x'){
                winner.push([j,i])
                xcount+=1
            }else if(mat[i][j]=='o'){
                winner.push([j,i])
                ocount+=1
            }
        }
        if(xcount==n){
            winner.splice(0,0,'x')
            winner.push('col')
            return winner
        }else if(ocount==n){
            winner.splice(0,0,'o')
            winner.push('col')
            return winner
        }else{
            winner=[]
            
        }
    }return winner
}

function checkdiag(mat){
    winner=[]
    xcount=0
    ocount=0
    for(i=0;i<n;i++){
        if(mat[i][i]=='x'){
            winner.push([i,i])
            xcount+=1
        }else if(mat[i][i]=='o'){
            winner.push([i,i])
            ocount+=1
        }
    }
    if(xcount==n){
        winner.splice(0,0,'x')
        winner.push('mdiag')
        return winner
    }else if(ocount==n){
        winner.splice(0,0,'o')
        winner.push('mdiag')
        return winner
    }else{
        winner=[]
    }

    if(isEqualArr(winner,[])){
        xcount=0
        ocount=0
        for(i=0;i<n;i++){
            if(mat[i][n-i-1]=='x'){
                winner.push([i,n-i-1])
                xcount+=1
            }else if(mat[i][n-i-1]=='o'){
                winner.push([i,n-i-1])
                ocount+=1
            }
        }
        if(xcount==n){
            winner.splice(0,0,'x')
            winner.push('sdiag')
            return winner
        }else if(ocount==n){
            winner.splice(0,0,'o')
            winner.push('sdiag')
            return winner
        }else{
            winner=[]
        }
    }
    return winner
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
