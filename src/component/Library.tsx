"use client";
import { Card, Flex, Space, Table, TableProps, Tag } from "antd";
import Link from "next/link";
import React, { Fragment } from "react";

const Library = () => {
  interface DataType {
    key: string;
    bookName: string;
    bookCode: string;
    issuedDate: string;
    returnDate: string;
    fine: number;
    librarian: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Book Name",
      dataIndex: "bookName",
      key: "bookName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Book Code",
      dataIndex: "bookCode",
      key: "bookCode",
    },
    {
      title: "Issued Date",
      dataIndex: "issuedDate",
      key: "fullMarks",
    },
    {
      title: "Return Date",
      dataIndex: "returnDate",
      key: "returnDate",
    },
    {
      title: "Fine",
      dataIndex: "fine",
      key: "fine",
    },
    {
      title: "Librarian",
      dataIndex: "librarian",
      key: "librarian",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      bookName: "Let us C",
      bookCode: "ABC555",
      issuedDate: "20/03/2022",
      returnDate: "25/03/2022",
      fine: 0,
      librarian: "Subash",
    },
    {
      key: "2",
      bookName: "Physics",
      bookCode: "ABC555",
      issuedDate: "20/03/2022",
      returnDate: "25/03/2022",
      fine: 0,
      librarian: "Subash",
    },
    {
      key: "3",
      bookName: "Chemistry",
      bookCode: "ABC555",
      issuedDate: "20/03/2022",
      returnDate: "25/03/2022",
      fine: 0,
      librarian: "Subash",
    },
    {
      key: "4",
      bookName: "DBMS",
      bookCode: "ABC555",
      issuedDate: "20/03/2022",
      returnDate: "25/03/2022",
      fine: 0,
      librarian: "Subash",
    },
    {
      key: "5",
      bookName: "Theoury Of Computation",
      bookCode: "ABC555",
      issuedDate: "20/05/2022",
      returnDate: "25/11/2022",
      fine: 200,
      librarian: "Subash",
    },
  ];

  return (
    <Fragment>
      <Flex justify="center" align="center" gap={50}>
        <Card style={{ width: "40%" }}>
          <p style={{ fontSize: "40px" }}>
            <span style={{ fontWeight: "bold" }}>Total Fine :</span> &nbsp; ₹
            200
          </p>
        </Card>
        <Card style={{ width: "25%" }}>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Submitted Fine :</span> &nbsp;
            ₹ 100
          </p>
        </Card>
        <Card style={{ width: "25%" }}>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Left Fine :</span> &nbsp; ₹ 100
          </p>
        </Card>
      </Flex>
      <Flex vertical gap={20}>
        <Card title={<p>Library Details</p>} style={{ margin: "20px" }}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </Flex>
    </Fragment>
  );
};

export default Library;
