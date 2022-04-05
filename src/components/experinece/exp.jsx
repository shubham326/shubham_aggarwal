import React from 'react';
import './exp.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Exp = () => {
  return (
    /*<div>Exp</div>*/
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp_cont">
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>{' '}
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ========== Backend ========== */}

        <div className="exp_backend">
          <h3>Backend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>ci/cd</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_details-icon" />
              <div>
                <h4>Cloud</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
