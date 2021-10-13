import React, {useState, userRef} from 'react';
import './information.css'
import hombrecrestaimage from './images/hombre-cresta.jpeg'

export const Information = () => {
    return(
        <React.Fragment>
                <section>
                    <div id="title-container">
                        <h1>Los mejores cortes al mejor precio</h1> 
                    </div>
                    <div id="desc-map-container">
                        <div id="text-container">
                            <p>
                                Ubicados en un punto ideal de la ciudad ofrecemos los mejores cortes al mejor precio. Siempre a la moda, ¿Te lo vas a perder?
                            </p>
                        </div>
                        <div id="image-container">
                            <img src={hombrecrestaimage} alt="Corte de hombre moderno" />
                        </div>
                        <div id="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4008.218549130705!2d-58.08742950282263!3d-32.35222102143964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95afc9584a684af7%3A0x9d092ad3242b925c!2sBarbershop%20Fernando!5e0!3m2!1ses-419!2suy!4v1634165997989!5m2!1ses-419!2suy" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>  
                    <div id="desc-container">
                        <p>
                            ¡Estamos en la ciudad de paysandú, reserva tu turno envíando llamando al <strong>098583519</strong>, o haciendo click en el cartel de envíar mensaje para contactarnos vía Whatsapp!
                        </p>
                    </div>
                </section>  
        </React.Fragment>
    );
}


export default Information;