import {
  LeftOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <header className=" text-gray-600 body-font bg-gray-200 sticky z-50 ">
      <div
        className="w-11/12 mx-auto flex flex-wrap   flex-col md:flex-row items-center
      "
      >
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="/src/assets/logo.PNG"
            alt=""
            className="w-20 h-20 p-1  rounded-full"
          />
          <span className="ml-3 text-xl">FabricFusion</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:flex">
          <NavLink to={"/"} className="mr-5 hover:text-gray-900">
            HOME
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/Collection"} className="mr-5 hover:text-gray-900">
            COLLECTION
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/About"} className="mr-5 hover:text-gray-900">
            ABOUT
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to={"/Contact"} className="mr-5 hover:text-gray-900">
            CONTACT
            <hr className="w-full border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </nav>
        <div className="flex gap-3   hidden md:flex ">
          <SearchOutlined
            onClick={() => setShowSearch(true)}
            style={{ fontSize: "1.5em" }}
          />
          <div className="group relative">
            <Link to={"/login"}>
              <UserOutlined style={{ fontSize: "1.5em" }} />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Order</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/cart"} className="relative">
            <Badge count={getCartCount()}>
              <ShoppingCartOutlined style={{ fontSize: "1.5em" }} />
            </Badge>
          </Link>
        </div>
        {/* {sidebar menu for samll screen} */}
        <MenuFoldOutlined
          style={{ fontSize: "1.5em" }}
          className="cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden  bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex item-center gap-4 p-3"
            >
              <LeftOutlined />
              <p className="cursor-pointer">Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={"/Collection"}
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={"/About"}
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={"/Contact"}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
