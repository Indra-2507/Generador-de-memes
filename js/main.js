//GENERAL FUNCTIONS

//They are used in differents times during the proyect

const $=(selector)=> document.querySelector(selector)

const hideElement = (element) => element.style.display="none"
const hideElement2 = (element) => element.classList.add("hidden")

const showElement = (element) => element.style.display = "block"
const showElement2 = (element) => element.classList.remove("hidden")

//MAIN FUNCTIONS

//Functions to change between section "aside__image" and "aside__text" by touching buttons

$(".image__btn").addEventListener("click", ()=>{
  showElement($(".aside__image"))
  showElement($("aside"))
  hideElement($(".aside__text"))
})

$(".text__btn").addEventListener("click", ()=>{
  showElement($(".aside__text"))
  showElement($("aside"))
  hideElement($(".aside__image"))
})

// Functions to close aside section by button, called "x button"

$(".x__image").addEventListener("click",()=>{
  hideElement($(".aside__image"))
  hideElement($(".aside__text"))
  hideElement($("aside"))
})

$(".x__text").addEventListener("click",()=>{
  hideElement($(".aside__image"))
  hideElement($(".aside__text"))
  hideElement($("aside"))
})

//Functions to change between "dark-mode" and "ligth-mode"

$("body").removeAttribute("data__theme")

hideElement( $(".ligth__btn"))

$(".dark__mode").addEventListener("click", ()=>{
  showElement( $(".ligth__btn"))
  hideElement( $(".dark__mode"))
  $("body").setAttribute("data__theme", "ligth__mode")
})

$(".ligth__btn").addEventListener("click",()=>{
  hideElement( $(".ligth__btn"))
  showElement( $(".dark__mode"))
  $("body").removeAttribute("data__theme", "ligth__mode")
})

//Download button

const downloadMeme = () => {
  domtoimage.toBlob($('#div__mi--meme')).then((blob) => {
      saveAs(blob, 'div__mi--meme.png')
    })
}

//This function is used to hide aside in media queris 

var mql = window.matchMedia('(max-width: 1280px)');

function screenTest(e) {
  if (e.matches) {
    hideElement($("aside"))
  } else {

    showElement($("aside"))
    showElement($(".aside__image"))
  }
}
mql.addListener(screenTest);
$("#download-meme").addEventListener('click', downloadMeme)


//IMAGE ASIDE SECTION

//Function used to insert Url Image in the box
$("#url").addEventListener("input", () => {
    const urlImage = $("#url").value
    $(".main__div--center").style.backgroundImage = `url(${urlImage})`  
   })
  
//Function to change the background color of the image

$("#color").addEventListener("input",()=>{
    const imageBack= $("#color").value
    $(".main__div--center").style.backgroundColor=imageBack
  } )

//Function tu use de background blend Mode selector

$("#selectBlend").addEventListener("click", ()=>{
  $(".main__div--center").style.backgroundBlendMode= $("#selectBlend").value
})

//Function to use input type range for filters

const rangeValue=()=>{
  $(".main__div--center").style.filter= `brightness(${$("#brigthness__slider").value})
  opacity(${$("#opacity__slider").value}) contrast(${$("#contrast__slider").value}%) blur(${$("#blur__slider").value}px) grayscale(${$("#grayscale__slider").value}%) sepia(${$("#sepia__slider").value}%) hue-rotate(${$("#hue__slider").value}deg) saturate(${$("#saturate__slider").value}%) invert(${$("#invert__slider").value})` 
}

$("#brigthness__slider").addEventListener("input", rangeValue)
$("#opacity__slider").addEventListener("input",rangeValue)
$("#contrast__slider").addEventListener("input",rangeValue)
$("#blur__slider").addEventListener("input",rangeValue)
$("#grayscale__slider").addEventListener("input",rangeValue)
$("#sepia__slider").addEventListener("input",rangeValue)
$("#hue__slider").addEventListener("input",rangeValue)
$("#saturate__slider").addEventListener("input",rangeValue)
$("#invert__slider").addEventListener("input",rangeValue)


//Button for reset input type range for filters

$("#reset__button").addEventListener("click", (e)=>{
  e.preventDefault()
  $("#brigthness__slider").value="1"
  $("#opacity__slider").value="1"
  $("#contrast__slider").value="0"
  $("#blur__slider").value="0"
  $("#grayscale__slider").value="0"
  $("#sepia__slider").value="0"
  $("#hue__slider").value="0"
  $("#saturate__slider").value="0"
  $("#invert__slider").value="0"
  $(".main__div--center").style.filter= "none"
})

//TEXT ASIDE SECTION

//Functions to modify the top text and the bottom text

$("#topText").addEventListener("input", ()=>{
  $(".main__blackTop").innerText = $("#topText").value
})

$("#bottomText").addEventListener("input", ()=>{
  $(".main__blackBottom").innerText = $("#bottomText").value
})

//Functions to hide top text and bottom text, using radio buttons

$("#outTextTop").addEventListener("click", () => {
  if ($("#outTextTop").checked ){
   hideElement($(".main__blackTop"))
  }
    else{
      showElement($(".main__blackTop"))
 }
})

$("#outTextBottom").addEventListener("click", () => {
  if ($("#outTextBottom").checked ){
    $(".main__blackBottom").style.display="none"
  }else
    {
      $(".main__blackBottom").style.display="block"
    }
})

//Funtion for changing fonts style

$("#fonts").addEventListener("input", () => {
  $(".main__blackTop").style.fontFamily = $("#fonts").value
  $(".main__blackBottom").style.fontFamily = $("#fonts").value
 })

//Function for changing the font size of text

$("#fontPx").addEventListener("input",() =>{
  const fontsSize= ($("#fontPx").value)
$(".main__blackTop").style.fontSize =`${fontsSize}px`
$(".main__blackBottom").style.fontSize =`${fontsSize}px`
})

//This buttons are used tu align(left, center, rigth) the text of the image

$("#alignLeft__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.textAlign = "left"
  $(".main__blackBottom").style.textAlign ="left"
})

$("#alignCenter__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.textAlign = "center"
  $(".main__blackBottom").style.textAlign ="center"
})

$("#alignRight__btn").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.textAlign = "right"
  $(".main__blackBottom").style.textAlign ="right"
})

//This function is used to change the color of the text

$("#letterFontColor").addEventListener("input", ()=>{
  const changeFontColor= $("#letterFontColor").value
  $(".main__blackTop").style.color = changeFontColor
  $(".main__blackBottom").style.color =changeFontColor
})

//Function to change the background color of the text

$("#backFontColor").addEventListener("input",()=>{
  const changeBackColor = $("#backFontColor").value
  $(".main__blackTop").style.backgroundColor = changeBackColor
  $(".main__blackBottom").style.backgroundColor =changeBackColor
})

//Funtion to put the background of the text in transparent mode

$(" #transparentButton").addEventListener("click", ()=>{
  if ($("#transparentButton").checked){
  $(".main__blackTop").style.backgroundColor= "transparent"
  $(".main__blackTop").style.position="absolute"
  $(".main__blackBottom").style.backgroundColor= "transparent"
  $(".main__blackBottom").style.position="absolute"  
 $(".main__blackBottom").style.bottom="100px"
}else
  { $(".main__blackBottom").style.backgroundColor=  $("#backFontColor").value
    $(".main__blackTop").style.position="absolute"
    $(".main__blackTop").style.backgroundColor= $("#backFontColor").value
    $(".main__blackBottom").style.position="static"
}
  })

  $(" #transparentButton").addEventListener("click", ()=>{
    if ($("#transparentButton").checked){
    $(".main__blackTop").style.backgroundColor= "transparent"
    $(".main__blackTop").style.position="absolute"
    $(".main__blackBottom").style.backgroundColor= "transparent"
    $(".main__blackBottom").style.position="absolute" 
  }})
  

//Function to change the stroke style of the letters

$("#strokeNone").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.webkitTextStroke= "0px"
  $(".main__blackBottom").style.webkitTextStroke="0px"
})

$("#strokeLigth").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.webkitTextStroke = "1.5px white"
  $(".main__blackBottom").style.webkitTextStroke ="2px white"
})

$("#strokeDark").addEventListener("click",(e)=>{
  e.preventDefault()
  $(".main__blackTop").style.webkitTextStroke = "1.5px black"
  $(".main__blackBottom").style.webkitTextStroke ="2px black"
})

//Function to grow and decrease the space to write  

$("#paddingLetters").addEventListener("input", ()=>{
  const paddingDiv= $("#paddingLetters").value
  $(".main__blackTop").style.height= "auto"
  $(".main__blackTop").style.padding = `${paddingDiv}px` 
  $(".main__blackBottom").style.height= "auto"
  $(".main__blackBottom").style.padding =`${paddingDiv}px` 
})

//Funtion to change the line heigth selector

$("#selectLineHeigth").addEventListener("click",()=>{
  const interlineado= $("#selectLineHeigth").value
  $(".main__blackTop").style.lineHeight= `${interlineado}`
})

$("#selectLineHeigth").addEventListener("click",()=>{
  const interlineado= $("#selectLineHeigth").value
  $(".main__blackBottom").style.lineHeight= `${interlineado}`
})

//Funtion to put the background of the text in transparent mode

/*$(" #transparentButton").addEventListener("click", ()=>{
  if ($("#transparentButton").checked){
  $(".main__blackTop").style.backgroundColor= "transparent"
  $(".main__blackTop").style.position="absolute"
  $(".main__blackBottom").style.backgroundColor= "transparent"
  $(".main__blackBottom").style.position="absolute"   
} else
  { $(".main__blackBottom").style.backgroundColor=  $("#backFontColor").value
    $(".main__blackTop").style.position="absolute"
    $(".main__blackTop").style.backgroundColor= $("#backFontColor").value
    $(".main__blackBottom").style.position="absolute"
    $("#div__mi--meme").style.height="450px"
    $(".main__div--center").style.marginTop="100px"
}
  })
$(" #transparentButton").addEventListener("click", ()=>{
    if ($("#transparentButton").checked){
    $(".main__blackTop").style.backgroundColor= "transparent"
    $(".main__blackTop").style.position="absolute"
    $(".main__blackBottom").style.backgroundColor= "transparent"
    $(".main__blackBottom").style.position="absolute"
    $("#div__mi--meme").style.height="550px"   
    $(".main__div--center").style.marginTop="0px"
  }})
*/