document.getElementById("categoria").onchange=sele_cat;

function sele_cat() {
    if (document.getElementById("categoria").value =="") {
      document.getElementById("contenido").innerHTML ="";
      return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == XMLHttpRequest.DONE){
        if(xhttp.status==200){
          document.getElementById("contenido").innerHTML = xhttp.responseText;
        }else{
          alert('Error');
        }
      }
    }
    xhttp.open("GET",carga_txt(),true);
    xhttp.send();
  
    function carga_txt(){
      if(document.getElementById("categoria").value=="1"){
        return "categorias/procesadores.txt";
      }else if(document.getElementById("categoria").value=="2"){
        return "categorias/graficas.txt";
      }else if(document.getElementById("categoria").value=="3"){
        return "categorias/ram.txt";
      }else if(document.getElementById("categoria").value=="4"){
        return "categorias/rliquidas.txt";
      }
    }
  }

let objs = [];
function agregar(codigo, nombre, precio) {
items = {
      codigo: codigo,
      nombre: nombre,
      precio
  };
objs.push(items);

  let html=""
  for (var i = 0; i < objs.length; i++) {
      html += "<hr>"
      html += "<div class='row g-3' >"
      html += "<div class='col' >"
      html += "<img src="+"'"+objs[i].codigo+"'"+">"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+objs[i].nombre+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+objs[i].precio+"</p>"
      html += "</div>"
      html += "</div>"
  }

  var cont = document.getElementById("c_c");
  cont.innerHTML = html;
}