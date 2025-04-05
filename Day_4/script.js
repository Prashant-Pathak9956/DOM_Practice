var btn = document.querySelector('button')
var h4 = document.querySelector('h4')
var flag = 0
btn.addEventListener('click', function(){
   if(flag === 0){
    h4.innerHTML = 'Request Sending...'
    btn.innerHTML = 'Adding Friend'
    btn.style.backgroundColor = 'gold'
    h4.style.color = 'gold'
    setTimeout(function(){
        h4.innerHTML = 'Friends'
        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'red'
        h4.style.color = 'green'
        flag = 1

    }, 3000)
   }
   else{
    flag = 0
    h4.innerHTML = 'Removing Friend...'
    btn.innerHTML = 'Add Friend'
    setTimeout(function(){
        h4.innerHTML = 'Stranger'
        btn.innerHTML = 'Add Friend'
        btn.style.backgroundColor = 'royalblue'
        h4.style.color = 'red'

    }, 3000)
   }
})