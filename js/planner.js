const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const image = new Image();
image.src = "../images/FIRST-LEGO-League-2021-09-2048x1365 (1).jpg";
let draw_color = "black";
let draw_width = 2;
let is_drawing = false;

let restore_array = [];
let index = -1;


image.onload = function () {
    const aspectRatio = image.width / image.height;
    function resizeCanvas() {
        const containerWidth = document.querySelector('.col-8').clientWidth;

        const newWidth = containerWidth
        const newHeight = newWidth / aspectRatio;
    
        canvas.width = newWidth;
        canvas.height = newHeight;
  
      context.drawImage(image, 0, 0, newWidth, newHeight);
      draw();
    }
  
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  };


function change_color(element) {
  draw_color = element.style.background;
}

function draw() {
  canvas.onmousedown = (e) => {
    is_drawing = true;
    context.beginPath();
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineJoin = "round";
    context.lineCap = "round";

    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    context.moveTo(x, y);


  };

  canvas.onmousemove = (e) => {
    if (is_drawing) {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      context.lineTo(x, y);
      context.stroke();

    }
  };

  canvas.onmouseup = function () {
    if (is_drawing) {
      is_drawing = false;
      context.closePath();
      restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
      index += 1;
      console.log(index)
    }
  };
}

function clear_canvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  restore_array = [];
  index = -1;
}

function undo_last() {
  if (index <= 0) {
    clear_canvas();
  } else {
    index -= 1;
    restore_array.pop();
    context.putImageData(restore_array[index], 0, 0);
  }
}
