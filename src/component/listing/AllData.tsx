"use client";
import React, { useEffect, useState } from "react";
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

interface Post {
  name: number;
  id: string;
  type: string;
}

const columns: TableProps<Post>["columns"] = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (_, record) => <span>Student</span>,
  },
  {
    title: "_id",
    dataIndex: "_id",
    key: "_id",
  },

  {
    title: "QR code",
    key: "_id",
    dataIndex: "_id",
    render: (_) => (
      <>
        <QR _id={_._id} />
      </>
    ),
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
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    // Define the API endpoint
    const url = "https://backend-qr-ruddy.vercel.app/students";

    // Fetch data using the GET method
    fetch(url)
      .then((response) => {
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Post[]) => {
        // Update the state with the fetched data
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  }, []);

  const data1: DataType[] = [
    {
      key: "",
      name: "John Brown",
      type: "admin",
      _id: "utyfugihjok",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data!} pagination={false} />
    </>
  );
};

export default AllData;
