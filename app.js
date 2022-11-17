$( document ).ready(function() {
   for(var i = 6; i < 65; i++) {
      $("#password-lenght").append(new Option("" + i, i));
   }

   $("#password-lenght").val(16);
});

function genPassword () {

   var result = '';
   var generatedPassword = '';
   var incNumbers = '0123456789';
   var incSymbols = '!@#$%^&*()';
   var incUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var incLowerCase = 'abcdefghijklmnopqrstuvwxyz';
   var incOtherSymbols = document.getElementById("inc-other-symbols").value;
   var passwordLenght = parseInt($("#password-lenght").val());

      if (document.getElementById('inc-numbers').checked) {
         generatedPassword = generatedPassword+incNumbers;
      }
      if (document.getElementById('inc-upercase').checked) {
         generatedPassword = generatedPassword+incUpperCase;
      }
      if (document.getElementById('inc-lowercase').checked) {
         generatedPassword = generatedPassword+incLowerCase;
      }
      if (document.getElementById('inc-symbols').checked) {
         generatedPassword = generatedPassword+incSymbols;
      }
      if (incOtherSymbols !== '') {
      generatedPassword = generatedPassword+incOtherSymbols;
      }

   var charLength = generatedPassword.length;

   for (var i = 0; i < passwordLenght; i++) {
      result += generatedPassword.charAt(Math.floor(Math.random() * charLength));
   }

   if (generatedPassword == '') {
      document.getElementById("generated-password-box").value = "Unable to create a password with 1 or fewer available characters";
   } else {
      document.getElementById("generated-password-box").value = result;
      $("#generated-password-box").select();
   }

}