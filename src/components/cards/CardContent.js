import React from 'react'
import { Link } from 'react-router-dom'


export const CardContent = ({description_trabajo,lugar,tipo_trabajo}) => {
    
    

    return (
        <div className="col"> 
            <div className="card m-2" style={{height: 300}}>
                <div className="card-header text-center">
                    <b>{tipo_trabajo}</b>
                </div>
                <div className="card-body text-center">
                <h5 className="card-title">{lugar}</h5>
                    <p className="card-text">{description_trabajo}</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )
}
