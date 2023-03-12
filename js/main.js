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
$("#darken").addEventListener("input",()=>{
  if("#darken".checked){
  $(".main__div--center").style.backgroundMixBlendMode=$("#darken").value}
})

$("#brigthness__slider").addEventListener("input",()=>{
  const filterValue= $("#brigthness__slider").value
  $(".main__div--center").style.filter= 
filterValue
})

