import React from "react";
import {Link} from "react-router-dom";


const TempleCard = ({name,timing,image,location}) =>{
    return(
        <div className="card bg-light mb-3 ">

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link className="card-title" to="/temples">{name}</Link>
                        <p className="card-text">Timings {timing}</p>
                        <p className="card-text"><small className="text-muted">Location </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TempleCard;
