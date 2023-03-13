const $=(selector)=> document.querySelector(selector)

$(".image__btn").addEventListener("click", ()=>{
  $(".aside__image").style.display= "block"
  $(".aside__text").style.display= "none"
})

$(".text__btn").addEventListener("click", ()=>{
  $(".aside__image").style.display= "none"
  $(".aside__text").style.display= "block"
})

$(".aside__button--x").addEventListener("click",()=>{
  $("aside").style.display= "none"
  //incompleta//
})

$("#url").addEventListener("input", () => {
       const urlImage = $("#url").value
       $(".main__div--center").style.width = "610px"
       $(".main__div--center").style.height = "350px"
       $(".main__div--center").style.backgroundSize = "contein"
      $(".main__div--center").style.backgroundImage = `url(${urlImage})`
   })
  
   $("#color").addEventListener("input",()=>{
    const imageBack= $("#color").value
    $(".main__div--center").style.backgroundColor=imageBack
  } )





  //no sale
$("#lighten").addEventListener("click",()=>{
    const optionValue= $("#lighten").value
  $(".main__div--center").style.mixBlendMode=`lighten(${optionValue})`
})

$("#darken").addEventListener("input",()=>{
  const optionValue= $("#darken").value
$(".main__div--center").style.backgroundBlendMode=`darken(${optionValue})`
})









//filter slide
$("#brigthness__slider").addEventListener("input", () => {
       const rangeValue = $("#brigthness__slider").value
    $(".main__div--center").style.filter = `brightness(${rangeValue}%)`
   })
   $("#opacity__slider").addEventListener("input", () => {
    const rangeValue = $("#opacity__slider").value
 $(".main__div--center").style.filter = `opacity(${rangeValue}%)`
})
$("#contrast__slider").addEventListener("input", () => {
  const rangeValue = $("#contrast__slider").value
$(".main__div--center").style.filter = `contrast(${rangeValue}%)`
})
$("#blur__slider").addEventListener("input", () => {
  const rangeValue = $("#blur__slider").value
$(".main__div--center").style.filter = `blur(${rangeValue}%)`
})
$("#grayscale__slider").addEventListener("input", () => {
  const rangeValue = $("#grayscale__slider").value
$(".main__div--center").style.filter = `grayscale(${rangeValue}%)`
})
$("#sepia__slider").addEventListener("input", () => {
  const rangeValue = $("#sepia__slider").value
$(".main__div--center").style.filter = `sepia(${rangeValue}%)`
})
$("#hue__slider").addEventListener("input", () => {
  const rangeValue = $("#hue__slider").value
$(".main__div--center").style.filter = `hue(${rangeValue}%)`
})
$("#saturate__slider").addEventListener("input", () => {
  const rangeValue = $("#saturate__slider").value
$(".main__div--center").style.filter = `saturate(${rangeValue}%)`
})
$("#invert__slider").addEventListener("input", () => {
  const rangeValue = $("#invert__slider").value
$(".main__div--center").style.filter = `invert(${rangeValue}%)`
})


//type reset??

//text form

$("#topText").addEventListener("input", ()=>{
  $(".main__top").innerText = $("#topText").value
})

$("#outTextTop").addEventListener("click", () => {
  if ($("#outTextTop").checked ){
    $(".main__blackTop").style.display="none"
    $(".main__div--center").style.height="550px"
  }
    else{
      $(".main__blackTop").style.display="block"
 }
})

$("#bottomText").addEventListener("input", ()=>{
  $(".main__bottom").innerText = $("#bottomText").value
})

$("#outTextBottom").addEventListener("click", () => {
  if ($("#outTextBottom").checked ){
    $(".main__blackBottom").style.display="none"
    $(".main__div--center").style.height="550px"
  }
    else{
      $(".main__blackBottom").style.display="block"
    }
})

//fuentes


 $("#fonts").addEventListener("input", () => {
  $(".main__top").style.fontFamily = $("#fonts").value
     $(".main__bottom").style.fontFamily = $("#fonts").value
 })

//america, andale mono, comics sanz
$("#fontValue").addEventListener("click",() =>{

})