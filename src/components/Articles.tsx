import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";

interface RowData {
  id: string;
  date: string;
  title: string;
  content: string;
  deleted: string;
}
const Articles: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);

  useEffect(() => {
    Papa.parse<RowData>("/posts.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data.reverse());
      },
    });
  }, []);

  return (
    <>
      <Title>投稿一覧</Title>
      <div style={{ textAlign: "right" }}>
        <Link to="/create">
          <Button variant="contained" startIcon={<AddIcon />} size={"large"}>
            新規作成
          </Button>
        </Link>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>投稿日</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Link to={"/edit?id=" + row.id}>編集</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Articles;