import Image from "next/image";

import profilePic from '../../../../public/user.svg';

export default function TableView({employees}) {
  return (
    <table className="table table-bordered">
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
                src={employee.photo ? employee.photo : profilePic}
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
          <td></td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
