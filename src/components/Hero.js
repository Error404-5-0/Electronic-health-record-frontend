import React from "react";
import Bg from "../assets/bg2.gif";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div>

      <div className=" height justify-around my-5 mx-5 mr-5 ml-5 flex space-x-10 ">
        <div className=" flex1  items-center  w-200">
          <img id="bg" className="flexitem" src={Bg} alt="imag" />
        </div>
        <div className="flex1 w-1/2">
          <h3 className="flexitem text-5xl  font-bold font-3xl">
            <span className=" color-gradient "> Electronic Health Record</span>
          </h3>
          <div id="" className="hero-content flexitem">
          Welcome to EHR the modern solution for managing your healthcare practice.

Our EHR software provides everything you need to streamline your workflow, improve patient care, and grow your practice. With EHR, you can:

Schedule appointments and manage your calendar with ease,
Chart and document patient visits quickly and accurately,
Engage with patients using our secure patient portal, and
Electronically prescribe medications and manage prescriptions

<br/>
<br/>
"EHR has transformed the way I run my practice. It's intuitive, easy to use, and has all the features I need to provide the best possible care to my patients." - Dr. Jane Smith
          </div>
        </div>
      </div>

      <section className="pt-10 ">
        <div className="text-5xl font-bold text-center pb-10 color-gradient"> About us </div>
        {/* <div className="para mt-20 text-lg w-1/2 m-auto">Lorem Ipsum1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div> */}
        <div className="text-center py-3 sub-topic-about text-3xl ">
          {" "}
          Introduction{" "}
        </div>
        <div className="para hero-content w-1/2 m-auto pb-10">
          At EHR, we're dedicated to providing healthcare professionals with the
          tools they need to deliver high-quality patient care. Our electronic
          health record (EHR) software is designed to streamline workflows,
          improve clinical decision-making, and enhance patient outcomes.
        </div>
        <div className="text-center  py-3 sub-topic-about text-3xl ">
          {" "}
          Our Story{" "}
        </div>
        <div className="hero-content pb-10 para w-1/2 m-auto">
          EHR was founded with a mission to transform the healthcare industry
          through technology. Our team of experienced healthcare professionals
          and software developers saw an opportunity to create a better EHR
          system – one that could reduce administrative burden, improve clinical
          outcomes, and empower patients to take control of their health. We've
          spent years researching and developing our EHR software, working
          closely with healthcare providers to understand their unique needs and
          challenges. Today, we're proud to offer a state-of-the-art EHR system
          that's helping healthcare organizations across the country deliver
          better patient care.
        </div>

        {/* <div className="flex2 border-2">
                <div className="flex2">
                    <div className=" text-4xl my-2">
                        Discover Doctors
                    </div>
                    <p className="text-lg">Lorem Ipsum1 is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="flex2">
                    <div className="text-4xl my-2">
                        Medical record
                    </div>
                    <div className="text-lg">Lorem Ipsum1 is simply dummy text of the printing and typesetting industry.</div>
                </div>
                <div className="flex2">
                    <div className="text-4xl my-2">
                        Previous History
                    </div>
                    <div className="text-lg">Lorem Ipsum1 is simply dummy text of the printing and typesetting industry.</div>
                </div> */}
        {/* <div >
                    Medical record
                </div>
                <div >
                    Previous History
                </div> */}
        {/* </div> */}
      </section>

      <Footer></Footer>

    </div>
  );
}
