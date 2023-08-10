import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "../components/Dashboard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid/Grid";
import { Editor, DateField, SubmitBtn, DeleteBtn } from "../components/Editor";
import { useSearchParams } from "react-router-dom";

const deleteMethod = () => {
    console.log(window.confirm("記事を削除します、よろしいですか？"));
};

const Edit: React.FC = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        // ここで適切なURLを設定します
        const url = process.env.REACT_APP_HOST_ADDRESS + "api?id=" + id;

        axios
            .get(url)
            .then((res) => {
                if (res.data.length !== 0) {
                    setTitle(res.data[0].title);
                    setDate(res.data[0].date);
                    setContent(res.data[0].content);
                }
            })
            .catch((error) => {
                console.error("データの取得中にエラーが発生しました:", error);
            });
    }, [id]);

    return (
        <Dashboard>
            {title && date ? (
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
                            <SubmitBtn label="更新する" />
                            <DeleteBtn deleteMethod={deleteMethod} />
                        </Paper>
                    </Grid>
                </Grid>
            ) : (
                <Paper sx={{ p: 5, textAlign: "center" }}>
                    <div>投稿が見つかりませんでした。</div>
                </Paper>
            )}
        </Dashboard>
    );
};

export default Edit;
