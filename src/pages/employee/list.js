import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useRouter } from 'next/router';

import TableView from "@/components/employee/tableView/TableView";
import Grid from "@/components/employee/grid/Grid";
import {wrapper} from "../../../store/store";
import {setAllEmployees, selectAllEmployeesState, setSingleEmployee} from "../../../store/slices/employeeSlice";
import config from "@/config/config";
import defaultPic from '../../../public/user.svg';
import { getEmployees } from "@/services/api/user.service";

const gridView = config.view.grid;
const tableView = config.view.table;

export default function List() {
  const router = useRouter();
  const dispatch = useDispatch();
  const employees = useSelector(selectAllEmployeesState);
  const [view, setView] = useState(gridView);

  // Switch view between grid view and table view
  const toggleView = () => {
    setView((prevState) => prevState === gridView ? tableView : gridView);
  }

  const goToAdd = () => {
    dispatch(setSingleEmployee(null));
    router.push('/employee/add');
  }

  return (
    <div className="container ">
      <div className="row text-end">
        <div className="col">
          <button type="button" className="btn btn-primary my-2" onClick={goToAdd}>
            Add Employee
          </button>
          {' '}
          <button type="button" className="btn btn-primary my-2" onClick={toggleView}>
            Toggle view
          </button>
        </div>
      </div>

      <div className="row">
        {view === tableView ? (
          <TableView employees={employees} defaultPic={defaultPic} />
        ) : (
          <Grid employees={employees} defaultPic={defaultPic} />
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async () => {
      // Fetch data from NodeJs API
      const data = await getEmployees();

      await store.dispatch(setAllEmployees(data.data.employees));
    }
);