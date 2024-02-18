import { Alert } from "@mui/material";

let Error = (props) => {
  return (
    <Alert sx={{ backgroundColor: "#ff5f5f34" }} severity="error">
      {props.err}{" "}
    </Alert>
  );
};
export default Error;
