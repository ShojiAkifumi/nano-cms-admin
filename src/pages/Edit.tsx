import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid/Grid";
import Papa from "papaparse";
import { Editor, DateField, SubmitBtn, DeleteBtn } from "../components/Editor";
import { useSearchParams } from "react-router-dom";

interface RowData {
  id: string;
  date: string;
  title: string;
  content: string;
  deleted: string;
}

const deleteMethod = () => {
  console.log(window.confirm("記事を削除します、よろしいですか？"));
};

const Edit: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    Papa.parse<RowData>("/posts.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const filteredData = result.data.find((item) => item.id === id);
        if (filteredData) {
          setTitle(filteredData.title);
          setContent(filteredData.content.replace(/<br>/g, "\n"));
        }
      },
    });
  }, [id]);

  return (
    <Dashboard>
      {title ? (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Editor
                title={title}
                content={content}
                setTitle={setTitle}
                setContent={setContent}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <DateField />
              <SubmitBtn label="更新する" />
              <DeleteBtn deleteMethod={deleteMethod} />
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Paper sx={{ p: 5, textAlign: "center" }}>
          <div>記事が見つかりませんでした</div>
        </Paper>
      )}
    </Dashboard>
  );
};

export default Edit;
