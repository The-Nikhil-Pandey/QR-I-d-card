"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  MailOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Input,
  Layout,
  Menu,
  theme,
} from "antd";
import Link from "next/link";
import Image from "next/image";
import info from "@/assets/student.svg";
import logo from "@/assets/bssitm.png";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const sidebarItems: MenuProps["items"] = [
  getItem(
    <Link href={`/info`}>Home</Link>,
    "home",
    <Image
      alt=""
      height={20}
      width={20}
      src={info}
      style={{ marginLeft: "2px" }}
    />
  ),
  getItem(
    <Link href={`/performance`}>Performance</Link>,
    "performance",
    <Image
      alt=""
      height={20}
      width={20}
      src={info}
      style={{ marginLeft: "2px" }}
    />
  ),
  getItem(
    <Link href={`/account`}>Account</Link>,
    "account",
    <Image
      alt=""
      height={20}
      width={20}
      src={info}
      style={{ marginLeft: "2px" }}
    />
  ),
  getItem(
    <Link href={`/library`}>Library</Link>,
    "library",
    <Image
      alt=""
      height={20}
      width={20}
      src={info}
      style={{ marginLeft: "2px" }}
    />
  ),
  getItem(
    <Link href={`/notice`}>Notice</Link>,
    "notice",
    <Image
      alt=""
      height={20}
      width={20}
      src={info}
      style={{ marginLeft: "2px" }}
    />
  ),
];

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const profileItems: MenuProps["items"] = [
  {
    key: "logout",
    icon: <Image src={"/logout.svg"} alt="" height={20} width={20} />,
    label: <Link href={"/signin"}>Log Out</Link>,
  },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [pic, setPic] = useState(true);

  return (
    <Layout hasSider>
      <Sider
        // collapsible
        breakpoint="sm"
        collapsedWidth="80"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          setPic(!pic);
          console.log(pic);
          console.log(collapsed, type);
        }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          zIndex: 2,
          paddingLeft: "5px",
          paddingRight: "5px",
          top: 0,
          bottom: 0,
          background: colorBgContainer,
        }}
      >
        <Link href={`/`}>
          <Flex
            justify="center"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {pic ? (
              <Image src={logo} alt="" height={70} width={100}></Image>
            ) : (
              <Image src={logo} alt="" height={50} width={70}></Image>
            )}
          </Flex>
        </Link>
        <Menu mode="inline" defaultSelectedKeys={["4"]} items={sidebarItems} />
      </Sider>
      {pic ? (
        <Layout style={{ marginLeft: 190, width: "auto" }}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: "fixed",
              zIndex: 2,
              right: 0,
              left: 200,
            }}
          >
            <Flex
              gap={"small"}
              justify="end"
              align="center"
              style={{ marginTop: "10px", paddingRight: "20px" }}
            >
              {/* <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            /> */}

              <Dropdown trigger={["click"]} menu={{ items: profileItems }}>
                <Image
                  style={{ cursor: "pointer" }}
                  src={info}
                  width={40}
                  height={40}
                  alt="profile"
                />
              </Dropdown>
            </Flex>
          </Header>
          <Content
            style={{
              margin: "16px",
              marginTop: "80px",
              overflow: "initial",
              minHeight: "100vh",
            }}
          >
            {children}
          </Content>
        </Layout>
      ) : (
        <Layout style={{ marginLeft: 70, width: "auto" }}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex gap={"small"} justify="end" align="center">
              {/* <Menu
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            /> */}

              <div style={{ marginTop: "10px" }}>
                <Dropdown trigger={["click"]} menu={{ items: profileItems }}>
                  <Image src={info} width={40} height={40} alt="profile" />
                </Dropdown>
              </div>
            </Flex>
          </Header>
          <Content
            style={{ margin: "16px", overflow: "initial", minHeight: "100vh" }}
          >
            {children}
          </Content>
        </Layout>
      )}
    </Layout>
  );
};

export default AdminLayout;
