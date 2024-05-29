"use client";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Grid,
  Input,
  InputNumber,
  Select,
  SelectProps,
} from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/assets/bssitm.png";
import facebook from "@/assets/facebook.svg";
import Google from "@/assets/Google.svg";
import Apple from "@/assets/apple.svg";

const { useBreakpoint } = Grid;
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [rollNo, setRoll] = useState("");
  const [regNo, setReg] = useState("");
  const [contact, setPhn] = useState("");
  const [dob, setDob] = useState("");

  const screens = useBreakpoint();
  const Course: SelectProps["options"] = [
    { label: <span>Jack</span>, value: "Jack" },
    { label: <span>Lucy</span>, value: "Lucy" },
  ];
  const Branch: SelectProps["options"] = [
    { label: <span>Jack</span>, value: "Jack" },
    { label: <span>Lucy</span>, value: "Lucy" },
  ];
  const handleCourse = (value: string) => {
    setCourse(value.toString());
    console.log(`selected ${value}`);
  };
  const handleBranch = (value: string) => {
    setBranch(value.toString());
    console.log(`selected ${value}`);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDob(dateString.toString());
    console.log(date, dateString);
  };
  const handleSignup = async (values: any) => {
    const type = "student";
    const data = {
      firstName,
      lastName,
      email,
      password,
      course,
      branch,
      rollNo,
      regNo,
      contact,
      dob,
      type,
    };
    fetch(
      "https://backend-qr-git-master-the-nikhil-pandeys-projects.vercel.app/users/sign-up",
      {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      }
    )
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        // Handle the response data
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-end",
              padding: "200px 230px",
              backgroundColor: "#fbb543",
              zIndex: "-1",
              position: "fixed",
              borderRadius: "40px",
              rotate: "-25deg",
              left: "-100px",
              bottom: 0,
            }}
          ></div>
        </div>
        <div>
          <Card
            hoverable
            bordered={false}
            className="box"
            style={{
              maxWidth: "500px",
              width: screens["lg"] ? 500 : "auto",
              height: "auto",
              margin: 10,
            }}
          >
            <Form
              onFinish={handleSignup}
              layout="vertical"
              // style={{ textAlign: "left" }}
            >
              <Form.Item>
                <Flex justify="center">
                  <Image src={logo} alt="" height={80} width={80} />
                </Flex>
              </Form.Item>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>First name</span>}
                name={"firstName"}
              >
                <Input
                  required={true}
                  placeholder="First name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Last name</span>}
                name={"lastName"}
              >
                <Input
                  placeholder="Last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>Email Address</span>
                }
                name={"email"}
              >
                <Input
                  required={true}
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Password</span>}
                name={"password"}
              >
                <Input.Password
                  required={true}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-around" align="center">
                  <span style={{ fontWeight: "bold" }}>Course : </span>
                  <Select
                    mode="tags"
                    style={{ width: "30%" }}
                    placeholder="Course"
                    onChange={handleCourse}
                    options={Course}
                  />
                  <span style={{ fontWeight: "bold" }}>Branch : </span>
                  <Select
                    mode="tags"
                    style={{ width: "30%" }}
                    placeholder="Branch"
                    onChange={handleBranch}
                    options={Branch}
                  />
                </Flex>
              </Form.Item>
              <Form.Item>
                <Flex justify="space-around" align="center">
                  <span style={{ fontWeight: "bold" }}>Roll No : </span>
                  <Input
                    onChange={(e) => {
                      setRoll(e.target.value);
                    }}
                    required={true}
                    placeholder="Roll No"
                    style={{ width: "60%" }}
                  />
                </Flex>
              </Form.Item>
              <Form.Item>
                <Flex justify="space-around" align="center">
                  <span style={{ fontWeight: "bold" }}>Registration No : </span>
                  <Input
                    onChange={(e) => {
                      setReg(e.target.value);
                    }}
                    required={true}
                    placeholder="Registration No"
                    style={{ width: "60%" }}
                  />
                </Flex>
              </Form.Item>
              <Form.Item
                label={<span style={{ fontWeight: "bold" }}>Phone Number</span>}
                name={"contact"}
              >
                <Input
                  onChange={(e) => {
                    setPhn(e.target.value);
                  }}
                  required={true}
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item>
                <Flex justify="space-around" align="center">
                  <span style={{ fontWeight: "bold" }}>Date of Birth : </span>
                  <DatePicker onChange={onChange} format={"DD-MM-YYYY"} />
                </Flex>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ backgroundColor: "#fbb543", color: "white" }}
                  shape="round"
                  size="large"
                  block
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <p style={{ marginBottom: "18px" }}>or continue with</p>
            <Flex justify="center" gap={20} style={{ marginBottom: "18px" }}>
              <Button size="large">
                <Image src={facebook} alt="" height={20} width={20} />
              </Button>
              <Button size="large">
                <Image src={Google} alt="" height={20} width={20} />
              </Button>
              <Button size="large">
                <Image src={Apple} alt="" height={20} width={20} />
              </Button>
            </Flex>
          </Card>
        </div>
        <div
          style={{
            padding: "200px 230px",
            backgroundColor: "#fbb543",
            zIndex: "-2",
            position: "fixed",
            borderRadius: "40px",
            rotate: "-25deg",
            right: "-100px",
            top: "-40px",
            overflow: "hidden",
          }}
        ></div>
      </Flex>
    </>
  );
};

export default SignUp;
