var btn = document.querySelector('button')
var cartoon = document.querySelector('img')

btn.addEventListener('click', function(){
    // cartoon.style.position = Math.floor(Math.random()*100)
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    cartoon.style.top = x+'%'
    cartoon.style.left = y+'%'
})