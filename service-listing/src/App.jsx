import React from "react";
import ServiceCard from "./components/ServiceCard";

function App(){
    const Services=[
        {
            id:1,
            title:"Web Development",
            description:"Backend to froentend everything is done"
        },
        {
            id:2,
            title:"Ai engineer",
            description:"Model training"
        }
    ]

    return(
        <div>
            <div className="service-list">
              <h1>Services</h1>
              {Services.map((service) =>(
                <ServiceCard key={service.id} service={service}/>
              ))}
              
                
            </div>
        </div>
    )
}

export default App;