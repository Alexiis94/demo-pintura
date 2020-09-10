import React, { useEffect, useState } from 'react'
import { CardContent } from './CardContent';
import { ServicioHogar } from '../data/Servicios'
import './card.css'


export const Card = () => {

    const [tipoTrabajo, setTipoTrabajo] = useState([])
    useEffect(() => {
       setTipoTrabajo(ServicioHogar);
    //    console.log(ServicioHogar);
    }, [])
    
    return (
        <div className="container mt-4">

            <div className="row row-cols-2">
                
                    {
                        tipoTrabajo.map(data =>(
                            <CardContent key={data.id}
                            {...data}/>
                        ))
                    }
                
           
            </div>
        </div>
    )
}
