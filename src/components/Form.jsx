import {
  Grid,
  Column,
  TextInput,
  Dropdown,
  Button,
  Stack,
} from "@carbon/react";
import { useState } from "react";
const Form = ({ setAllForm, allForm }) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFamily = (e) => {
    setFamily(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.selectedItem);
  };

  const handleSubmit = () => {
    setCount(count + 1);
    const addNewPerson = {
      rowId: count,
      name: name,
      family: family,
      status: status,
    };

    setAllForm([...allForm, addNewPerson]);
  };

  return (
    <Stack gap={6}>
      <Grid fullWidth>
        <Column lg={4}>
          <TextInput
            id="inputName"
            type="text"
            labelText="name"
            value={name}
            onChange={handleName}
          />
        </Column>
        <Column lg={4}>
          <TextInput
            id="inputFamily"
            type="text"
            labelText="family"
            value={family}
            onChange={handleFamily}
          />
        </Column>
      </Grid>
      <Grid fullWidth>
        <Column lg={8}>
          <Dropdown
            id="statusId"
            value={status}
            titleText="status"
            label="choose your status"
            items={["married", "single"]}
            onChange={handleStatus}
          />
        </Column>
      </Grid>
      <Grid fullWidth>
        <Column lg={4}>
          <Button kind="danger" onClick={handleSubmit}>
            Submit
          </Button>
        </Column>
      </Grid>
    </Stack>
  );
};

export default Form;
