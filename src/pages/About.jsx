import React from "react";
import Titel from "../Components/Titel";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className=" text-2xl text-center pt-8 border-t">
        <Titel text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10  flex flex-col md:flex-row gap-16">
        <img
          className="w-full  md:max-w[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to FabricFation, your one-stop destination for all things.
            We are dedicated to providing you with the best online shopping
            experience, offering a wide selection of high-quality products at
            unbeatable prices.
          </p>
          <p>
            We are a team of passionate individuals who are dedicated to
            creating innovative and effective solutions for our clients .
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide exceptional service, build long-lasting
            relationships, and deliver results that exceed our clients'
            expectations.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Titel text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At FabricFusion, we ensure every product meets the highest quality
            standards. Our rigorous checks guarantee you receive only the best,
            every time you shop with us.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At FabricFusion, we make shopping easy and hassle-free with a
            simple, secure checkout and fast delivery. Shop anytime, anywhere
            with our user-friendly site, designed for your convenience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At FabricFusion, we’re committed to providing fast, friendly, and
            reliable support. Whether you have questions or need assistance, our
            team is always ready to help. Your satisfaction is our priority, and
            we’re here to make your shopping experience smooth and enjoyable.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
