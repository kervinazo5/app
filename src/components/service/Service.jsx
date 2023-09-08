import React from "react";
import "./service.css";
import { FcServices } from "react-icons/fc";
import { MdMedicalServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";
import { MdCarRepair } from "react-icons/md";
import { FcAutomatic } from "react-icons/fc";

const Service = () => {
  return (
    <section id="service">
      <h5 className="title__primary">What I Offer</h5>
      <h2 className="title">services</h2>
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
            Diagnosis whit scanner and repair of faults. • Engine tuning •
            Clutch replacement • Oil change • Transmission replacement and
            repair • Cooling system maintenance • Maintenance to the injection
            system • Distribution kit replacement.
          </p>
        </article>
        <article className="service">
          <i>
            <FcAutomotive />
          </i>
          <h2>Braking system</h2>
          <p>
            You must carry out preventive maintenance on your vehicle's brake
            system, your safety is the most important thing. • Replace pads •
            Disc grinding • Brake cleaning and adjustment • Replacement of rotor
            discs • Replacement of wheel cylinders
          </p>
        </article>
        <article className="service">
          <i>
            <MdCarRepair />
          </i>
          <h2>Major Tuning</h2>
          <p>
            Counteract the natural wear of your engine, recover power and
            efficiency of the vehicle while saving fuel and caring for the
            environment. • Engine oil change • Replacement of spark plugs • Air
            filter replacement • Gasoline filter replacement • Oil filter
            replacement • Throttle body cleaning • Cleaning of injector body •
            Cleaning of IAC valve and sensors • Transmission oil check •
            Differential oil check • Hydraulic steering oil check • Check and
            refill fluid levels • Review of security points • Engine, chassis
            wash
          </p>
        </article>
      </div>
    </section>
  );
};

export default Service;
