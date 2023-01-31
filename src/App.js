import "./App.css";

//componentes jsx de function
import Nav from "./components/Nav";
import {SectionDescription, CardsPlans} from "./components/DesignPage";
import { Grid, Form } from "./components/GridForm";
import  {Page, Footer} from "./components/FormPage"

//componente de images
import Logo from "./images/logo.png";
import BakgroundVideo from './images/background.mp4'
import BackendWe from './images/backend.jpg'
import  FormImg from './images/form.jpg'

//componentes de images de grid
import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'
import img4 from './images/image4.jpg'
import img5 from './images/image5.jpg'
import img6 from './images/image6.jpg'
import img7 from './images/image7.jpg'
import img8 from './images/image8.jpg'

//componentes de iconos
import {FaFacebookSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaGooglePlusG} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'



function App() {
  return (
    <div className="App">
      <div className="container-principal">
        <header className="App-header">
          <video width='100%' src={BakgroundVideo} autoPlay loop />
          <Nav
            imgNav={Logo}
            itemHomeNav='Inicio'
            item1Nav="Sobre nosotros"
            item2Nav="Proyectos"
            item3Nav="Contacto"
            paragrafSection='Cuento con grandes habilidades y conocimientos que te sorprenderan'
            titleSection="crisodevelop desarrolladora web"
            buttonSection1="Contacto"
            buttonSection2="Ver mas"
          />
        </header>
        <SectionDescription 
          titleMain='web design' 
          paragrafMain='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt facere illo enim laboriosam consequuntur, modi consequatur mollitia quas! Mollitia, nulla numquam commodi alias corrupti sapiente recusandae pariatur iure voluptates soluta? Et soluta odit repellat pariatur quis porro excepturi expedita sequi quas veniam quam animi, repudiandae distinctio, quos iure suscipit est voluptas eos reiciendis incidunt, sapiente ex. Ut incidunt assumenda eius. Molestias blanditiis voluptatum.'
          imgMain={BackendWe} 
          />
          <section className="section-card">
            <div className="title-card">
              <h1>planes disponibles</h1>
              <div className="card-group">
              <CardsPlans
                titleCard='plan basico'
                numberCard='$400'
                paragrafCard='Ha tan solo $350 por el dia de hoy'
                itemOneCard= '-Front-end'
                itemTwoCard='-Web Responsive' 
                itemThreeoCard='-Tema de su preferencia'
                itemFourCard='-Creacion de logos'
                itemFiveCard='-Posicionar web en Google'
                buttonCard='Ingresa'
              />
              <CardsPlans
                titleCard='plan medio'
                numberCard='$800'
                paragrafCard='Ha tan solo $750 por el dia de hoy'
                itemOneCard= '-Front-end'
                itemTwoCard='-Back-end' 
                itemThreeoCard='-Web Responsive'
                itemFourCard='-Tema de su preferencia y creacion de marca'
                itemFiveCard='-Posicionar web en Google'
                buttonCard='Ingresa'
              />
              <CardsPlans
                titleCard='plan premium'
                numberCard='$900'
                paragrafCard='Ha tan solo $899.9 por el dia de hoy'
                itemOneCard= '-Front-end'
                itemTwoCard='-Back-end' 
                itemThreeoCard='-Web Responsive + Seo'
                itemFourCard='-Tema de su preferencia y creacion de marca'
                itemFiveCard='-Posicionar web en Google'
                buttonCard='Ingresa'
              />
              </div>
            </div>
          </section>
          <section>
            <Grid 
              titleGrid='nuestros proyectos'
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
              img6={img6}
              img7={img7}
              img8={img8} />
            <Form 
              titleForm='Deja tu comentario Aqui'
              labelForm1='Nombre'
              placeForm1='Ingresa tu nombre'
              labelForm2='Email'
              placeForm2='Ingresa tu email'
              labelForm3='Desear recibir noticias?'
              labelForm4='Deja tu comentario'
              placeForm3='Ingresa tu mensaje'
              buttonForm='Enviar'
              imgForm={FormImg} />
          </section>
          <div className="footer">
          <Page 
            titlePage='Creando la mejor Web' />
          <Footer
            listFooter1='Incio'
            listFooter2='Sobre nosotros'
            listFooter3='Proyectos'
            listFooter4='Contacto'
            iconFooter1={<FaFacebookSquare />}
            iconFooter2={<BsTwitter />}
            iconFooter3={<FaGooglePlusG />}
            iconFooter4={<BsInstagram />} 
            rightFooter1='Pagina web 100% responsive con React JS y Css'
            rightFooter2='Creado por MegaFrontend © 2023 - 2024' />
          </div>
      </div>
    </div>
  );
};

export default App;
