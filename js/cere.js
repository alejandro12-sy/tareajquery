$(document).ready(function() {
    $("#MOSTRAR").click(function() {


        // alert("NOMBRE: " + $("#NOMBRE").val() + " " + "NOMBRE: " + $("#APELLIDO").val() + " " + "NOMBRE: " + $("#EDAD").val());

        $('#NOM').text("NOMBRE :" + $("#NOMBRE").val().trim());
        $('#APE').text("APELLIDO :" + $("#APELLIDO").val().trim());
        $('#EDA').text("EDAD :" + $("#EDAD").val().trim());


        // $('#1').text("NOMBRE :" + $("#NOMBRE").val());
        // $('#2').text("APELLIDO :" + $("#APELLIDO").val());
        // $('#3').text("EDAD :" + $("#EDAD").val());

        //     $("#NOMBRE").val() = NOMBRE;
        //     $("#APELLIDO").val() = APELLIDO;
        //     $("#EDAD").val() = EDAD;



        //     NOMBRE.value() = " ";
        //     APELLIDO.value() = " ";
        //     EDAD.value() = " ";
        //     NOMBRE.focus();

    });
});


// $("#MOSTRAR").click(function() {

//     " " = $("#NOMBRE").val();
//     " " = $("#APELLIDO").val();
//     " " = $("#EDAD").val();
// });















// id="NOM"></H2>
// <H2 class="" id="APE"></H2>
// <H2 class="" id="EDAD"></H2>