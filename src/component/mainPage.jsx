import React, {Component} from "react";
import TempleCard from "./templeCard";
import DateCard from "./dateCard";
import {getAllTemples} from "../services/fakeTempleService";

class MainPage extends Component{
    state = {
        //todo : get username from login information
        username: "Soumya Cherukupalli",
        location: "",
        list: []
    }

    componentDidMount() {
        this.getGeoLocation();
        this.setState({list: getAllTemples()});
    }

    getGeoLocation(){
        if (navigator.geolocation){
           navigator.geolocation.getCurrentPosition(position => {
               console.log(position.coords.latitude + " , " + position.coords.longitude );
               fetch("https://us1.locationiq.com/v1/reverse.php?key=b54a9060d67f3a&" +
                   "lat="+position.coords.latitude+
                   "&lon="+position.coords.longitude+"&format=json")
                   .then(response => response.json())
                   .then(data => {
                       console.log(data);
                       this.setState({location : data["address"]["city"]});
                   });
           });
        }else {
            console.log("Doesn't support geolocation");
        }
    }

    render() {
        //todo : move inline styles

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
                    {/*todo : decide timing depending on current time*/}
                    {this.state.list.map(temple =>(
                        <TempleCard key={temple._id} name={temple.name} timing={temple.dharashanTimes.evening}/>
                        ))}
                </div>
            </React.Fragment>
        );
    }
}

export default MainPage;
