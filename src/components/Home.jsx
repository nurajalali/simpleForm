import { Search, Stack, Grid, Column, Button } from "@carbon/react";
import Form from "./Form";
import DataTable from "./DataTable";

import { Add } from "@carbon/react/icons";
import { useState } from "react";
const Home = () => {
  const [allForm, setAllForm] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formEditingId, setFormEditingId] = useState(null);

  const [countRow, setCountRow] = useState(0);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const addButton = () => {
    setIsEdit(false);
    setIsOpen(true);
  };

  return (
    <div>
      <Stack gap={6}>
        <Grid>
          <Column lg={{ span: 8, start: 4 }}>
            <Search
              size="lg"
              placeholder="Find your items"
              labelText="Search"
              closeButtonLabelText="Clear search input"
              onChange={handleSearch}
            />
          </Column>
          <Column>
            <Button
              hasIconOnly
              iconDescription="Icon Description"
              renderIcon={Add}
              onClick={addButton}
            />
          </Column>
        </Grid>
        {isOpen ? (
          <Form
            setAllForm={setAllForm}
            allForm={allForm}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            formEditingId={formEditingId}
            setIsEdit={setIsEdit}
            countRow={countRow}
            setCountRow={setCountRow}
          />
        ) : null}
        <DataTable
          allForm={allForm}
          setAllForm={setAllForm}
          searchValue={searchValue}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isEdit={isEdit}
          setFormEditingId={setFormEditingId}
          setIsEdit={setIsEdit}
          formEditingId={formEditingId}
        />
      </Stack>
    </div>
  );
};

export default Home;
