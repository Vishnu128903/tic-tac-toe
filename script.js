let activeplayer=0



let bt1=document.querySelector('.field1')
let bt2=document.querySelector('.field2')
let bt3=document.querySelector('.field3')
let bt4=document.querySelector('.field4')
let bt5=document.querySelector('.field5')
let bt6=document.querySelector('.field6')
let bt7=document.querySelector('.field7')
let bt8=document.querySelector('.field8')
let bt9=document.querySelector('.field9')



let b1=bt1.textContent
let b2=bt2.textContent
let b3=bt3.textContent
let b4=bt4.textContent
let b5=bt5.textContent
let b6=bt6.textContent
let b7=bt7.textContent
let b8=bt8.textContent
let b9=bt9.textContent

let winner=0
document.querySelector('.player1').classList.add('player-active')

function act(){
    document.querySelector('.player1').classList.toggle('player-active')
    document.querySelector('.player2').classList.toggle('player-active')
}
bt1.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt1.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt1.textContent='0';
        activeplayer=0

    }
    bt1.disabled=true
    b1=bt1.textContent    
    check()

})

bt2.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt2.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt2.textContent='0';
        activeplayer=0
    }
    bt2.disabled=true
    b2=bt2.textContent
    check()

})

bt3.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt3.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt3.textContent='0';
        activeplayer=0
    }
    bt3.disabled=true
    b3=bt3.textContent
    check()

})

bt4.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt4.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt4.textContent='0';
        activeplayer=0
    }
    bt4.disabled=true
    b4=bt4.textContent
    check()

})
bt5.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt5.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt5.textContent='0';
        activeplayer=0
    }
    bt5.disabled=true
    b5=bt5.textContent
    check()

})
bt6.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt6.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt6.textContent='0';
        activeplayer=0
    }
    bt6.disabled=true
    b6=bt6.textContent
    check()

})

bt7.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt7.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt7.textContent='0';
        activeplayer=0
    }
    bt7.disabled=true
    b7=bt7.textContent
    check()

})
bt8.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt8.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt8.textContent='0';
        activeplayer=0
    }
    bt8.disabled=true
    b8=bt8.textContent
    check()


})
bt9.addEventListener('click',function(){
    if(activeplayer==0){
        act()
        bt9.textContent='x';
        activeplayer=1
    }
    else{
        act()
        bt9.textContent='0';
        activeplayer=0
    }
    bt9.disabled=true
    b9=bt9.textContent
    check()

})


function check(){
    



if(b1=='x' && b2=='x' && b3=='x')
    {
    bt4.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt1.style.color="red"
    bt2.style.color="red"
    bt3.style.color="red"
    winner=1
    win()
    

}

else if(b1=='x' &&  b4=='x' && b7=='x')
    {
    bt2.disabled=true
    bt3.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt1.style.color="red"
    bt4.style.color="red"
    bt7.style.color="red"
    winner=1
    win()


}
else if(b1=='x' &&  b5=='x' && b9=='x')
    {
    bt2.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt1.style.color="red"
    bt5.style.color="red"
    bt9.style.color="red"
    winner=1
    win()


}
else if(b2=='x' && b5=='x' && b8=='x')
    {
    bt1.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt9.disabled=true
    bt2.style.color="red"
    bt5.style.color="red"
    bt8.style.color="red"
    winner=1
    win()


}
else if(b3=='x' &&  b6=='x' && b9=='x')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt4.disabled=true
    bt5.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt3.style.color="red"
    bt6.style.color="red"
    bt9.style.color="red"
    winner=1
    win()


}
else if(b3=='x' &&  b5=='x' && b7=='x')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt3.style.color="red"
    bt5.style.color="red"
    bt7.style.color="red"
    winner=1
    win()


}

else if(b4=='x' && b5=='x' && b6=='x')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt3.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt4.style.color="red"
    bt5.style.color="red"
    bt6.style.color="red"
    winner=1
    win()


}

else if(b7=='x' &&  b8=='x' && b9=='x')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt7.style.color="red"
    bt8.style.color="red"
    bt9.style.color="red"
    winner=1
    win()


}


else if(b1=='0' && b2=='0' && b3=='0')
    {
    bt4.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt1.style.color="red"
    bt2.style.color="red"
    bt3.style.color="red"
    winner=0
    win()


}

else if(b1=='0' &&  b4=='0' && b7=='0')
    {
    bt2.disabled=true
    bt3.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt1.style.color="red"
    bt4.style.color="red"
    bt7.style.color="red"
    winner=0
    win()


}
else if(b1=='0' &&  b5=='0' && b9=='0')
    {
    bt2.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt1.style.color="red"
    bt5.style.color="red"
    bt9.style.color="red"
    winner=0
    win()


}
else if(b2=='0' && b5=='0' && b8=='0')
    {
    bt1.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt7.disabled=true
    bt9.disabled=true
    bt2.style.color="red"
    bt5.style.color="red"
    bt8.style.color="red"
    winner=0
    win()


}
else if(b3=='0' &&  b6=='0' && b9=='0')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt4.disabled=true
    bt5.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt3.style.color="red"
    bt6.style.color="red"
    bt9.style.color="red"
    winner=0
    win()


}
else if(b3=='0' &&  b5=='0' && b7=='0')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt4.disabled=true
    bt6.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt3.style.color="red"
    bt5.style.color="red"
    bt7.style.color="red"
    winner=0
    win()


}

else if(b4=='0' && b5=='0' && b6=='0')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt3.disabled=true
    bt7.disabled=true
    bt8.disabled=true
    bt9.disabled=true
    bt4.style.color="red"
    bt5.style.color="red"
    bt6.style.color="red"
    winner=0
    win()


}

else if(b7=='0' &&  b8=='0' && b9=='0')
    {
    bt1.disabled=true
    bt2.disabled=true
    bt3.disabled=true
    bt4.disabled=true
    bt5.disabled=true
    bt6.disabled=true
    bt7.style.color="red"
    bt8.style.color="red"
    bt9.style.color="red"
    winner=0
    win()
}
else if((b1=='x'||b1=='0') && (b2=='x'||b2=='0') && (b3=='x'||b3=='0') && (b4=='x'||b4=='0') && (b5=='x'||b5=='0') && ( b6=='x'||b6=='0') && (b7=='x'||b7=='0') && (b8=='x'||b8=='0') && (b9=='0'||b9=='x')){
    tie()
}
}

function win(){
if(winner==1){
    document.querySelector('.player1').classList.add('hidden')
    document.querySelector('.player2').classList.add('hidden')
    document.querySelector('.winner-1').classList.toggle('hidden')
    console.log('x')
}
else if(winner==0){
    document.querySelector('.player1').classList.add('hidden')
    document.querySelector('.player2').classList.add('hidden')
    document.querySelector('.winner-2').classList.toggle('hidden')
    console.log('o')
}
}
function tie(){
    document.querySelector('.player1').classList.add('hidden')
    document.querySelector('.player2').classList.add('hidden')
    document.querySelector('.tied').classList.toggle('hidden') 
}



document.querySelector('.restart').addEventListener('click',function(){
    b1=b2=b3=b4=b5=b6=b7=b8=b9=''
    activeplayer=0
    location.reload()
})
