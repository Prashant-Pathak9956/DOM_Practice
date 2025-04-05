var btn = document.querySelector('button')
var body = document.querySelector('body')

btn.addEventListener('click', function(){
    var img = document.createElement('img')
    img.setAttribute('src', 'https://e7.pngegg.com/pngimages/407/726/png-clipart-cartoon-school-cartoon-child-child-photography-thumbnail.png')
    var x = Math.random()*100
    var y = Math.random()*100
    var z = Math.random()*360
    img.style.left = x+'%'
    img.style.right = y+'%'
    img.style.rotate = z+'deg'

    body.appendChild(img)
})