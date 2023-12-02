function validarFormulario(formId) {
  var form = document.getElementById(formId);

  var nombre = form.querySelector("#form0").value;
  var apellidos = form.querySelector("#form1").value;
  var correo = form.querySelector("#form2").value;
  var descripcion = form.querySelector("#form3")
    ? form.querySelector("#form3").value
    : null;

  var aceptoCondiciones = form.querySelector("#form4").checked;

  if (nombre.trim() === "" || apellidos.trim() === "" || correo.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false;
  }

  if (descripcion && descripcion.trim() === "") {
    alert("Por favor, ingresa una descripción.");
    return false;
  }

  if (!aceptoCondiciones) {
    alert("Debes aceptar las condiciones para enviar el formulario.");
    return false;
  }

  alert("Formulario enviado con éxito.");
  return true;
}
