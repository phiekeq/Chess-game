
import {renderPieces} from './renderPieces.service.js'
addEventListener('DOMContentLoaded', _ =>{
    renderPieces.piecesRender()
})

    function allowDrop(ev) {
        ev.preventDefault();
      }
window.allowDrop = allowDrop; // global

      
      function drag(ev) {
        ev.dataTransfer.setData("piece", ev.target.id);
      }
window.drag = drag; 
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("piece");
        ev.target.appendChild(document.getElementById(data));
      }
window.drop = drop; // Global



  let board = document.getElementById("chessBoard");
  const renderBoard = function() {
    let change = false;
      let backgroundColor = 'BurlyWood';
      for (let i = 0; i < 64; i++) {
          let n = i+1;
          let square = document.createElement('DIV');
          square.className = 'square';
          square.setAttribute('ondragover', 'window.allowDrop(event)')
          square.setAttribute('ondrop', 'window.drop(event)');
          square.id = 'a'+n;
          if (i % 8 === 0 || i === 0)
          {
              change = true;
          }
  
          if (!change) {
              if (backgroundColor === 'SaddleBrown'){
                  backgroundColor = 'BurlyWood';
              }
              else{
                  backgroundColor = 'SaddleBrown';
              }
          }
  
          square.style.backgroundColor = backgroundColor;
          board.appendChild(square);
          change = false;
      }
  }
  renderBoard();

