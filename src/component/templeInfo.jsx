import React from "react";
import {getTempleInfo} from "../services/fakeTempleService";

const TempleInfo = () => {
    const templeInfo = getTempleInfo();
    console.log(templeInfo);
    return (
        <React.Fragment>
            <div className="p-5">
                <section className="text-center">
                    <p className="d-inline-flex">Logo</p>
                    <h1 className="d-inline-flex p-5">{templeInfo.name}</h1>
                </section>
                <div className="row p-5">
                    <div className="col">
                        <section>
                            <h3 className="p-3">Normal Dharashan Timings</h3>
                            <ul className="list-group list-group-flush">
                                {Object.entries(templeInfo.dharashanTimes).map(item =>(
                                    <li className="list-group-item">
                                        <strong>{item[0].toUpperCase()}</strong>:{item[1]}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                    <div className="col">
                        <section>
                            <h3 className="p-3">Location</h3>
                            <span> We need API key which is billable </span>
                        </section>
                    </div>
                </div>
                <section className="p-5">
                    <h3>Special Dharashan Timings</h3>
                    <ul className="list-group list-group-flush">
                        {Object.entries(templeInfo.specialDharashanTimes).map(item =>(
                            <li className="list-group-item">
                                <strong>{item[0].toUpperCase()}</strong>:{item[1]}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="p-5">
                    <h3>About {templeInfo.name}</h3>
                    {templeInfo.description}
                </section>
            </div>
        </React.Fragment>
    );
}

export default TempleInfo;
