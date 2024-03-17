AFRAME.registerComponent("diver-move", {
    schema: {
      rot: { type: "number", default: 0 },
      pos: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {

       this.data.rot = this.el.getAttribute("rotation")     
        this.data.pos = this.el.getAttribute("position")
        var diver_Rotation = this.data.rot    
        var diver_Position = this.data.pos

        if (e.key === "ArrowRight") {
          if (diver_Rotation.x < 10) {
            diver_Rotation.x += 0.5;
            this.el.setAttribute("rotation", diver_Rotation)
          }
        }
        if (e.key === "ArrowLeft") {
          if (diver_Rotation.x > -10) {
            diver_Rotation.x -= 0.5;
            this.el.setAttribute("rotation", diver_Rotation)
          }
        }
        if (e.key === "ArrowUp") {
          if (diver_Rotation.z < 20) {
            diver_Rotation.z += 0.5;
            this.el.setAttribute("rotation", diver_Rotation)
          }
          if (diver_Position.y < 2) {
            diver_Position.y += 0.01;
            this.el.setAttribute("position", diver_Position)
          }
        }
        if (e.key === "ArrowDown") {
          if (diver_Rotation.z > -10) {
            diver_Rotation.z -= 0.5;
            this.el.setAttribute("rotation", diver_Rotation)
          }
          if (diver_Position.y > -2) {
            diver_Position.y -= 0.01;
            this.el.setAttribute("position", diver_Position)
          }
        }
      });
    }
  });

AFRAME.registerComponent("ground-move", {
    schema: {
        speedOfRotation: { type: "number", default: 0 }    
      },
      init: function () {
        window.addEventListener("keydown", (e) => {
          if (e.key === "ArrowLeft") {
            if (this.data.speedOfRotation < 0.1) {
              this.data.speedOfRotation += 0.01;
            }
          }
          if (e.key === "ArrowRight") {
            if (this.data.speedOfRotation > -0.1) {
              this.data.speedOfRotation -= 0.01;
            }
          }
        });
      },
      tick: function () {
        var mapRotation = this.el.getAttribute("rotation");
    
        mapRotation.y += this.data.speedOfRotation;
    
        this.el.setAttribute("rotation", {
          x: mapRotation.x,
          y: mapRotation.y,
          z: mapRotation.z
        });
      }
    });
  