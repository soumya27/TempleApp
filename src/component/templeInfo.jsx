import React, {Component} from "react";
import {getTempleInfo} from "../services/fakeTempleService";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic291bXlhYyIsImEiOiJja2FuaWMzd20xbHp0MnBwZTV4czA2MGw5In0.4acKzO-98_k6W5NvVZFe3A';

//todo: LOT OF CSS WORK

class TempleInfo extends Component{

    state = {
        data :{
            lat: 43.0051907,
            long: -78.80825639999999,
            zoom: 18
        },
        templeInfo:""
    };

    componentDidMount() {
        const {data} = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'https://tiles.locationiq.com/v2/streets/vector.json?key=b54a9060d67f3a',
            center: [data.long,data.lat],
            zoom: data.zoom
        });
    }

    render() {
        const templeInfo = getTempleInfo();
        const mystyle = {
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        };
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
                                <div ref={el => this.mapContainer = el} className="mapContainer"  style={mystyle}/>
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
}

export default TempleInfo;
