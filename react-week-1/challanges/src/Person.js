import React, { Component } from 'react';

class BasicInfo extends Component{
    render(){
        return(
                <ul>
                    {this.props.person.map(el => (
                        <div className = "personDiv">
                            <li>Name: {el.Name}</li> 
                            <li>Phone: {el.Phone}</li> 
                            <li>Date of Birth: {el.DOB}</li>
                        </div>
                    ))}
                </ul>
        )
    }
}

export default BasicInfo;