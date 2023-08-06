import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
export const mainListItems = (
  <>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="投稿一覧" />
      </ListItemButton>
    </Link>
    <Link to="/create">
      <ListItemButton>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="新規作成" />
      </ListItemButton>
    </Link>
    <Link to="/reports">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="レポート" />
      </ListItemButton>
    </Link>
  </>
);

export const secondaryListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="サイトを表示" />
    </ListItemButton>
  </>
);
