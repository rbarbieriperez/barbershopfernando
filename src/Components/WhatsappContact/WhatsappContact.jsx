import React, {useState, useEffect} from "react";
import whatsapp from './Images/whatsapp.png'
import './WhatsappContact.css'

export const  WhatsappContact = () => {
    
    const [isVisible, updateVisible] = useState(false);
    const [animation, updateAnimation] = useState("")


    const HasScrolled = () => {
        if(document.documentElement.scrollTop > 0){
            updateVisible(isVisible => true)
            updateAnimation(animation => "animation-appearing")
        } else {
            updateAnimation(animation => "disappearing-appearing")
            updateVisible(isVisible => false)
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => HasScrolled())
    })
    
    
    return(

        isVisible == true ?
        <React.Fragment>
            <article id="contact-article" className= {animation}>
                <div id="image-container-whatsapp">
                    <img src={whatsapp} alt="Contacto vía Whatsapp" id="whatsapp-image"/>
                </div>
                <div id="parrafo-container"> 
                     <p id="parrafo">¡Reserva tu turno por Whatsapp ahora mismo!</p>
                </div>
            </article>
        </React.Fragment>
        : null
    );
}



export default WhatsappContact;