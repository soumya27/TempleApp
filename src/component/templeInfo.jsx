import React from "react";
import {getTempleInfo} from "../services/fakeTempleService";

//todo: LOT OF CSS WORK
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
                <div className="row p-5 bg-light">
                    <div className="col">
                        <section>
                            <h3 className="p-3">Normal Dharashan Timings</h3>
                            <table className="table table-bordered">
                                <tbody>
                                    {Object.entries(templeInfo.dharashanTimes).map(item =>(
                                        <tr itemScope="row" className="bg-light">
                                            <td>{item[0].toUpperCase()} </td>
                                            <td>{item[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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

                    <table className="table table-bordered">
                        <tbody>
                        {Object.entries(templeInfo.specialDharashanTimes).map(item =>(
                            <tr itemScope="row" className="bg-light">
                                <td>{item[0].toUpperCase()} </td>
                                <td>{item[1]}</td>
                                <td className="text-center"><button className="btn btn-primary ">Book</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
                <section className="p-5 bg-light">
                    <h3>About {templeInfo.name}</h3>
                    {templeInfo.description}
                </section>
            </div>
        </React.Fragment>
    );
}

export default TempleInfo;
