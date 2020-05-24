import React, {Component} from "react";
import TempleCard from "./templeCard";
import DateCard from "./dateCard";
import {getAllTemples} from "../services/fakeTempleService";

class MainPage extends Component{
    state = {
        username: "Soumya Cherukupalli",
        location: "",
        list: []
    }

    componentDidMount() {
        this.setState({location : "Mahalingapuram"});
        this.setState({list: getAllTemples()});
    }

    render() {
        const mystyle = {
            marginTop: "3%",
            marginBottom: "0",
        };
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid" style={mystyle}>
                    <div className="container" style={{ marginLeft:"0"}}>
                        <h1 className="display-6">Welcome, {this.state.username}</h1>
                        <p className="lead">Current Location : {this.state.location}</p>
                    </div>
                </div>
                <DateCard/>
                <div className="container p-5">
                    <h4 className="text-center">Temples near you </h4>
                    {this.state.list.map(temple =>(
                        <TempleCard key={temple._id} name={temple.name} timing={temple.dharashanTimes.evening}/>
                        ))}
                </div>

            </React.Fragment>
        );
    }
}

export default MainPage;
