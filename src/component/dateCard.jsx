import React, {Component} from "react";

class DateCard extends Component{

    state = {
        date: new Date()
    }

    months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];

    render() {
        const date = this.state.date;
        return (
            <div className="card text-white bg-secondary mb-3" >
                <div className="row">
                    <div className="col text-center">
                        <div className="display-3">{date.getDate()}</div>
                        <div className="display-4">{ this.months[date.getMonth()]}</div>
                    </div>
                    <div className="col justify-content-center align-self-center">
                        <p className="card-text">Some text.</p>
                        {/*todo Time should change */}
                        <p className="card-text">Time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DateCard;
