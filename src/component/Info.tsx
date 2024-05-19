"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import pic from "@/assets/student.svg";
import { Card, Flex } from "antd";

const Info = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const _id = queryParams.get("_id");
  console.log("message", _id);

  return (
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
              <span style={{ fontWeight: "bold" }}>_id &nbsp; :</span> &nbsp;
              32121212132132
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Name &nbsp; :</span> &nbsp;
              Nikhil Kumar Pandey
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Course &nbsp; :</span> &nbsp;
              B-Tech
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Branch &nbsp; :</span> &nbsp;
              Computer Science & Engineering
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
              <span style={{ fontWeight: "bold" }}>Gender &nbsp; :</span> &nbsp;
              Male
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Email &nbsp; :</span> &nbsp;
              nikgarhwa7890@gmail.com
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Roll No. &nbsp; :</span>{" "}
              &nbsp; 2006480100021
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>
                Enrollment No. &nbsp; :
              </span>{" "}
              &nbsp; 2006480100021
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Date Of Birth &nbsp; :</span>{" "}
              &nbsp; 02-10-2002
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
              <span style={{ fontWeight: "bold" }}>State &nbsp; :</span> &nbsp;
              Jharkhand
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Adhaar Card &nbsp; :</span>{" "}
              &nbsp; 5191 6778 0817
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Abc I&apos;d &nbsp; :</span>{" "}
              &nbsp; 5191 6778 0817
            </div>
            <div style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>Nationality &nbsp; :</span>{" "}
              &nbsp; Indian
            </div>
          </Flex>
        </Card>
      </div>
    </Fragment>
  );
};

export default Info;
