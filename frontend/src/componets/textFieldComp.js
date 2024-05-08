import { TextField } from "@mui/material";
const TextFieldComp = (props) => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      onChange={(e) => props.inputModifier(props.type, e.target.value)}
      fullWidth
      style={{ marginBottom: "1em" }}
    />
  );
};
export default TextFieldComp;
