import React from 'react';
import { useState } from 'react';
import Signo from './Signo';
import logo from '../assets/zodiaco.png';

const Horoscopo = () => {
    
    const imagenes = {
        aries : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-aries.jpg",
        tauro : "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/08/5fa9264e69a2d.jpeg",
        geminis : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-geminis.jpg",
        cancer : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-cancer.jpg",
        leo : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-leo.jpg",
        virgo : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-virgo.jpg",
        libra : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-libra.jpg",
        escorpio : "https://media.a24.com/p/9a3aa472f6f3466a520215ce824bc694/adjuntos/296/imagenes/008/751/0008751562/1200x675/smart/horoscopo-escorpiopng.png",
        sagitario : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-sagitario.jpg",
        capricornio : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-capricornio.jpg",
        acuario : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-acuario.jpg",
        piscis : "https://rsc.lavanguardia.com/img/horoscopo/horoscopo-piscis.jpg"
    }

    const [signoZodiacal, setsignoZodiacal] = useState("Signo");
    const [image, setImage] = useState(logo);
    const [dias, setDias] = useState("");
    const [texto, setTexto] = useState("Selecciona la fecha de Nacimiento");

    const getCurrentDate = () => {
        let date = new Date();
        let month = date.getMonth() + 1;

        if (month < 10) {
            let aux = month;
            month = `0${aux}`;
        }

        return `${date.getFullYear()}-${month}-${date.getDate()}`;
    };

    const getHoroscopo = (e) => {
        let date = e.target.value;
        setsignoZodiacal(getZodiacSign(date));
    };


    const getZodiacSign = (date) => {
        
        //let anio = date.slice(0,4);
        let mes = parseInt(date.slice(5,7));
        let dia = parseInt(date.slice(8));
        let signo = "";

        switch (mes) {
            case 1: // Enero
                if(dia > 20){
                    signo = "Acuario";
                    setImage(imagenes.acuario);
                    setDias("21 Enero - 20 Febrero");
                    textoSigno(11);
                }
                else{
                    signo = "Capricornio";
                    setImage(imagenes.capricornio);
                    setDias("21 Diciembre - 20 Enero");
                    textoSigno(10);
                }
                break;
            case 2: // Febrero
                if(dia > 20){
                    signo = "Piscis";
                    setImage(imagenes.piscis);
                    setDias("21 Febrero - 20 Narzo");
                    textoSigno(12);
                }
                else{
                    signo = "Acuario";
                    setImage(imagenes.acuario);
                    setDias("21 Enero - 20 Febrero");
                    textoSigno(11);
                }
                break;
            case 3: // Marzo
                if(dia > 20){
                    signo = "Aries";
                    setImage(imagenes.aries);
                    setDias("21 Marzo - 20 Abril");
                    textoSigno(1);
                }
                else{
                    signo = "Piscis";
                    setImage(imagenes.piscis);
                    setDias("21 Febrero - 20 Marzo");
                    textoSigno(12);
                }
                break;
            case 4: // Abril
                if(dia > 20){
                    signo = "Tauro";
                    setImage(imagenes.tauro);
                    setDias("21 Abril - 20 Mayo");
                    textoSigno(2);
                }
                else{
                    signo = "Aries";
                    setImage(imagenes.aries);
                    setDias("21 Marzo - 20 Abril");
                    textoSigno(1);
                }
                break;
            case 5: // Mayo
                if(dia > 20){
                    signo = "Geminis";
                    setImage(imagenes.geminis);
                    setDias("21 Mayo - 20 Junio");
                    textoSigno(3);
                }
                else{
                    signo = "Tauro";
                    setImage(imagenes.tauro);
                    setDias("21 Abril - 20 Mayo");
                    textoSigno(2);
                }
                break;
            case 6: // Junio
                if(dia > 20){
                    signo = "Cancer";
                    setImage(imagenes.cancer);
                    setDias("21 Junio - 20 Julio");
                    textoSigno(4);
                }
                else{
                    signo = "Geminis";
                    setImage(imagenes.geminis);
                    setDias("21 Mayo - 20 Junio");
                    textoSigno(3);
                }
                break;
            case 7: // Julio
                if(dia > 20){
                    signo = "Leo";
                    setImage(imagenes.leo);
                    setDias("21 Julio - 20 Agosto");
                    textoSigno(5);
                }
                else{
                    signo = "Cancer";
                    setImage(imagenes.cancer);
                    setDias("21 Junio - 20Julio");
                    textoSigno(4);
                }
                break;
            case 8: // Agosto
                if(dia > 20){
                    signo = "Virgo";
                    setImage(imagenes.virgo);
                    setDias("21 Agosto - 20 Septiembre");
                    textoSigno(6);
                }
                else{
                    signo = "Leo";
                    setImage(imagenes.leo);
                    setDias("21 Jlio - 20 Agosto");
                    textoSigno(5);
                }
                break;
            case 9: // Septiembre
                if(dia > 20){
                    signo = "Libra";
                    setImage(imagenes.libra);
                    setDias("21 Septiembre - 20 Octubre");
                    textoSigno(7);
                }
                else{
                    signo = "Virgo";
                    setImage(imagenes.virgo);
                    setDias("21 Agosto - 20 Septiembre");
                    textoSigno(6);
                }
                break;
            case 10: // Octubre
                if(dia > 20){
                    signo = "Escorpio";
                    setImage(imagenes.escorpio);
                    setDias("21 Octubre - 20 Noviembre");
                    textoSigno(8);
                }
                else{
                    signo = "Libra";
                    setImage(imagenes.libra);
                    setDias("21 Septiembre - 20 Octubre");
                    textoSigno(7);
                }
                break;
            case 11: // Noviembre
                if(dia > 20){
                    signo = "Sagitario";
                    setImage(imagenes.sagitario);
                    setDias("21 Noviembre - 20 Diciembre");
                    textoSigno(9);
                }
                else{
                    signo = "Escorpio";
                    setImage(imagenes.escorpio);
                    setDias("21 Octubre - 20 Noviembre");
                    textoSigno(8);
                }
                break;
            case 12: // Diciembre
                if(dia > 20){
                    signo = "Capricornio";
                    setImage(imagenes.capricornio);
                    setDias("21 Diciembre - 20 Enero");
                    textoSigno(10);
                }
                else{
                    signo = "Sagitario";
                    setImage(imagenes.sagitario);
                    setDias("21 Noviembre - 20 Diciembre");
                    textoSigno(9);
                }
                break;
        
            default:
                signo = "Signo";
                setImage(logo);
                setDias("Error");
                break;
        }

        return signo;
        
    };

    const textoSigno = (opcion) => {
        switch (opcion) {
            case 1:// Aries
                setTexto(
                    "En astrología, Aries es el primer signo del zodíaco, el primero de naturaleza positiva / Masculina y de cualidad cardinal.​​ Pertenece junto a Leo y Sagitario al elemento fuego.​ Está regido por el planeta Marte. Su signo opuesto y complementario es Libra."
                );
                break;
            case 2 :// Tauro
                setTexto(
                    "Tauro es el segundo signo del zodiaco y el primero de cualidad fija y negativa/femenina.​​ Perteneciente a los signos fijos junto a Leo, Escorpio y Acuario.​ Su signo opuesto y complementario a la vez es Escorpio.​ "
                );
                break;
            case 3: //Geminis
                setTexto(
                    "Gemini o Géminis es el tercer signo del Zodiaco, el segundo de naturaleza positiva y de cualidad mutable. Representa la inteligencia y la comunicación. "
                    );
                break;
            case 4://Cancer
                setTexto(
                    "Cáncer es el cuarto signo del zodíaco, el segundo de naturaleza Femenina/Negativa​ y el segundo de cualidad cardinal.​ Simboliza la familia y su símbolo representa un cangrejo, pertenece junto a Escorpio y a Piscis al elemento agua.​"
                    );
                break;
            case 5: // Leo
                setTexto(
                    "Leo es el quinto signo del zodíaco, el tercero de naturaleza positiva y el segundo de cualidad fija.​​ Simboliza la fuerza de la vida y su símbolo representa la melena del león, pertenece junto a Aries y Sagitario y su elemento es fuego."
                    );
                break;
            case 6: // Virgo
                setTexto(
                    " Virgo es el sexto signo del zodíaco, el tercero de naturaleza negativa y de cualidad mutable."
                    );
                break;
            case 7: // Libra
                setTexto(
                    "Libra es el séptimo signo del zodíaco, el cuarto de naturaleza positiva y el tercero de cualidad cardinal.​​"
                    );
                break;
            case 8: // Escorpio
                setTexto(
                    " Escorpio o Escorpión es el octavo signo del zodiaco, el cuarto de naturaleza negativa y el tercero de cualidad fija."
                    );
                break;
                case 9: // Sagitario
                setTexto(
                    "Sagitario ​ es el noveno signo del zodíaco, de naturaleza positiva y de cualidad mutable.​​ Simboliza la conciencia superior, y su símbolo representa la flecha del arquero."
                    );
                break;
            case 10: // Capricornio
                setTexto(
                    " Capricornio ​ es el décimo signo del zodíaco, el quinto de naturaleza negativa y de cualidad cardinal.​​ Simboliza la sabiduría y las aguas por el dios primordial de los sumerios."
                    );
                break;
            case 11: // Acuario
                setTexto(
                    " Acuario ​ es el undécimo signo del zodiaco, el sexto de naturaleza positiva y el cuarto de cualidad fija"
                    );
                break;
            case 12: // Piscis
                setTexto(
                    "Piscis ​ es el duodécimo y último signo del zodíaco, el sexto de naturaleza negativa y de cualidad mutable.​​Simboliza la disolución y su símbolo representa dos peces nadando en sentidos opuestos."
                    );
                break;
        
            default:
                break;
        }
    }

    return (

        <div className='container-fluid'>
        <h1 className='display-1 text-center '>Horoscopo React</h1>
        <hr />

        <div className='class="row align-items-center'>
        <div className='col'>

            <form action="" id='horoscopo-form' >
                <div className='form-floating'>
                <input type="date" id='fechaNac' onChange={e => getHoroscopo(e)} className='form-control' min="1900-01-01" step="1" max={getCurrentDate()}/>
                <label htmlFor="fechaNac">Fecha</label>
                </div>
            </form>
        </div>
        </div>

        <Signo img={image} sign={signoZodiacal} dates={dias} text={texto} />
        </div>
    )
}

export default Horoscopo;