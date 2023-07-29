import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@carbon/react";
const DataTable = ({ allForm, setAllForm }) => {
  const deletRow = (id) => {
    const newAllForm = allForm.filter((form) => {
      return form.rowId !== id;
    });

    // console.log(newAllForm);

    // console.log(newAllForm);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Family</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {allForm.map((row) => (
          <TableRow key={row.rowId}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.family}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <Button kind="ghost" onClick={() => deletRow(row.rowId)}>
                Delet
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
