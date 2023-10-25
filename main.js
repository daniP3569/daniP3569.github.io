let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #9b5de5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9b5de5;">Soy estudiante de Enfermeria de tercer semestre.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
