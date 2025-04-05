var box = document.querySelector('#box')
var btn = document.querySelector('button')
var flag = 0

btn.addEventListener('click', function(){
    if(flag == 0){
        box.style.borderRadius = '50%'
        btn.innerHTML = 'Make Circle'
        flag = 1
    }
    else{
        box.style.borderRadius = '10px'
        btn.innerHTML = 'Make Box'
        flag = 0
    }
    
})