var btn = document.querySelector('button')
var imgSel1 = document.querySelector('#img1')
var imgSel2 = document.querySelector('#img2')

btn.addEventListener('click', function(){
    var img1 = imgSel1.getAttribute('src')
    var img2 = imgSel2.getAttribute('src')


    imgSel1.setAttribute('src', img2)
    imgSel2.setAttribute('src', img1)
})