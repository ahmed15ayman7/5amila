"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/NavBar";
import { ConfigProvider } from "antd";
import { useDarkModeStore } from "@/lib/zustand/store";
import Footer from "../shared/Footer";
const ThemsProv = ({ children }: { children: React.ReactNode }) => {
    // const { isDarkMode, toggleDarkMode} = useDarkModeStore();
let isDarkMode=true
  const darkTheme = {
    token: {
      colorPrimary: "#1890ff",
      colorBgBase: "#141414",
      colorTextBase: "#ffffff",
    },
  };

  const lightTheme = {
    token: {
      colorPrimary: "#1890ff",
      colorBgBase: "#134b70",
      colorTextBase: "#000000",
    },
  };

  return (
    // <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div>
      <Navbar setIsDarkMode={()=>{}} isDarkMode={isDarkMode} />
      <div className="flex w-full flex-col min-h-screen  mx-auto">
        
        <div className={`w-full flex-grow  pt-24
              bg-primary-500 
              `}>{children}</div>
      </div>
      <Footer/>
      </div>
    // </ConfigProvider>

  );
};

export default ThemsProv;
