import Image from 'next/image';
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import TableView from "@/components/employee/tableView/TableView";
import Grid from "@/components/employee/grid/Grid";
import {wrapper} from "../../../store/store";
import { setAllEmployees, selectAllEmployeesState } from "../../../store/slices/employeeSlice";
import config from "@/config/config";

const gridView = config.view.grid;
const tableView = config.view.table;

export default function List() {
  const employees = useSelector(selectAllEmployeesState);
  const [view, setView] = useState(gridView);

  // Switch view between grid view and table
  const toggleView = () => {
    setView((prevState) => prevState === gridView ? tableView : gridView);
  }

  console.log('employees: ', employees);

  return (
    <div className="container ">
      <div className="row text-end">
        <div className="col">
          <button type="button" className="btn btn-primary my-2" onClick={toggleView}>
            Toggle view
          </button>
        </div>
      </div>

      <div className="row">
        {view === tableView ? (
          <TableView employees={employees} />
        ) : (
          <Grid employees={employees} />
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // Fetch data from NodeJs API
      const res = await fetch(`http://localhost:5001/api/employee?limit=0&page=1&column=-1&order=asc&search=`)
      const data = await res.json();

      await store.dispatch(setAllEmployees(data.data.employees));
      console.log("State on server: ", store.getState());
    }
);