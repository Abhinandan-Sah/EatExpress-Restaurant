import User from "./User.js";
import UserClass from "./UserClass.js";
import { Header_LOGO_URL } from "../utils/constants";
import React from "react";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
import EatExpressFevicon from '../../public/img/EatExpress-Logo.png';

const About = () => {
  return (
    <div className="mt-[8rem]">
      {/* <UserClass name={"Abhinandan"} location={"Punjab"}/> */}
        
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4 mb-4">
            <h1 className="font-bold text-2xl text-center">About</h1>
              <img
                src={EatExpressFevicon}
                className="w-24 h-24 rounded-xl mx-auto mb-4"
                alt="User Avatar"
              />
              <h3 className="text-lg text-gray-600 font-semibold mb-2">Name: <span className="text-orange-500 font-bold">EatExpress</span></h3>
              <h4 className="text-gray-600 mb-2 font-semibold">
                Location: Mohali, Punjab
              </h4>
              <h4 className="text-gray-600 mb-4 font-semibold">
                Contact: EatExpress@gmail.com
              </h4>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-600">LoggedIn User - </span>
                <UserContext.Consumer>
                  {({ loggedInUser }) => (
                    <h1 className="font-bold text-lg text-indigo-600">
                      {loggedInUser}
                    </h1>
                  )}
                </UserContext.Consumer>
              </div>
            </div>
        
      </div>
  );
};

export default About;
