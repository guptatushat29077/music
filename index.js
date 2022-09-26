function press(contents)
{
  switch(contents){
    case 'w': var audio=new Audio("tom-1.mp3")
            audio.play(); 
            break;
    case 'a': var audio=new Audio("tom-2.mp3")
            audio.play(); 
            break;
    case 's': var audio=new Audio("tom-3.mp3")
            audio.play(); 
            break;
    case 'd': var audio=new Audio("tom-4.mp3")
            audio.play(); 
            break;
    case 'j': var audio=new Audio("snare.mp3")
            audio.play(); 
            break;
    case 'k': var audio=new Audio("crash.mp3")
            audio.play(); 
            break;
    case 'l': var audio=new Audio("kick-bass.mp3")
            audio.play(); 
            break;

  }
}
function animation(ch)
{
  document.querySelector("."+ch).classList.add("pressed")
  setTimeout(function(){
    document.querySelector("."+ch).classList.remove("pressed")
  },100)
}
var n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      let contents = this.innerHTML;
      press(contents);
      animation(contents)
      
       
      
    });
    document.addEventListener("keypress",function(e){
      press(e.key);
      animation(e.key);
      
    });
    
}