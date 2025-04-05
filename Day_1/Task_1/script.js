var btn = document.querySelector('button')
var h5 = document.querySelector('h5')
var flag = 0
btn.addEventListener('click', function(){
    if(flag == 0){
        btn.innerHTML = 'Remove Friend'
        h5.innerHTML = 'Friend'
        h5.style.color = 'green'
        btn.style.backgroundColor = 'red'
        flag = 1
    }
    else{
        btn.innerHTML = 'Add Friend'
        h5.innerHTML = 'Stranger'
        h5.style.color = '#000'
        btn.style.backgroundColor = 'royalblue'
        flag = 0
    }

})