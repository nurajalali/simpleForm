import { Search, Stack, Grid, Column } from "@carbon/react";
import Form from "./Form";
import DataTable from "./DataTable";
import { useState } from "react";
const Home = () => {
  const [allForm, setAllForm] = useState([]);
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
              onChange={() => {}}
            />
          </Column>
        </Grid>
        <Form setAllForm={setAllForm} allForm={allForm} />
        <DataTable allForm={allForm} setAllForm={setAllForm} />
      </Stack>
    </div>
  );
};

export default Home;
