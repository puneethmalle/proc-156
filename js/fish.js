AFRAME.registerComponent("fish",{
    init:function(){
        for(var i = 1;i<=10;i++){
            var id = `fishs${i}`

            var posX = (Math.random*100 + 50)
            var posY = (Math.random*5 + 5)
            var posZ = (Math.random*60 +40)

            var position = {x:posX,y:posY,z:posZ}

            this.createFish(id,position)
        }
    },
    createFish:function(id,position){
        var island = document.querySelector("#island")
        var fishy = document.createElement("a-entity")
        
        fishy.setAttribute("id",id)
        fishy.setAttribute("position",position)
        fishy.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishy.setAttribute("animation-mixer",{})
        fishy.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        fishy.setAttribute("game",{elId:`#${id}`})

        island.appendChild(fishy)
    }
})