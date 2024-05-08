import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
const RadioInputComp = (props) => {
  const [radioData, setRadioData] = useState([]);

  useEffect(() => {
    async function call() {
      try {
        const respData = await (await fetch(props.url)).json();
        setRadioData(respData);
      } catch (error) {
        alert(`Error : ${error.message}`);
      }
    }
    call();
    return () => {};
  }, [props.url]);
  return (
    <RadioGroup
      onChange={(e) => props.inputModifier(props.type, e.target.value)}
    >
      {radioData.map((obj, pos) => (
        <FormControlLabel
          key={obj.id || pos}
          value={obj.id || obj.num_of_wheels}
          control={<Radio />}
          label={props.type === "wheels" ? obj.num_of_wheels : obj.name}
        />
      ))}
    </RadioGroup>
  );
};
export default RadioInputComp;
