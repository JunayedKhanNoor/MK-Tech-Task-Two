import React from "react";
import m1 from '../asets/mujib1.jpg'
import m2 from '../asets/mujib2.jpg'
import m3 from '../asets/mujib3.jpg'
const BannerOne = () => {
  return (
    <div class="hero mt-20 bg-base-200 pt-12">
    <div class="hero-content flex-col lg:flex-row">
      <img src={m1} class="max-w-sm rounded-lg shadow-2xl" alt=""/>
      <div>
        <h1 class="text-3xl font-bold">শেখ মুজিবুর রহমান (১৭ই মার্চ ১৯২০ – ১৫ই আগস্ট ১৯৭৫)</h1>
        <p class="py-6">সংক্ষিপ্তাকারে শেখ মুজিব বা বঙ্গবন্ধু, ছিলেন বাংলাদেশের প্রথম রাষ্ট্রপতি ও দক্ষিণ এশিয়ার অন্যতম প্রভাবশালী রাজনৈতিক ব্যক্তিত্ব.</p>
        <button class="btn btn-accent">Great Leader</button>
      </div>
    </div>
  </div>
  );
};

export default BannerOne;
