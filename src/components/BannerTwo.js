import React from "react";
import m11 from "../asets/download.png";
const BannerTwo = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={m11} class="max-w-sm rounded-lg shadow-2xl" alt="mujib" />
          <div>
            <h1 class="text-3xl font-bold">
              "মুজিববর্ষের অঙ্গীকার উন্নয়ন-অর্থায়নের উৎস হবে পুঁজিবাজার"
            </h1>

            <button class="btn btn-accent my-6 px-12">Mujib 100</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
