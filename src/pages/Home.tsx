import Dashboard from "../components/Dashboard";
import Paper from "@mui/material/Paper";
import Articles from "../components/Articles";

const Home: React.FC = () => {
  return (
    <Dashboard>
      <Paper sx={{ p: 3 }}>
        <Articles />
      </Paper>
    </Dashboard>
  );
};

export default Home;
