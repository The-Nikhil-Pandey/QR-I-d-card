"use client";
import React, { useState } from "react";
import Notice1 from "@/assets/n1.jpg";
import Notice2 from "@/assets/n2.jpg";
import Image from "next/image";
import { Card, Flex } from "antd";

const Notice = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  return (
    <Card
      title={<p style={{ fontSize: "18px", fontWeight: "bold" }}>Notices</p>}
    >
      <Flex justify="space-around">
        <Image height={200} alt="" width={300} src={Notice1} />
        <Image height={200} alt="" width={300} src={Notice2} />
      </Flex>
      {/* {fullscreen ? (
        <embed
          src="/src/assets/Nik Resume.pdf"
          type="application/pdf"
          width="100%"
          height="100vh"
        />
      ) : (
        <embed
          src="/src/assets/Nik Resume.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        />
      )}
      <button onClick={toggleFullscreen}>
        {fullscreen ? "Exit Fullscreen" : "View Fullscreen"}
      </button> */}
    </Card>
  );
};

export default Notice;
