"use client";
import { Card, Flex, Space, Table, TableProps, Tag } from "antd";
import Link from "next/link";
import React, { Fragment } from "react";

const Account = () => {
  interface DataType {
    key: string;
    transactionId: string;
    amount: string;
    received: string;
    date: string;
    accountant: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Transaction I'd",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Received",
      dataIndex: "received",
      key: "received",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Accountant",
      dataIndex: "accountant",
      key: "accountant",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      transactionId: "516544654649541321321548",
      amount: "₹ 10,000",
      received: "YES",
      date: "10/05/2020",
      accountant: "Subash",
    },
    {
      key: "2",
      transactionId: "516544654649541321321548",
      amount: "₹ 10,000",
      received: "YES",
      date: "25/05/2020",
      accountant: "Subash",
    },
    {
      key: "3",
      transactionId: "516544654649541321321548",
      amount: "₹ 30,000",
      received: "YES",
      date: "10/06/2020",
      accountant: "Anand",
    },
    {
      key: "4",
      transactionId: "516544654649541321321548",
      amount: "₹ 5,000",
      received: "NO",
      date: "14/12/2020",
      accountant: "Sudheer",
    },
    {
      key: "5",
      transactionId: "516544654649541321321548",
      amount: "₹ 8,000",
      received: "NO",
      date: "10/01/2021",
      accountant: "Subash",
    },
    {
      key: "6",
      transactionId: "516544654649541651321548",
      amount: "₹ 20,000",
      received: "YES",
      date: "11/02/2021",
      accountant: "Subash",
    },
  ];

  return (
    <Fragment>
      <Flex justify="center" align="center" gap={50}>
        <Card style={{ width: "40%" }}>
          <p style={{ fontSize: "40px" }}>
            <span style={{ fontWeight: "bold" }}>Total Fees :</span> &nbsp; ₹
            4,28,000
          </p>
        </Card>
        <Card style={{ width: "25%" }}>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Submitted Fees :</span> &nbsp;
            ₹ 2,18,000
          </p>
        </Card>
        <Card style={{ width: "25%" }}>
          <p style={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Left Fees :</span> &nbsp; ₹
            2,10,000
          </p>
        </Card>
      </Flex>
      <Card
        style={{ margin: "20px" }}
        title={
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Fee Details</p>
        }
      >
        <Flex>
          <Flex vertical gap={20} style={{ width: "50%" }}>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>Tution Fees &nbsp; :</span>{" "}
              &nbsp; 60,000
            </div>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>
                Library Charge &nbsp; :
              </span>{" "}
              &nbsp; 5,000
            </div>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>
                Uniform Charge &nbsp; :
              </span>{" "}
              &nbsp; 6,000
            </div>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>Mesh Charge &nbsp; :</span>{" "}
              &nbsp; 20,000
            </div>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>Hostel Charge &nbsp; :</span>{" "}
              &nbsp; 30,000
            </div>
            <div style={{ fontSize: "17px" }}>
              <span style={{ fontWeight: "bold" }}>
                Development charge &nbsp; :
              </span>{" "}
              &nbsp; 5,000
            </div>
          </Flex>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            All These Charges for One Year only <br />
            Grand Total :- ₹ 1,26,000
          </p>
        </Flex>
      </Card>
      <Flex vertical gap={20}>
        <Card
          title={
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              TranSaction Details
            </p>
          }
          style={{ margin: "20px" }}
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
      </Flex>
    </Fragment>
  );
};

export default Account;
