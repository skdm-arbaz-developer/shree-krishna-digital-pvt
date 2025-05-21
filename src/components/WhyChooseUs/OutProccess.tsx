import arrow from "../../assets/images/icons/steps-arrow.svg";
import "../../css/whychooseus.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiCheckDoubleFill } from "react-icons/ri";
import { TbNavigationCode } from "react-icons/tb";

export default function OutProccess() {
  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body flex flex-col justify-center items-center">
          <h2 className="section-title">Our Project Flow</h2>
          <p className="section-content">
            Our Process: Converting Ideas into Code-Driven Solutions.
          </p>
        </div>

        <div className="section-proccess mt-20">
          <div className="grid sm:grid-cols-4 lg:grid-cols-7 gap-5">
            <div className="steps">
              <div className="step-icon">
                <FiSearch />
              </div>
              <h5>Discovery & Strategy</h5>
            </div>
            <div className="steps arrow">
              <img src={arrow} className="hidden sm:block" alt="arrow" />
            </div>
            <div className="steps">
              <div className="step-icon">
                <AiOutlineFundProjectionScreen />
              </div>
              <h5>Design & Development</h5>
            </div>
            <div className="steps arrow">
              <img src={arrow} className="hidden lg:block" alt="arrow" />
            </div>
            <div className="steps">
              <div className="step-icon">
                <RiCheckDoubleFill />
              </div>
              <h5>Testing & Optimization</h5>
            </div>
            <div className="steps arrow">
              <img src={arrow} className="hidden sm:block" alt="arrow" />
            </div>
            <div className="steps">
              <div className="step-icon">
                <TbNavigationCode />
              </div>
              <h5>Launch & Maintenance</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
