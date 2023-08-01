import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@carbon/react";

const DataTable = ({
  allForm,
  searchValue,
  setIsOpen,
  setFormEditingId,
  setIsEdit,
  setAllForm,
}) => {
  const deleteRow = (id) => {
    const newAllForm = allForm.filter((form) => form.rowId !== id);
    setAllForm(newAllForm);
  };

  const editRow = (id) => {
    setIsEdit(true);
    setIsOpen(true);
    setFormEditingId(id);
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
        {allForm.map((row) => {
          const search = (
            <TableRow key={row.rowId}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.family}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button kind="ghost" onClick={() => deleteRow(row.rowId)}>
                  Delete
                </Button>
              </TableCell>
              <TableCell>
                <Button kind="ghost" onClick={() => editRow(row.rowId)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          );
          if (searchValue === "") {
            return search;
          } else if (row.name.includes(searchValue)) {
            return search;
          }
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
