import React from 'react';
import './head.css' 
// import BackgroundImg from "../../assets/imagenes/head-img.png";

export const Head = () => {

    return (
        <section className="headerWeb"  >
            <div className="container" id="centrado">
                <h1 ><span className="titleHead">Pinturas Roberto Rosales</span> </h1>
                <p><b>Somo una Empresa </b>comprometida con todos tus proyectos.</p>
                <button className="btn btn-outline-dark"> Cotize Aqui...</button>
            </div>
        </section>
    )
}
