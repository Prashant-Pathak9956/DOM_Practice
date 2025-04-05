var arr = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1590399830217-8db7489f911e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHwxfDB8fHww",
  'https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZSUyMG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D'
];


var imgBox = document.querySelector('#imgChange')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
  var randomSrc = Math.floor(Math.random()*arr.length)
  imgBox.src = arr[randomSrc]
})