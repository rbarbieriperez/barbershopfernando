import React, {useState, userRef} from 'react';
import './navbar.css'


export const Navbar = () => {

    const [ScreenYValue, UpdateNavbar] = useState("static");


     const HandleUpdateNavbar = () => {
        if (document.documentElement.scrollTop > 0){
            UpdateNavbar(ScreenYValue => "float")
        } else {
            UpdateNavbar(ScreenYValue => "static")
        }
    
    }


    return(
        ScreenYValue == "static" ? 
        <React.Fragment>
            <header>
                <section onClick={() => HandleUpdateNavbar()} id="section-navbar">
                    <div>
                        <p>BarbershopFernando</p>
                    </div>
                    <div>
                        <p>Información</p>
                        <p>Servicios</p>
                        <p>Galería</p>
                        <p>Promociones</p>
                    </div>
                </section>
            </header>
        </React.Fragment>

        :
        <React.Fragment>
            
        </React.Fragment>
    );


}

export default Navbar;

