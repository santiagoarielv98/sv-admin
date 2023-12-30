import Button from "@mui/material/Button";
import useTheme from "../../hooks/use-theme";

const LandingView = () => {
  const { toggleColorMode } = useTheme();
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={toggleColorMode}>
        Toggle Color Mode
      </Button>
    </div>
  );
};

export default LandingView;
