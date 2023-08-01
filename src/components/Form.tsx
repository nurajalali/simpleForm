import { Grid, Column, TextInput, Dropdown, Stack, Modal } from "@carbon/react";
import { useState, useEffect } from "react";
const Form = ({
  setAllForm,
  allForm,
  setIsOpen,
  formEditingId,
  isEdit,
  setCountRow,
  countRow,
}) => {
  const [name, setName] = useState("");
  // naem is missleading
  const [family, setFamily] = useState("");
  const [status, setStatus] = useState("");

  // is not optimize
  const editedRow = allForm.find((row) => row.rowId === formEditingId);

  useEffect(() => {
    if (isEdit) {
      setName(editedRow.name);
      setFamily(editedRow.family);
      setStatus(editedRow.status);
      console.log(editedRow.status);
    }
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleFamily = (e) => {
    setFamily(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.selectedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountRow(countRow + 1);
    const addNewPerson = {
      rowId: countRow,
      name: name,
      family: family,
      status: status,
    };

    if (isEdit) {
      const updateRow = allForm.toSpliced(formEditingId, 1, addNewPerson);
      setAllForm([...updateRow]);
    } else {
      setAllForm([...allForm, addNewPerson]);
      setName("");
      setFamily("");
      setStatus("");
      setIsOpen(false);
    }
  };

  return (
    <Modal
      open
      primaryButtonText="Add"
      secondaryButtonText="Cancel"
      onRequestSubmit={handleSubmit}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
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
          {status}
          <Column lg={8}>
            <Dropdown
              id="statusId"
              value={status}
              selectedItem={status}
              titleText="status"
              label="choose your status"
              items={["married", "single"]}
              onChange={handleStatus}
            />
          </Column>
        </Grid>
      </Stack>
    </Modal>
  );
};

export default Form;
