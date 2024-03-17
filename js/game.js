AFRAME.registerComponent("game",{
    schema:{
        elId:{type:"string",default:"fish"}
    },
    update:function(){
        this.isCollide(this.data.elId)
    },
    init: function () {
        var duration = 120;
        const timer = document.querySelector("#timer");
        this.startTimer(duration, timer);
      },
    
      startTimer: function (duration, timerEl) {
        var minutes;
        var seconds;
    
    
        setInterval(()=>{
          if (duration >= 0) {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
    
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
    
            timer.setAttribute("text", {
              value: minutes + ":" + seconds,
            });
    
            duration -= 1;
          } 
          else {
            this.Gameover()        
          }
        },1000)
      },
    isCollide:function(elId){
        const element = elId
        element.addEventListener("collide",()=>{
            if(elId.includes("#fishs")){
                this.Gameover
            }
            else if(elId.includes("#ring")){
                this.updateScore
                this.updateTarget
            }
        })
    },
    updateScore:function(){
        var element = document.querySelector("#Score")
        var count = element.getAttribute("text").value
        var score = parseInt(count)
        score = score+1
        element.setAttribute("text",{value:score})
    },
    updateTarget:function(){
        var element = document.querySelector("#Targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets = currentTargets-1
        element.setAttribute("text",{value:currentTargets})
    },
    Gameover:function(){
        var person = document.querySelector("##diver")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        person.setAttribute("dynamic-body",{mass:1})
    },
})