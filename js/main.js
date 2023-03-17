const $=(selector)=> document.querySelector(selector)

$(".aside__button--x").addEventListener("click",()=>{
  $("aside").style.display= "none" 
})
const hideElement = (element) => element.style.display="none"
const hideElement2 = (element) => element.classList.add("hidden")

const showElement = (element) => element.style.display = "block"
const showElement2 = (element) => element.classList.remove("hidden")


$(".image__btn").addEventListener("click", ()=>{
  $(".aside__image").style.display= "block"
  $(".aside__text").style.display= "none"
})

$(".text__btn").addEventListener("click", ()=>{
  $(".aside__image").style.display= "none"
  $(".aside__text").style.display= "block"
})

//Download button
const downloadMeme = () => {
  domtoimage.toBlob($('#mi-meme')).then((blob) => {
      saveAs(blob, 'mi-meme.png')
    })
}
$("#download-meme").addEventListener('click', downloadMeme)

//hide aside 
var mql = window.matchMedia('(max-width: 1280px)');

function screenTest(e) {
  if (e.matches) {
    hideElement($("aside"))
  } else {

    showElement($("aside"))
  }
}
mql.addListener(screenTest);

//aparecer aside cuando toco los botones
//modo oscuro
//boton de reset
//aside
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

// change background div font
$("#backFontColor").addEventListener("input",()=>{
  const changeBackColor = $("#backFontColor").value
  $(".main__blackTop").style.backgroundColor = changeBackColor
  $(".main__blackBottom").style.backgroundColor =changeBackColor
})

// Transparent background

$("#transparentButton").addEventListener("click", ()=>{
  if ($("#transparentButton").checked){
  $(".main__blackTop").style.backgroundColor= "transparent"
  $(".main__blackBottom").style.backgroundColor= "transparent"
  
}
  else{
    $(".main__blackBottom").style.backgroundColor=  $("#backFontColor").value
    $(".main__blackTop").style.backgroundColor= $("#backFontColor").value }

})

//Text Stroke
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









 








