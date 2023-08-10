import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid/Grid";
import { Editor, DateField, SubmitBtn } from "../components/Editor";

const Create: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>(new Date().toString());
    const [content, setContent] = useState<string>("");
    return (
        <Dashboard>
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
                        <DateField date={date} setDate={setDate} />
                        <SubmitBtn label="公開する" />
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    );
};

export default Create;
