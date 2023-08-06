import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useState } from "react";

type EditorProps = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

type SubmitBtnProps = {
  label: string;
};

type DeleteBtnProps = {
  deleteMethod: () => void;
};

export const Editor = (props: EditorProps) => {
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.setContent(e.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="タイトル"
        variant="outlined"
        fullWidth
        margin="normal"
        value={props.title}
        onChange={onChangeTitle}
      />

      <TextField
        id="outlined-basic"
        placeholder="文字を入力"
        variant="outlined"
        rows={20}
        margin="normal"
        value={props.content}
        multiline
        fullWidth
        onChange={onChangeContent}
      />
    </>
  );
};

export const DateField = () => {
  const Today = new Date();
  const [date, setDate] = useState<Date | null>(Today);

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <DatePicker label="投稿日" value={date} onChange={handleChange} />
      </LocalizationProvider>
    </>
  );
};

export const SubmitBtn = (props: SubmitBtnProps) => {
  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" size={"large"} fullWidth>
          {props.label}
        </Button>
      </Box>
    </>
  );
};
export const DeleteBtn = ({ deleteMethod }: DeleteBtnProps) => {
  return (
    <>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Button color="error" onClick={deleteMethod}>
          記事を削除
        </Button>
      </Box>
    </>
  );
};
