// console.log("Helo welcome to the advanced class")




// let obj={
//     name:"Devendra",
//     location:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     location:"Gurgaon",
//     age:23
// }

// obj.age=66
// console.log(obj)

// const para=document.querySelector("p")
// para.textContent="this is updated one"
// // console.log(para)

// console.info(document)

// let obj={
//     name:"Devendra",
//     phone:65754645644,
//     address:"GGN"
// }

// let obj2={
//     name:"Alex",
//     phone:65754645644,
//     address:"GGN"
// }

// obj2.name="Bob"
// console.log(obj2.name)

// const para=document.getElementById('para')
// // para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)

// const para=document.getElementById('para')
// // para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)// const para=document.getElementById('para')

// const para=document.getElementsByClassName('para')
// para[0].textContent="This is now updated paragraph"
// para[1].style.color="green"
// console.log(para)
// para.forEach((ele)=>console.log(ele.textContent))

// const para2=document.querySelectorAll('.para')
// para2[0].textContent="This is now updated paragraph"
// para2[1].style.color="green"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContent))


// const para=document.querySelector('.para')
// para.textContent="This is now updated paragraph"
// para.style.color="green"
// console.log(para)


// let arr=[12,4,65,3,324,56]

// arr.forEach((ele)=>console.log(ele))

// const para2=document.querySelectorAll('.para')
// para2[0].innerText="This is now updated paragraph" //does not work on hidden text
// para2[0].textContent="This is now updated paragraph"
// para2[1].style.color="green"
// para2[1].innerHTML="<div><b>Hello</b> World</div>"
// console.log(para2)


// const button=document.querySelector('button')

// button.classList.add('btn')
// // button.classList.remove('btn')
// // button.classList.toggle('btn')

// function message(event){
//     console.log(event)
//     alert("You have clicked the button")
// }
// button.addEventListener('click',message)
// button.removeEventListener('click',message)

// const button=document.querySelector('#btn')
// const button2=document.querySelector('#stop')

// button.addEventListener('click',message)

// button2.addEventListener('click',function(){
//     button.removeEventListener('click',message)
// })


// const btn=document.querySelector("#btn")
// btn.addEventListener('keydown',function(event){
//     console.log(event.key)
// })

// btn.addEventListener('keyup',function(event){
//     console.log(event.key)
// })

// const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log("Form submitted")
// }

// const form=document.querySelector('form')
// form.addEventListener('submit',handleSubmit)

// console.log("Updated Code")

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")

// btn.addEventListener("click",function(){ console.log("button")},true)
// div.addEventListener("click",function(){ console.log("Div")},true)
// div2.addEventListener("click",function(){ console.log("Div2")},true)

// debugger
// console.log(a)
// // console.log(b)

// var a=78  //part of global scope
// let b=345  //stored in script scope

// console.log(a)
// console.log(b)


// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside fn")
// }

// print()
// debugger
// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()


// function infinite(){
//     infinite()
// }
// infinite()


// console.log(a)
// console.log(b)
// console.log(c)

// let a=345
// var b=567

// let total=100

// function calculate(){
//     console.log(total)
//     var total=100
// }
// calculate()


// console.log("First Line")
// setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// console.log("Second Line")


// setTimeout(()=>{
//     alert("Alert after 3 sec!!")
// },3*1000)

// const timerId=setInterval(()=>{
//     console.log("Hello students!")
// },1000) 

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)

// let count=1;

// const id=setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count+=1
// },1000)


// console.log("First Line")
// const id=setTimeout(()=>{
//     console.log("After 2 sec")
// },2000)
// clearTimeout(id)
// console.log("Second Line")
