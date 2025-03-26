import React from "react";

const ServiceCard=((service)=>{
    return(
       <div className="service">
        <h3>title-{service.title}</h3>
        <p>Job Description-{service.description}</p>
        <br></br>
    </div> 
    )
    
});

export default ServiceCard;