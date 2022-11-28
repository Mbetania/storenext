import { FC } from "react";
import { navbarcomponent } from "./types/navbar.types";

export const NavBar:FC<navbarcomponent> = ({storeName}) =>{
    return(
        <nav>
            <h2>Hellow 
                <span data-testid='storeName'>{storeName || 'cargando..'}</span>
            </h2>
            <p></p>
        </nav>
    )
}