"use client";
import React, { useState } from "react";
import { Menu, Layout, Button, Drawer } from "antd";
import { CloseCircleFilled, MenuOutlined } from "@ant-design/icons";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavItems } from "@/constant/data";

const { Header } = Layout;

interface MenuItem {
  label: string;
  label2: string;
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
  const menuItems: MenuItem[] = NavItems(t);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const renderMenuItems = (items: MenuItem[]): React.ReactNode => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            
            className={`md:text-center text-sm md:min-w-[${ item.key === "/cosmetic-surgery" ? "200px" : "150px" }] font-bold px-2`}
            key={item.key}
            title={item.label}
          >
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item
          style={{ flex: 1, }}
          className={`md:text-center md:min-w-[${ item.key === "/blog" ? "50px" : "250px" }] font-bold`}
          key={item.key}
        >
          <Link
            href={{
              pathname: `${newPath}/${item.label2}`,
            }}
          >
            {item.label}
          </Link>
        </Menu.Item>
      );
    });
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout
      className={` ${
        isDarkMode ? "bg-[#021526] text-black" : "bg-[#021526] text-white"
      }`}
    >
      <Header
        className={`py-16 p-2 bg-transparent ${
          isDarkMode ? "text-black" : "text-white"
        }`}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link href={newPath}>
            <Image src="/images/logo.png" alt="logo" width={200} height={100} />
          </Link>
        </div>
        <div className="flex md:gap-9 gap-2 items-center">
          <Menu
            mode="horizontal"
            style={{ flex: 1, minWidth: 300 }}
            className={`hidden md:flex bg-transparent ${
              !isDarkMode
                ? "bg-transparent text-black"
                : "bg-transparent text-white"
            }`}
          >
            {renderMenuItems(menuItems)}
          </Menu>
          <LanguageSwitcher />
          <Button
            className="md:hidden"
            icon={<MenuOutlined style={{ color: "#0000000" }} />} // تغيير لون الأيقونة إلى الأبيض
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      </Header>
      <Drawer
        title={<Image src="/images/logo.png" alt="logo" width={200} height={100} />} // تغيير لون العنوان إلى الأبيض
        placement={newPath==="/en"?"left":"right"}
        closeIcon={<CloseCircleFilled style={{ color: "#ffffff",fontSize:"30px" }}/>}
        closable={true}
        onClose={handleDrawerClose}
        
        open={drawerVisible}
        width={320} // تكبير عرض الـ Drawer
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          // color: "#f0f0f0", // خلفية شفافة قريبة للأسود
        }}
      
      >
        <Menu
          mode="inline"
          className="bg-transparent"
          theme="dark"
          style={{
            backgroundColor: "transparent", // للحفاظ على الخلفية الشفافة
          }}
        >
          {renderMenuItems(menuItems)}
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
