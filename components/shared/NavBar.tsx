"use client";
import React from "react";
import { Menu, Layout, Dropdown, Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavItems } from "@/constant/data";

const { Header } = Layout;

interface MenuItem {
  label: string;
  label2: string; // خاصية label2
  key: string;
  children?: MenuItem[];
}

const Navbar = ({
  setIsDarkMode,
  isDarkMode,
}: {
  setIsDarkMode: any;
  isDarkMode: boolean;
}) => {
  const t = useTranslations("navbar");
  const pathName = usePathname();
  const newPath = `${pathName.substring(0, 3)}`;
  const menuItems: MenuItem[] =NavItems(t)
  const renderMenuItems = (items: MenuItem[]): React.ReactNode => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            style={{
              minWidth: item.key === "/cosmetic-surgery" ? 200 : 150,
            }}
            className={`py-5 text-center text-sm font-bold px-2 bg-transparent`}
            key={item.key}
            title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item
          style={{ flex: 1, minWidth: item.key === "/blog" ? 50 : 250 }}
          className={`text-center font-bold bg-transparent ${
            !isDarkMode ? "text-black" : "text-white"
          }`}
          key={item.key}> 
            <Link
              href={{
                pathname: `${newPath}/${item.label2}`,
              }}>
              {item.label}
            </Link>
        </Menu.Item>
      );
    });
  };

  return (
    <Layout
      className={` ${
        isDarkMode ? "bg-[#021526] text-black" : "bg-[#021526] text-white"
      }`}>
      <Header
        className={`py-16 bg-transparent ${
          isDarkMode ? "text-black" : "text-white"
        }`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div className="">
            <Link href={newPath}>
          <Image src="/images/logo.png" alt="logo" width={200} height={100} />
            </Link>
        </div>
        <div className="flex gap-9 items-center">
          <Menu
            mode="horizontal"
            style={{ flex: 1, minWidth: 300 }}
            className={`flex bg-transparent ${
              !isDarkMode
                ? "bg-transparent text-black"
                : "bg-transparent text-white"
            }`}>
            {renderMenuItems(menuItems)}
          </Menu>
          <LanguageSwitcher />
          {/* <Button
            onClick={() => setIsDarkMode((prev: boolean) => !prev)}
            className={`m-4 p-2 flex items-center justify-center rounded-lg transition-colors ${
              isDarkMode ? "bg-white text-black" : "bg-black text-white"
            }`}>
            {!isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          </Button> */}
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
