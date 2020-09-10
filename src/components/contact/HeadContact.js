import React from "react";
import "./HeadContact.css";

export const HeadContact = () => {
  const contacto = {
    telefono: 987834116,
    email: "alexiis.95.15@gmail.com",
  };
  const { telefono, email } = contacto;

  return (

    <div className="header ">
        <div className="container ">
          <div className="row" id="rowContact">
            <div className="col-5">
              <p>Telefono: {telefono}</p>
            </div>
            <div className="col-5">
              <p>Email: {email}</p>
            </div> 
            </div>    
        </div>       
    </div>
  );
};
