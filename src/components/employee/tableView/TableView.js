import Image from "next/image";
import ActionButtons from "@/components/employee/actionButtons/ActionButtons";

export default function TableView({employees, defaultPic}) {
  return (
    <table className="table table-bordered" data-testid="table-view">
      <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Gender</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>

      <tbody className="table-group-divider">
      {employees?.map((employee) => (
        <tr key={employee._id}>
          <td className="text-center">
              <Image
                src={employee.photo ? employee.photo : defaultPic}
                height={144}
                width={144}
                alt="profile photo"
              />
          </td>
          <td>{employee.first_name}</td>
          <td>{employee.last_name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.gender}</td>
          <td>
            <ActionButtons selectedEmployee={employee} />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
