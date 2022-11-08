import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "#",
    Footer: "#",
    accessor: "enId",
    Filter: ColumnFilter,
    //disableFilters: true,
  },

  {
    Header: "Name",
    Footer: "Name",
    accessor: "enNamecompany",
    Filter: ColumnFilter,
  },
  {
    Header: "Email Id",
    Footer: "Email Id",
    accessor: "enEmail",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "enPhone",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Postalcode",
    accessor: "enPostalcode",
    Filter: ColumnFilter,
  },
  {
    Header: "Address",
    Footer: "Address",
    accessor: "enAddress",
    Filter: ColumnFilter,
  },
  {
    Header: "District",
    Footer: "District",
    accessor: "enDistrict",
    Filter: ColumnFilter,
  },

  {
    Header: "Country",
    Footer: "Country",
    accessor: "enCountry",
    Filter: ColumnFilter,
  },

  {
    Header: "Actions",
    Footer: "Actions",
    accessor: "",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of  Birth",
        Footer: "Date of  Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
