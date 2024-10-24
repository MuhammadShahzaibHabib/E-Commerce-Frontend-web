import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-11/12 mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src="/src/assets/logo.PNG"
            className="w-20 h-20 p-1  rounded-full"
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            facere corporis consectetur itaque atque, dolor
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>conatct@fabricfusion.com</li>
          </ul>
        </div>
      </footer>
      <div className="w-11/12 mx-auto">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ fabricfusion.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
