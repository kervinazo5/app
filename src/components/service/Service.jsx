import React from "react";
import "./service.css";
import { FcServices } from "react-icons/fc";
import { MdMedicalServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";
import { MdCarRepair } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

const Service = () => {
  return (
    <section id="service">
      <h5 className="title__primary">What I Offer</h5>
      <h2 className="title">Services</h2>
      <div className="container service__container">
        <article className="service">
          <i>
            <FcServices />
          </i>
          <h2>Preventive Maintenance</h2>
          <p>
            Because it is better to be safe than sorry, you should perform
            maintenance on your vehicle periodically and you will extend the
            life of your engine.
          </p>
        </article>
        <article className="service">
          <i>
            <MdMedicalServices />
          </i>
          <h2>Corrective maintenance</h2>
          <p>
            It consists of detecting and correcting faults that may be affecting
            the normal performance of your car.
          </p>
        </article>
        <article className="service">
          <i>
            <GiAutoRepair />
          </i>
          <h2>General mechanics</h2>
          <p>
            Diagnosis whit scanner and repair of faults.</p>
            <ul>
              <li><i><BsCheckCircle/></i> Engine tuning </li>
              <li><i><BsCheckCircle/></i> Clutch replacement </li>
              <li><i><BsCheckCircle/></i> Oil change </li>
              <li><i><BsCheckCircle/></i> Transmission replacement and repair </li>
              <li><i><BsCheckCircle/></i> Cooling system maintenance</li>
              <li><i><BsCheckCircle/></i> Maintenance to the injection system </li> 
              <li><i><BsCheckCircle/></i>Distribution kit replacement.</li>
            </ul>
        </article>
        <article className="service">
          <i>
            <FcAutomotive />
          </i>
          <h2>Braking system</h2>
          <p>
            You must carry out preventive maintenance on your vehicle's brake
            system, your safety is the most important thing. </p>
            
            <ul>
              <li><i><BsCheckCircle/></i>Replace pads</li>
              <li><i><BsCheckCircle/></i>Disc grinding</li>
              <li><i><BsCheckCircle/></i> Brake cleaning and adjustment </li>
              <li><i><BsCheckCircle/></i> Replacement of rotor  discs</li>
              <li><i><BsCheckCircle/></i> Cooling system maintenance</li>
              <li><i><BsCheckCircle/></i> Replacement of wheel cylinders </li> 
            </ul>
        </article>
        <article className="service">
          <i>
            <MdCarRepair />
          </i>
          <h2>Tune Up</h2>
          <p>
            Counteract the natural wear of your engine, recover power and
            efficiency of the vehicle while saving fuel and caring for the
            environment. </p>
            
            <ul>
              <li><i><BsCheckCircle/></i>Engine oil change</li>
              <li><i><BsCheckCircle/></i>Replacement of spark plugs</li>
              <li><i><BsCheckCircle/></i> Gasoline filter replacement</li>
              <li><i><BsCheckCircle/></i> Oil filter replacement</li>
              <li><i><BsCheckCircle/></i> Throttle body cleaning </li>
              <li><i><BsCheckCircle/></i> Cleaning of injector body </li> 
              <li><i><BsCheckCircle/></i> Transmission oil check  </li> 
              <li><i><BsCheckCircle/></i> Cleaning of IAC valve and sensors  </li> 
              <li><i><BsCheckCircle/></i> Differential oil check  </li> 
              <li><i><BsCheckCircle/></i> Check and refill fluid levels  </li> 
              <li><i><BsCheckCircle/></i> Review of security points</li> 
              <li><i><BsCheckCircle/></i>Engine, chassis wash </li>
            </ul>
            
            
            
      
        </article>
      </div>
    </section>
  );
};

export default Service;
