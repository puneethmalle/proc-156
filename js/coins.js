AFRAME.registerComponent("ring",{
    init:function(){
        for(var i = 1;i<=10;i++){
            var id = `ring${i}`

            var posX = (Math.random*100 + 50)
            var posY = (Math.random*5 + 5)
            var posZ = (Math.random*60 +40)

            var position = {x:posX,y:posY,z:posZ}

            this.createRing(id,position)
        }
    },
    createRing:function(id,position){
        var island = document.querySelector("#treasure")
        var ring = document.createElement("a-entity")
        
        ring.setAttribute("id",id)
        ring.setAttribute("position",position)
        ring.setAttribute("geometry",{primitive:"torus",radius:2})
        ring.setAttribute("animation-mixer",{})
        ring.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
        ring.setAttribute("game",{elId:`#${id}`})

        island.appendChild(ring)
    }
})