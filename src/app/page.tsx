"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { GetProp, Input, Typography } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import { useState } from "react";

const { Title } = Typography;
export default function Home() {
  const [password, setPassword] = useState("");
  const onChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    setPassword(text);
    console.log("onChange:", text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  if (password == "111111") {
    redirect("/info");
  }

  return (
    <>
      <Title level={5}>With custom display character</Title>
      <Input.OTP mask="🔒" {...sharedProps} />
    </>
  );
}
