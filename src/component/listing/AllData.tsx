"use client";
import React from "react";
import { Button, Popover, QRCode, Space, Table, TableProps, Tag } from "antd";

const downloadQRCode = () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "QRCode.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

interface DataType {
  key: string;
  name: string;
  type: string;
  _id: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "QR code",
    key: "qr",
    dataIndex: "qr",
    render: (_, record) => (
      <>
        <QR _id={record._id} />
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    type: "admin",
    _id: "utyfugihjok",
  },
  {
    key: "2",
    name: "Jim Green",
    type: "admin",
    _id: "utyfugihjok",
  },
  {
    key: "3",
    name: "Joe Black",
    type: "admin",
    _id: "utyfugihjok",
  },
];

const QR = ({ _id }: { _id: string }) => (
  <Popover
    overlayInnerStyle={{ padding: 0 }}
    content={
      <div id="myqrcode">
        <QRCode
          value={`https://qr-id-card.vercel.app/${_id}`}
          bgColor="#fff"
          style={{ marginBottom: 16 }}
        />
      </div>
    }
  >
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </Popover>
);

const AllData = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default AllData;
