var box = document.querySelector('#box')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var randomHeight = Math.floor(Math.random()*1000)+'px'
    var randomWidth = Math.floor(Math.random()*1000)+'px'

    box.style.height = randomHeight
    box.style.width = randomWidth

    setTimeout(function(){
        box.style.height = '200px'
        box.style.width = '200px'
    },3000)

})