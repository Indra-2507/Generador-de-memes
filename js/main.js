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
 // Put Url Image
$("#url").addEventListener("input", () => {
       const urlImage = $("#url").value
       $(".main__div--center").style.width = "610px"
       $(".main__div--center").style.height = "350px"
       $(".main__div--center").style.backgroundSize = "contein"
      $(".main__div--center").style.backgroundImage = `url(${urlImage})`
   })
  
   //Change background color
   $("#color").addEventListener("input",()=>{
    const imageBack= $("#color").value
    $(".main__div--center").style.backgroundColor=imageBack
  } )


//Blend selector
$("#selectBlend").addEventListener("click", ()=>{
  $(".main__div--center").style.backgroundBlendMode= $("#selectBlend").value
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
$(".main__div--center").style.filter = `blur(${rangeValue}px)`
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
$(".main__div--center").style.filter = `hue-rotate(${rangeValue}deg)`
})
$("#saturate__slider").addEventListener("input", () => {
  const rangeValue = $("#saturate__slider").value
$(".main__div--center").style.filter = `saturate(${rangeValue}%)`
})
$("#invert__slider").addEventListener("input", () => {
  const rangeValue = $("#invert__slider").value
$(".main__div--center").style.filter = `invert(${rangeValue})`
})


//type reset??

//text form
//Text transform
$("#topText").addEventListener("input", ()=>{
  $(".main__top").innerText = $("#topText").value
})

$("#bottomText").addEventListener("input", ()=>{
  $(".main__bottom").innerText = $("#bottomText").value
})

//Checked button
$("#outTextTop").addEventListener("click", () => {
  if ($("#outTextTop").checked ){
    $(".main__blackTop").style.display="none"
   
  }
    else{
      $(".main__blackTop").style.display="block"
     
 }
})


$("#outTextBottom").addEventListener("click", () => {
  if ($("#outTextBottom").checked ){
    $(".main__blackBottom").style.display="none"
    
  }
    else{
      $(".main__blackBottom").style.display="block"
      
    }
})

// Fonts

 $("#fonts").addEventListener("input", () => {
  $(".main__top").style.fontFamily = $("#fonts").value
     $(".main__bottom").style.fontFamily = $("#fonts").value
 })
//america, andale mono, comics sanz

//Font Size
$("#fontPx").addEventListener("input",() =>{
  const fontsSize= ($("#fontPx").value)
$(".main__top").style.fontSize =`${fontsSize}px`
$(".main__bottom").style.fontSize =`${fontsSize}px`
})

//Align buttons
$("#alignLeft__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.textAlign = "left"
$(".main__bottom").style.textAlign ="left"
})

$("#alignCenter__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.textAlign = "center"
$(".main__bottom").style.textAlign ="center"
})

$("#alignRight__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.textAlign = "right"
$(".main__bottom").style.textAlign ="right"
})

// Change font color

$("#letterFontColor").addEventListener("input", ()=>{
  const changeFontColor= $("#letterFontColor").value
  $(".main__top").style.color = changeFontColor
  $(".main__bottom").style.color =changeFontColor
})

// change backgruond div font
$("#backFontColor").addEventListener("input",()=>{
  const changeBackColor = $("#backFontColor").value
  $(".main__blackTop").style.backgroundColor = changeBackColor
  $(".main__blackBottom").style.backgroundColor =changeBackColor
})

// transparent background
//se pone transparente pero el div negro no ocupa el lugar
//el toggle no fuinciona aca
$("#transparentButton").addEventListener("click", ()=>{
  if ($("#transparentButton").checked){
  $(".main__blackTop").classList.toggle("transparent-mode")
  $(".main__blackBottom").classList.toggle("transparent-mode")}
})

//contorno texto
$("#strokeNone").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.webkitTextStroke= "0px"
  $(".main__bottom").style.webkitTextStroke="0px"
})
$("#strokeLigth").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.webkitTextStroke = "1.5px white"
  $(".main__bottom").style.webkitTextStroke ="2px white"
})
$("#strokeDark").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__top").style.webkitTextStroke = "1.5px black"
  $(".main__bottom").style.webkitTextStroke ="2px black"
})
//Space 
//tengo que achicar los divs
$("#paddingLetters").addEventListener("input", ()=>{
  const paddingDiv= $("#paddingLetters").value
  $(".main__blackTop").style.padding = `${paddingDiv}px` 
  $(".main__blackBottom").style.padding =`${paddingDiv}px` 
})


//Line heigth selector
$("#selectLineHeigth").addEventListener("click",()=>{
  const interlineado= $("#selectLineHeigth").value
  $(".main__top").style.lineHeight= `${interlineado}`
})

$("#selectLineHeigth").addEventListener("click",()=>{
  const interlineado= $("#selectLineHeigth").value
  $(".main__bottom").style.lineHeight= `${interlineado}`
})










 








