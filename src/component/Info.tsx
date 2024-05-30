"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import pic from "@/assets/student.svg";
import { Card, Flex, GetProp, Input, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";

interface data {
  _id: string;
  firstName: string;
  last_Name: string;
  course: string;
  branch: string;
  email: string;
  rollNo: string;
  regNo: string;
  dob: string;
}
const { Title } = Typography;
const Info = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const _id = queryParams.get("_id");
  const [display, setDisplay] = useState(false);
  console.log("message", _id);
  console.log("id and password", _id);
  const [data, setData] = useState<data>();
  console.log("Data", data);

  useEffect(() => {}, []);
  const Password = () => {
    const onChange: GetProp<typeof Input.OTP, "onChange"> = (password) => {
      console.log("onChange:", password);
      fetch(
        "https://backend-qr-git-master-the-nikhil-pandeys-projects.vercel.app/students/log-in",
        {
          method: "POST", // Specify the HTTP method
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify({ _id, password }), // Convert the data object to a JSON string
        }
      )
        .then((response) => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json(); // Parse the JSON from the response
        })
        .then((res) => {
          // Handle the response data
          console.log("Success:", res);
          setData(res);
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error("Error:", error);
        });
      setDisplay(true);
    };

    const sharedProps: OTPProps = {
      onChange,
    };
    return (
      <>
        <Title level={5}>With custom display character</Title>
        <Input.OTP mask="🔒" {...sharedProps} />
      </>
    );
  };
  // const apiRes=

  return (
    <>
      {display ? (
        <Fragment>
          <Flex
            justify="center"
            align="center"
            gap={100}
            style={{ margin: "0 20px" }}
          >
            <Card style={{ width: "35%" }}>
              <Flex vertical justify="center" align="center">
                <Image src={pic} height={400} width={400} alt="" />
              </Flex>
            </Card>
            <Card style={{ width: "50%" }}>
              <Flex gap={10} vertical>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>_id &nbsp; :</span>{" "}
                  &nbsp; {data?._id}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Name &nbsp; :</span>{" "}
                  &nbsp; {data?.firstName}&nbsp;{data?.last_Name}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Course &nbsp; :</span>{" "}
                  &nbsp; {data?.course}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Branch &nbsp; :</span>{" "}
                  &nbsp; {data?.branch}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Semester &nbsp; :</span>{" "}
                  &nbsp; Eight
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Section &nbsp; :</span>{" "}
                  &nbsp; &apos;A&apos;
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Session &nbsp; :</span>{" "}
                  &nbsp; 2020-2024
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Gender &nbsp; :</span>{" "}
                  &nbsp; Male
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Email &nbsp; :</span>{" "}
                  &nbsp; {data?.email}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Roll No. &nbsp; :</span>{" "}
                  &nbsp; {data?.rollNo}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Enrollment No. &nbsp; :
                  </span>{" "}
                  &nbsp; {data?.regNo}
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Date Of Birth &nbsp; :
                  </span>{" "}
                  &nbsp; {data?.dob}
                </div>
              </Flex>
            </Card>
          </Flex>
          <div style={{ margin: "30px" }}>
            <Card
              title={
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Personal Information
                </p>
              }
            >
              <Flex vertical gap={30}>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Father&apos;s Name &nbsp; :
                  </span>{" "}
                  &nbsp; Mr. Shashikant Pandey
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Mother&apos;s Name &nbsp; :
                  </span>{" "}
                  &nbsp; Mrs. Madhuri Devi
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Address &nbsp; :</span>{" "}
                  &nbsp; Sahijana, Garhwa
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>District &nbsp; :</span>{" "}
                  &nbsp; Garhwa
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>Pin Code &nbsp; :</span>{" "}
                  &nbsp; 822114
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>State &nbsp; :</span>{" "}
                  &nbsp; Jharkhand
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Adhaar Card &nbsp; :
                  </span>{" "}
                  &nbsp; 5191 6778 0817
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Abc I&apos;d &nbsp; :
                  </span>{" "}
                  &nbsp; 5191 6778 0817
                </div>
                <div style={{ fontSize: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Nationality &nbsp; :
                  </span>{" "}
                  &nbsp; Indian
                </div>
              </Flex>
            </Card>
          </div>
        </Fragment>
      ) : (
        <Password />
      )}
    </>
  );
};

export default Info;
