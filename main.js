const templates={
  home:` 
  <div id="home" class="active">
    <div class='titulo'>
    <h1>{{titulo}}</h1>
    <h2>{{parrafo1}}</h2>
    <h3>{{parrafo2}}</h3>
    </div>
    <div class="burbujas">
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
      <div class="burbuja"></div>
    </div>
  </div>`,
  intro:
 `<div id="intro" class="active">
<section class="Intro">

    <p>Estoy buscando mi primera oportunidad de trabajo en el entorno IT.    
    </p> 
    <p>De mi puedo decir que soy muy sociable y tengo buena comunicación con mis compañeros, me gusta trabajar en equipo y
    siempre estoy dispuesta a ayudar a quien lo solicite. <br>
    Considero que el mundo del desarrollo es ideal para mi, me entusiasma afrontar nuevos retos y aprender nuevas tecnologías. <br>
    Y por sobre todo, me apasiona resolver problemas ya que los considero una forma de aprender. <br>
    Estoy segura de que tengo mucho para dar y mucho más por conocer. <br>
    Mi motivación principal es convertirme en una gran profesional, por eso espero que las experiencias y <br>
    habilidades que les ofrezco se adapten a lo que ustedes necesitan para poder continuar creciendo profesionalmente en su equipo.
    </p>
    <p>Siempre en busqueda de perfeccionarme, soy una persona autodidacta, actualmente estoy terminando el curso de Oracle OneNextEducation, y conclui satisfactoriamente los cursos de Codo a Codo Inicial y Full Stack.</p>
    <a class="descarga" href="./Maria Veronica Trias Curriculum Vitae.pdf" download="Maria Veronica Trias Curriculum Vitae">Descagar CV</a><!--Poder descargar el cv-->
</section>
</div>`,
skills:`
<div id="skills" class="active">
<section class="skill" ><!--Skills q manejo-->
<article>
 <h3 class="tituloSkill">Mis Skills</h3>
  <div class="icono">    
    <i class="fa-brands fa-html5"></i>
     <i class="fa-brands fa-css3-alt"></i>
     <i class="fa-brands fa-js"></i>
     <i class="fa-brands fa-bootstrap"></i>
     <i class="fa-brands fa-vuejs"></i>
     <i class="fa-brands fa-python"></i>
     <img src="./imagenes/django.png" alt="Django" width="50px" class="django">
     <i class="fa-solid fa-flask"></i> 
     <i class="fas fa-database"></i>
     <i class="fab fa-aws"></i>
     <i class="fab fa-github"></i>
  </div>
</article>
<article>
     <h3 class="tituloSkill">Mis Habilidades blandas</h3>
    <ul class="habilidades">
        <li>Responsabilidad</li>
        <li>Empatia</li>
        <li>Escucha activa</li>
        <li>Trabajo en equipo</li>
        <li>Adaptacion al cambio</li>
        <li>Resolucion de problemas</li>
        <li>Poder dar respuestas rapidas y asertivas</li> 
        <li>Capacidad de analisis</li>
    </ul>       
 </article>
</section>
</div>`,
trabajos:`
<div id="trabajos" class="active">
  <h2 class="Porfolio">Mis Trabajos</h2>
  <a href="#"name="Portfolio"></a>
  
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./imagenes/yerbaMate.png" alt="...">
      <div class="carousel-caption">
        <h5 class= "tituloT">Yerba Mate</h5>
        <p class="parrafoT">Primer proyecto creado para el curso Codo a Codo, se trata de una pagina realizada en HTML5, CSS3, JavaScript.</p>
        <a href="https://tpo-desarrolloweb-yerbamate.netlify.app" target="_blank" class="btn btn-primary">Ver proyecto</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./imagenes/gatos.png" alt="...">
      <div class="carousel-caption d-md-block">
      <h5 class= "tituloT">Gatos</h5>
        <p class="parrafoT">Utilizando una API de gatitos, realice este pequeño proyecto con HTML5, CSS3  y JavaScript.</p>
        <a href="https://gatos-apiconjs.netlify.app" target="_blank"class="btn btn-primary">Ver proyecto</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./imagenes/pokemon.png" alt="...">
      <div class="carousel-caption d-md-block">
        <h5 class= "tituloT">Pokemon</h5>
        <p class="parrafoT">Utilizando una API de pokemon, realice este pequeño proyecto con HTML5, CSS3  y JavaScript.</p>
        <a href="https://pokemonwithvuejs.netlify.app" target="_blank" class="btn btn-primary">Ver proyecto</a> 
      </div>
    </div>
    <div class="carousel-item">
      <img src="./imagenes/spaYerbaMate.png"  alt="...">
      <div class="carousel-caption d-md-block">
        <h5 class= "tituloT">SPA yerba mate</h5>
        <p class="parrafoT">Utilizando una API de gatitos, realice este pequeño proyecto con HTML5, CSS3  y JavaScript.</p>
        <a href="https://yerbamatewithvuejs.netlify.app" target="_blank" class="btn btn-primary">Ver proyecto</a> 
      </div>
    </div>
    <div class="carousel-item">
      <img src="./imagenes/encriptador.png" alt="...">
      <div class="carousel-caption d-md-block">
      <h5 class= "tituloT">Encriptador</h5>
        <p class="parrafoT">Pequeño proyecto con HTML5, CSS3  y JavaScript que forma parte del primer challenge del curso de One Next Education.</p>
        <a href="https://github.com/VeroRamm/encriptador.git" target="_blank"class="btn btn-primary">Ver proyecto</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./imagenes/ahorcado.png" alt="...">
      <div class="carousel-caption d-md-block">
      <h5 class= "tituloT">Juego Ahorcado</h5>
        <p class="parrafoT">Proyecto con HTML5, CSS3  y JavaScript que forma parte del segundo challenge del curso de One Next Education.</p>
        <a href="https://veroramm.github.io/juegoAhorcado/" target="_blank"class="btn btn-primary">Ver proyecto</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>`,
 contacto:`
 <div id="contacto" class="active">
 <h3>Formas de contactarme</h3>
 <section  id="contacto"class="contacto">
 <form action="https://formsubmit.co/dae75c7a94cf2a0418363ec3c306b4f1" method="POST" id="formulario" class = "formulario" @submit="checkForm">
 <input v-model= "nombre" class= "input" type="text" id="nombre" name="nombre" placeholder="Nombre">
 <input v-model = "email" class= "input" type="email" id="email" name="email" placeholder="Email">
 <textarea v-model= "mensaje" class= "inputText" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
 <input class= "boton" type="submit" value="Enviar">
 </form>
 <div class="datos">
 <h4 class="contacto-icon">
 <a href=""><i class="fa-brands fa-whatsapp-square"></i>11- 66531806</a><br>
 <a href="mailto:vero.ramm@gmail.com"><i class="fa-solid fa-envelope"></i>vero.ramm@gmail.com</a>
 </h4>
 <div class="contacto-icon">
    <a href="https://www.facebook.com/Vero.Ramm1514"><i class="fa-brands fa-facebook"></i> </a>
    <a href="https://www.instagram.com/veronicarammstein/?hl=es-la"><i class="fa-brands fa-instagram-square"></i> </a>
    <a href="https://github.com/VeroRamm"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/maria-veronica-trias"><i class="fa-brands fa-linkedin"></i></a>
</div>
</div>
</section>
</div>`,
 };  

const app = new Vue({
  el: '#app',
  data: {
          view: 'home',
          },
          components: {
            home :{
              data: function(){
                return {
                  titulo: 'Bienvenidos',
                  parrafo1: 'Me llamo Veronica, soy desarrolladora Full Stack en formacion.',
                  parrafo2: 'En este portafolio van a ver como fue mejorando mi trabajo con cada nuevo proyecto que emprendi.',
                  view:'home'
                }
              },
              template: templates.home,
            },
              intro:{
                  data: function(){
                      return {
                          view: 'intro'
                      }
                  },
                  template: templates.intro,
              },
              skills:{
                  data: function(){
                      return {
                          view: 'skills'
                      }
                  },
                  template: templates.skills,
              },
              trabajos:{
                data: function(){
                    return {
                        view: 'trabajos',
                      }
                },
                template: templates.trabajos,
                },
              
              contacto:{
                  data: function(){
                      return {
                          view: 'contacto'
                      }
                  },
                  template: templates.contacto,
                  methods: {
                    checkForm: function(e){
                        e.preventDefault();
                        if(this.nombre == '' || this.email == '' || this.mensaje == ''){
                            alert('Por favor complete todos los campos');
                        }else{
                            alert('Mensaje enviado');
                            location.href = "http://127.0.0.1:5500/index.html"
                            
                        }

                    }}
        },
          },
          methods: {
              changeView(view){
                  this.view = view
              },
          }
        
      });