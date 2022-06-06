import React from "react";
import h1 from "../asets/hasina.jpg";
import {
  FcSupport,
  FcComboChart,
  FcCurrencyExchange,
  FcConferenceCall,
  FcCustomerSupport,
  FcBullish,
} from "react-icons/fc";
import { ImMakeGroup } from "react-icons/im";
import ceo from "../asets/ceo.jpg";
import ac from "../asets/account.jpg";
import en from "../asets/engineer.jpg";

const Trust = () => {
  return (
    <>
      <div className="md:max-w-4xl mx-auto my-16  font-bold">
        <h1 className="text-2xl md:text-4xl uppercase text-center mb-6">
          Start to now we work with trust
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          <div>
            <FcSupport className="h-20 w-20 ml-6" />
            <p>After sell service</p>
          </div>
          <div>
            <FcComboChart className="h-20 w-20 ml-6" />
            <p>Sustainable Growth</p>
          </div>
          <div>
            <FcCurrencyExchange className="h-20 w-20 ml-6" />
            <p>Global revenue</p>
          </div>
          <div>
            <FcConferenceCall className="h-20 w-20 ml-6" />
            <p>Happy clients</p>
          </div>
        </div>
      </div>

      <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={h1} class="max-w-sm rounded-lg shadow-2xl" alt="mujib" />
          <div>
            <h1 class="text-5xl font-bold">Visionary Leader of Bangladesh Seikh Hasina!</h1>

            <button class="btn btn-accent my-6 px-12">Mujib Daughter</button>
          </div>
        </div>
      </div>

      <div className="md:max-w-7xl mx-auto my-24">
        <h1 className="text-2xl md:text-4xl text-center font-bold">Qualified Staff Of Engineers</h1>
        <p className="text-center text-xl mt-4">Expert Members</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12">
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ceo} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Anwar Ramadan
                  <div class="badge badge-secondary">Founder & CEO</div>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={en} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Osama Bakri
                  <div class="badge badge-secondary">Sener Engineer</div>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ac} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Eng Omnia
                  <div class="badge badge-secondary">Account Manager</div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-7xl mx-auto my-16">
        <h1 className="text-2xl md:text-7xl text-center font-bold">Our Services</h1>
        <p className="text-center text-xl mt-4">Quality is our commitment</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12">
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <ImMakeGroup className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Innovation Model</h2>
              <p>
                {" "}
                Our Innovation model provides a detailed framework to identify, advance, and
                implement ideas.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <FcCustomerSupport className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Best Support</h2>
              <p>
                It's time for our team to adopt customer service, this guide will tell you what you
                need.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <FcBullish className="text-white w-20 h-20" />
              <h2 class="text-4xl text-white font-bold">Sustainable Growth</h2>
              <p>
                Sustainable development can be defined as development that meets the needs of the
                present situation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-7xl mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-12">
          <ul class="menu bg-base-100 w-56 p-2 rounded-box">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Capital Profile
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mission and Vision
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Career
              </a>
            </li>
          </ul>
          <ul class="menu bg-base-100 w-56 p-2 rounded-box">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Item 2
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Item 1
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Item 3
              </a>
            </li>
          </ul>
          <ul class="menu bg-base-100 w-56 p-2 rounded-box">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Item 2
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Item 1
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trust;
