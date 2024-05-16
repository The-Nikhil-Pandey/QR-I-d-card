"use client";
import { Card, Flex, Space, Table, TableProps, Tag } from "antd";
import Link from "next/link";
import React, { Fragment } from "react";

const Performance = () => {
  interface DataType {
    key: string;
    subject: string;
    subjectCode: string;
    fullMarks: number;
    passingMarks: number;
    obtainedMarks: number;
    teacher: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Subject Code",
      dataIndex: "subjectCode",
      key: "age",
    },
    {
      title: "Full Marks",
      dataIndex: "fullMarks",
      key: "fullMarks",
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
      key: "passingMarks",
    },
    {
      title: "Obtained Marks",
      dataIndex: "obtainedMarks",
      key: "obtainedMarks",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      subject: "Data Structure",
      subjectCode: "KCS085",
      fullMarks: 50,
      passingMarks: 17,
      obtainedMarks: 20,
      teacher: "Mr. M.B. Singh",
    },
    {
      key: "2",
      subject: "Discrete Mathematics",
      subjectCode: "KCS505",
      fullMarks: 50,
      passingMarks: 17,
      obtainedMarks: 20,
      teacher: "Mr. B.N. Tiwari",
    },
    {
      key: "3",
      subject: "DBMS",
      subjectCode: "KCS085",
      fullMarks: 50,
      passingMarks: 17,
      obtainedMarks: 20,
      teacher: "Mrs. Awantika Awasthi",
    },
  ];

  return (
    <Fragment>
      <Flex vertical gap={20}>
        <Card title={<p>Class Tests</p>} style={{ margin: "20px" }}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>

        <Card title={<p>Sessional Exams</p>} style={{ margin: "20px" }}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>

        <Card
          title={<p>PUT (Pre-University Test)</p>}
          style={{ margin: "20px" }}
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>

        <Card title={<p>University Result</p>} style={{ margin: "20px" }}>
          click{" "}
          <Link
            style={{ textDecoration: "underline", color: "blue" }}
            href="https://oneview.aktu.ac.in/WebPages/aktu/OneView.aspx"
          >
            Here
          </Link>
          &nbsp; to check university result
        </Card>
      </Flex>
    </Fragment>
  );
};

export default Performance;
