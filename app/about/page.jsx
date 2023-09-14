import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center mx-10">
      <div className="border border-white bg-white rounded-lg my-6 sm:w-1/2 drop-shadow-xl hover:border-sky-300">
        <div className="flex justify-center items-center my-10">
          <Image
            src={'/programacion.png'} 
            alt="person"
            width={200}
            height={200}
            className="bg-sky-500/100 rounded-full"
          />
        </div>
        <h1 className="font-bold text-center "> Te contare un poco sobre mi</h1>
        <p className="mt-6 mx-4 text-justify">
          Mi nombre es Lilia Padilla Arends. Tengo 27 años y soy desarrolladora full stack graduada de la escuela 
          Digital House en Argentina. Actualmente resido en la ciudad de Santa Marta, Magdalena. 
        </p>
        <p className="my-6 mx-4 text-justify">
          Tengo un año de experiencia en el mundo del desarrollo como desarrolladora front end. 
          Manejo el lenguaje JavaScript y frameworks como React, React Native y Next.js. 
          También estoy familiarizada con metodologías como SCRUM y conexiones para medir métricas, como Firebase.
          He participado en proyectos de aplicaciones publicados como Pepeganga. 
          En estos proyectos me encargué de las conexiones de Firebase y me enfoqué en la apariencia y 
          los estilos de las aplicaciones para mejorar la experiencia del usuario. 
          Además, contribuí a la comunicación entre la interfaz de usuario y los servidores, 
          gestionando las peticiones al back end, así como el control de cookies y el registro de la aplicación.
        </p>
        <p className="mb-6 mx-4 text-justify">
          Entre mis metas está continuar aprendiendo mucho en el ámbito del front end para ofrecer a los 
          usuarios una experiencia más amigable e impactante en la creación de páginas y aplicaciones. 
          También aspiro a seguir mejorando mi habilidad en el inglés hasta lograr una comunicación fluida. 
          A mediano y largo plazo, planeo involucrarme y aprender otros lenguajes de programación como python 
          y fortalecer mis habilidades en el Back end.
        </p>
        <p className="mb-6 mx-4 text-justify">
          Ser parte de AUCO podría ser un gran paso en mi carrera profesional, 
          ya que es una empresa preocupada por la experiencia y seguridad del usuario. 
          Su enfoque en proporcionar herramientas que mejoren los procesos de firmas electrónicas 
          (ofreciendo una experiencia cálida y eficiente sin demoras ni largas esperas) me motiva a 
          contribuir a esa experiencia del usuario. Me gustaría formar parte de este impacto en la 
          automatización de procesos que los clientes experimentarán al brindarles interfaces frescas, 
          comprensibles, de fácil acceso y con todas las medidas de seguridad necesarias.
        </p>
        <p className="mb-6 mx-4 text-justify">
          En particular, considero que mi experiencia en desarrollo front end y mi compromiso 
          con la creación de interfaces intuitivas y atractivas pueden ser un activo valioso para AUCO. 
          Mi capacidad para trabajar en equipo, comprender las necesidades del usuario y aplicar 
          las mejores prácticas de diseño podría contribuir significativamente al objetivo de AUCO 
          de brindar una experiencia de usuario excepcional en la generación de firmas electrónicas 
          para documentos.
        </p>
        <div className="flex justify-center items-center my-5 font-bold">
          <h1>Front End Developer</h1>
        </div>
        <div className="flex justify-center items-center mb-10">
          <Link href='https://github.com/Lilopadilla22' rel="noopener noreferrer" target="_blank">
            <Image
              src={'/github.png'} 
              alt="github"
              width={40}
              height={40}
              className="m-2"
            />
          </Link>
          <Link href='https://www.linkedin.com/in/liliapadilla/' rel="noopener noreferrer" target="_blank">
            <Image
              src={'/linkedin.png'} 
              alt="linkedin"
              width={40}
              height={40}
              className="m-2"
            />
          </Link> 
        </div>
      </div>
    </div>
  )
}
