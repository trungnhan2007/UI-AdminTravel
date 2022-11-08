import { ColumnFilter } from "./ColumnFilter";
import Button from "react-bootstrap/Button";

export const COLUMNS = [
  {
    Header: "#",
    Footer: "#",
    accessor: "user_id",
    Filter: ColumnFilter,
    disableFilters: true,
  },

  {
    Header: "Name",
    Footer: "Name",
    accessor: "user_name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Email Id",
    Footer: "Email Id",
    accessor: "user_email",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "user_phone",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Username Id",
    Footer: "Username Id",
    accessor: "user_username",
    Filter: ColumnFilter,
    disableFilters: true,
  },

  {
    Header: "Avatar",
    Footer: "Avatar",
    accessor: "user_avatar",
    Filter: ColumnFilter,
    disableFilters: true,
  },

  {
    Header: "Edit",
    Footer: "Edit",
    accessor: "",
    Cell: (
      <Button size="sm" variant="outline-primary">
        Edit
      </Button>
    ),
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Delete",
    Footer: "Delete",
    accessor: "",
    Filter: ColumnFilter,
    disableFilters: true,

    Cell: (
      <Button size="sm" variant="outline-danger">
        Delete
      </Button>
    ),
  },
];
