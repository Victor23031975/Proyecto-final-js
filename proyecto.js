




let lista_prestamos_storaged=[];
let lista_prestamos= [];
let simulador=[];

let borde= document.getElementsByClassName(".borde")


let boton=  document.getElementById ("simular")




boton.addEventListener("click",function(){


    let cuotas= document.getElementById("cuotas")
   

    //operador ternario//
    //sweet alert y toastify//

    let cuotas_permitidas = cuotas.value >= 12 && cuotas.value <=36 ? true : false;
    

    cuotas_permitidas ? Swal.fire({
      icon: 'success',
      title: 'TU PRESTAMO ESTA A UN CLICK',
      text: 'Si estas de acuerdo con la propuesta presiona solicitar',  
     
    })   :  Toastify({

      text: "Las plazos pueden ser de 12 a 36 meses ",
      duration: 3000,
      gravity:"top",
      position:"center",
      style:{

        background :"black",
        color:"aqua",
        fontSize : "25px",
        fontFamily : "arial",


      }
      
      }).showToast().position.reload() ;        
    
     

    let monto= document.getElementById("monto")
    let interes= 0.50
    let monto_final=+monto.value+(monto.value*interes)
    let cuota=monto_final/cuotas.value
   
    let propuesta= document.getElementById("propuesta");
    let div = document.createElement("div");

    simulador.push (monto_final,cuota,monto_final/cuota)

   
    div.innerHTML=` 
    <h3>PROPUESTA</h3>
    <h5>El Monto Total de su Prestamo es $ ${monto_final} </5> <h5> El valor de su cuota es $ ${cuota} </h5>
    
    <button id="solicitar"> SOLICITAR </button>
    <button id="borrar"> BORRAR</button>
    
    `;
    propuesta.append(div)
    
//borrar//

let borrar= document.getElementById("borrar")
let mensaje= document.getElementById("mensaje")
borrar.addEventListener("click",function(){
   
location.reload()


})


//solicitar//

let solicitar = document. getElementById("solicitar");
let form= document.createElement ("form")
let fromulario= document.getElementById("formulario")
solicitar.addEventListener("click",function(){


formulario.innerHTML=`<form  id="evitar_submit">
<fieldset class="form">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="nombre_usuario" >
  
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Apellido</label>
  <input type="text" class="form-control" id="apellido_usuario" >

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email</label>
  <input type="email" class="form-control" id="email_usuario" aria-describedby="emailHelp">

</div>
<div class="mb-3">
  <label for="exampleInputDNI" class="form-label">DNI</label>
  <input type="DNI" class="form-control" id="dni_usuario">
</div>

<button  id="enviar">ENVIAR</button>
<button  id="datos_prestamo">DATOS PRESTAMO</button>

</fieldset>

</form>`

let evitar_submit= document.getElementById("evitar_submit");

evitar_submit.addEventListener("submit",function(e){

e.preventDefault();

let enviar= document.getElementById("enviar");

enviar.addEventListener("click",function(){



    let nombre_usuario= document.getElementById("nombre_usuario");
    let nombre= nombre_usuario.value
    let apellido_usuario= document.getElementById("apellido_usuario")
    let apellido= apellido_usuario.value
    let email_usuario= document.getElementById("email_usuario")
    let email= email_usuario.value
    let dni_usuario= document.getElementById("dni_usuario")
    let id_prestamo= dni_usuario.value
    monto_final=monto_final
    cuota= cuota

  
   

 

        

  })
  
})


let enviar= document.getElementById("enviar");

enviar.addEventListener("click",function(){



    let nombre_usuario= document.getElementById("nombre_usuario");
  
    let apellido_usuario= document.getElementById("apellido_usuario")
    let email_usuario= document.getElementById("email_usuario")
    let dni_usuario= document.getElementById("dni_usuario")
    let id_prestamo= dni_usuario.value;
    cuota= cuota
    


    
    let nuevo_prestamo={


      nombre:nombre_usuario.value,
      apellido:apellido_usuario.value,
      id_prestamo:dni_usuario.value,
      monto_final:monto_final,
      email:email_usuario.value,
      monto:simulador[0],
      valor_cuota:simulador[1],
      plazo:simulador[2],

    }


    

    //sweet alert//

    Swal.fire({
      icon: 'success',
      title: 'FELICITACIONES', 
      text: 'Tu credito estara disponible en 48 HS!',
      
    } )



    let nuevo_prestamo_json= JSON.stringify(nuevo_prestamo);

    lista_prestamos.push(nuevo_prestamo);
    lista_prestamos_storaged.push(nuevo_prestamo_json)
    
    localStorage.setItem(id_prestamo,lista_prestamos_storaged)
 

  })


  


let datos_prestamo = document.getElementById("datos_prestamo")

datos_prestamo.addEventListener("click",function(){

let contenedor = document.getElementById("contenedor") 



contenedor.innerHTML = `
<div class="contenedor">
<h1>DATOS DEL PRESTAMO</h1>
<h3>PRESTAMO: ${lista_prestamos [0].id_prestamo }</h2>
<h3>NOMBRE: ${lista_prestamos [0].nombre}</h3>
<h3>APELLIDO: ${lista_prestamos [0].apellido}</h3>
<h3>MONTO TOTAL $ ${lista_prestamos [0].monto} </h4>
<h3>CUOTA $ ${lista_prestamos[0].valor_cuota}</h5>
<h3>PLAZO ${lista_prestamos[0].plazo} MESES</h6>

<button  id="finalizar">FINALIZAR</button>

</div>

`


let finalizar= document.getElementById ("finalizar")
finalizar.addEventListener ("click",function(){


location.reload()



}) 

})
})
})

//buscar prestamo//


let buscar= document.getElementById("boton_dos")

buscar.addEventListener("click",function(){

  let prestamo= document.getElementById("prestamo")
  

  let recuperar_prestamo= localStorage.getItem(prestamo.value)
  recuperar_prestamo=JSON.parse(recuperar_prestamo)
   
let prestamo_correcto = recuperar_prestamo==null ? true:false

prestamo_correcto ? Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'El nùmero ingresado es incorrecto!',
  
}):



inicio.innerHTML=`
  
  
<h1>DATOS DE TU PRESTAMO</h1>
<h3>PRESTAMO: ${recuperar_prestamo.id_prestamo }</h2>
<h3>NOMBRE: ${recuperar_prestamo.nombre}</h3>
<h3>APELLIDO: ${recuperar_prestamo.apellido}</h3>
<h3>MONTO TOTAL $ ${recuperar_prestamo.monto_final} </h4>
<h3>CUOTA $ ${recuperar_prestamo.valor_cuota}</h5>
<h3>PLAZO ${recuperar_prestamo.plazo} MESES</h6> 
<button  id="terminar">FINALIZAR</button>  
<button  id="pagar">PAGAR</button>

<div id="cuotas_a_pagar"></div>
<div id="importe_a_pagar"></div>

<div id="prestamo_actualizado"></div>
    
  `




let finalizar= document.getElementById ("terminar")

finalizar.addEventListener ("click",function(){


location.reload()


})

//pagos//

let pagar = document.getElementById ("pagar")

pagar.addEventListener("click",function(){

  let {valor_cuota}= recuperar_prestamo

  cuotas_a_pagar.innerHTML=`


  <h3>Ingrese cantidad cuotas a pagar</h3>
  <input id="pagos" > `

let pagos = document.getElementById ("pagos")
pagos.addEventListener ("change",function(){

let importe= pagos.value*valor_cuota

importe_a_pagar.innerHTML=`
<div class="pagos">
<h3>El importe a pagar es $  ${importe}</h3>
<button type="submit" id="aceptar">PAGAR</button>
<button type="submit" id="finalizar">FINALIZAR</button>
</div>

`
if (recuperar_prestamo.monto_final==0){

  location.reload()



}



let aceptar= document.getElementById("aceptar")
aceptar.addEventListener ("click",function(){

recuperar_prestamo.plazo=recuperar_prestamo.plazo-pagos.value
let monto_restante= recuperar_prestamo.monto-importe

let {id_prestamo}=recuperar_prestamo


nuevo_prestamo={


  nombre:recuperar_prestamo.nombre,
  apellido:recuperar_prestamo.apellido,
  id_prestamo:recuperar_prestamo.id_prestamo,
  
  monto_final:recuperar_prestamo.valor_cuota*recuperar_prestamo.plazo,
  email:recuperar_prestamo.email,
  valor_cuota:recuperar_prestamo.valor_cuota,
  plazo:recuperar_prestamo.plazo,

}


let fin_prestamo= recuperar_prestamo.plazo!=0? true:false;

fin_prestamo ? 
prestamo_actualizado.innerHTML=`
<div class="pagos">
<h3>Restan  ${recuperar_prestamo.plazo} cuotas</h3>
</div>
`
:


Swal.fire({
  icon: 'success',
  title: 'TU PRESTAMO HA SIDO CANCELADO',
  

  
 
})


let nuevo_prestamo_json= JSON.stringify(nuevo_prestamo);

lista_prestamos.push(nuevo_prestamo);

lista_prestamos_storaged.push(nuevo_prestamo_json)

localStorage.setItem(id_prestamo,lista_prestamos_storaged)

let finalizar= document.getElementById ("finalizar")

finalizar.addEventListener ("click",function(){


location.reload()


})



})

})


})



})

//fetch//









fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&lang=es&units=metric&appid=d1739a9ea41d5fe8d96880eebd272709")

.then (response => response.json())
.then (data =>{console.log (data)
    console.log (data.name,"temp",data.main.temp_max, data.weather[0].description,data.sys.country)

    let clima= document.getElementById("clima")
    let div= document.createElement("div")
    
    let hora = new Date();

    console.log(hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds())



    div.innerHTML= `        
                                                                            
    <div class="clima">                                                                                             <span>PAIS: ${data.sys.country}</span>
                           <span>CIUDAD: ${data.name}</span>
                           <span> TEMPERATURA: ${data.main.temp} grados      </span>
                           <p> HORA ACTUAL: ${hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds()}</p>

    
    
    
    </div>
    
    `
    clima.append(div)


    
    

      






     
   



   

}  )




