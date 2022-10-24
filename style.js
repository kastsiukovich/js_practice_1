function color(){
   let elem = document.getElementsByTagName('h1')[0];
   
   console.log(elem);
   setTimeout(() => {
      elem.style.cssText = `color: green; font-size: 50px; text-transform: uppercase`
   }, 1000);
   setTimeout(() => {
      elem.style.cssText = `color: blue`
   }, 2000)

}
color()
function newUser(){
   setTimeout(()=>{
      let user = prompt('Введите Ваше имя:', 'Roma')
      console.log(user)
      showUser(user)
   },3000)
  
}
newUser()
function showUser(newUser){
   let show_user = document.querySelectorAll('h1')[0];
   show_user.innerHTML += `<br>${newUser}`
}