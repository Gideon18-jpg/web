
let outfit, transport, costo=0;
function enviar(){
    outfit=parseInt(document.getElementById('selector').value);
    transport = parseInt(document.getElementById("selector2").value);

        costo=outfit+transport;

    document.getElementById('res').value=costo;
    document.getElementById('precio').innerText=costo;
}