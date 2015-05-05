
var funcion2=function(jQuery){
	$("#botonEnviar").on('click', function() {
		var nombre = $("#inputNombre").val();
		var email = $("#inputEmail3").val();
		var telefono = $("#inputTelefono").val();
		var comentario = $("#inputComentario").val();
		var estado=true;
		
		nombre=nombre.trim();
		if(nombre===""){
			$("#nombre").removeClass("has-error has-feedback");
			$("#inputError2Status").remove();
			$("#estadoN").remove();
			$("#nombre").addClass("has-error has-feedback");
			$("#inputNombre").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" id=\"estadoN\"></span><span id=\"inputError2Status\" class=\"sr-only\">(error)</span>");
			estado=false;
		}else{
			$("#nombre").removeClass("has-error has-feedback");
			$("#inputError2Status").remove();
			$("#estadoN").remove();
			$("#nombre").addClass("has-success has-feedback");
			$("#inputNombre").after("<span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" id=\"estadoNT\"></span><span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>");
			$("#inputNombre").attr("disabled","true");
		}
		
		email=email.trim();
		if(email.indexOf("@") <= -1){
			$("#email").removeClass("has-error has-feedback");
			$("#inputError2StatusE").remove();
			$("#estadoE").remove();
			$("#email").addClass("has-error has-feedback");
			$("#inputEmail3").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" id=\"estadoE\"></span><span id=\"inputError2StatusE\" class=\"sr-only\">(error)</span>");
			estado=false;
		}else{
			if(email===""){
				$("#email").removeClass("has-error has-feedback");
				$("#inputError2StatusE").remove();
				$("#estadoE").remove();
				$("#email").addClass("has-error has-feedback");
				$("#inputEmail3").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" id=\"estadoE\"></span><span id=\"inputError2StatusE\" class=\"sr-only\">(error)</span>");
				estado=false;
			}else{
				$("#email").removeClass("has-error has-feedback");
				$("#inputError2StatusE").remove();
				$("#estadoE").remove();
				$("#email").addClass("has-success has-feedback");
				$("#inputEmail3").after("<span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" id=\"estadoET\"></span><span id=\"inputSuccess2StatusE\" class=\"sr-only\">(success)</span>");
				$("#inputEmail3").attr("disabled","true");
			}
		}
		
		telefono=telefono.trim();
		if(telefono===""){
			$("#telefono").removeClass("has-error has-feedback");
			$("#inputError2StatusT").remove();
			$("#estadoT").remove();
			$("#telefono").addClass("has-error has-feedback");
			$("#inputTelefono").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" id=\"estadoT\"></span><span id=\"inputError2StatusT\" class=\"sr-only\">(error)</span>");
			estado=false;
		}else{
			$("#telefono").removeClass("has-error has-feedback");
			$("#inputError2StatusT").remove();
			$("#estadoT").remove();
			$("#telefono").addClass("has-success has-feedback");
			$("#inputTelefono").after("<span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" id=\"estadoTT\"></span><span id=\"inputSuccess2StatusT\" class=\"sr-only\">(success)</span>");
			$("#inputTelefono").attr("disabled","true");
		}
		
		comentario=comentario.trim();
		if(comentario===""){
			$("#comentario").removeClass("has-error has-feedback");
			$("#inputError2StatusC").remove();
			$("#estadoC").remove();
			$("#comentario").addClass("has-error has-feedback");
			$("#inputComentario").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\" id=\"estadoC\"></span><span id=\"inputError2StatusC\" class=\"sr-only\">(error)</span>");
			estado=false;
		}else{
			$("#comentario").removeClass("has-error has-feedback");
			$("#inputError2StatusC").remove();
			$("#estadoC").remove();
			$("#comentario").addClass("has-success has-feedback");
			$("#inputComentario").after("<span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\" id=\"estadoCT\"></span><span id=\"inputSuccess2StatusC\" class=\"sr-only\">(success)</span>");
			$("#inputComentario").attr("disabled","true");
		}
		
		if(!estado){
			$("#alerta").removeClass("alert alert-danger");
			$("#alerta").addClass("alert alert-danger");
			$("#mensaje").remove();
			$("#alerta").append("<p id=\"mensaje\">Complete todos los campos marcados con una \"Equis\" (X) antes de enviar el formulario.</p>");
		}else{
			$("#alerta").removeClass("alert alert-danger");
			$("#alerta").addClass("alert alert-success");
			$("#mensaje").remove();
			$("#alerta").append("<p id=\"mensaje\">Informaci&oacute;n enviada.</p>");
			//Nombre
			$("#inputSuccess2Status").remove();
			$("#inputError2Status").remove();
			$("#estadoNT").remove();
			$("#estadoN").remove();
			//Email
			$("#inputSuccess2StatusE").remove();
			$("#inputError2StatusE").remove();
			$("#estadoE").remove();
			$("#estadoET").remove();
			//Telefono
			$("#inputSuccess2StatusT").remove();
			$("#inputError2StatusT").remove();
			$("#estadoT").remove();
			$("#estadoTT").remove();
			//Comentario
			$("#inputSuccess2StatusC").remove();
			$("#inputError2StatusC").remove();
			$("#estadoC").remove();
			$("#estadoCT").remove();
			
			$("#inputEmail3").removeAttr("disabled");
			$("#email").removeClass("has-success has-feedback");
			$("#inputNombre").removeAttr("disabled");
			$("#nombre").removeClass("has-success has-feedback");
			$("#inputTelefono").removeAttr("disabled");
			$("#telefono").removeClass("has-success has-feedback");
			$("#inputComentario").removeAttr("disabled");
			$("#comentario").removeClass("has-success has-feedback");
			
		}
		return false;
	});
}

var funcion1 = function(){
	funcion2();
	$("#inputTelefono").on('keydown', function(event) {
		if(event.shiftKey){
			event.preventDefault();
		}
		
		if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9){
		} else {
		
			if (event.keyCode < 95) {
				if (event.keyCode < 48 || event.keyCode > 57) {
					event.preventDefault();
				}
			} else {
				if (event.keyCode < 96 || event.keyCode > 105) {
					event.preventDefault();
				}
			}
		}
   });
}



$( document ).ready(funcion1);
