import Image from "next/image";

import ActionButtons from "@/components/employee/actionButtons/ActionButtons";

export default function Grid({employees, defaultPic}) {
  return (
    <div data-testid='grid-view' className='row'>
      {employees?.map((employee) => (
        <div key={employee._id} className="card col-3">
          <div className="text-center">
            <Image
              src={employee.photo ? employee.photo: defaultPic}
              height={144}
              width={144}
              alt="profile photo"
              className='mt-2'
            />
          </div>

          <div className="card-body">
            <p className="card-text mb-0">{employee.first_name} {' '} {employee.last_name}</p>
            <p className="card-text mb-0">{employee.email}</p>
            <p className="card-text mb-0">{employee.phone}</p>
            <p className="card-text mb-0">{employee.gender}</p>
            <ActionButtons selectedEmployee={employee} />
          </div>
        </div>
      ))}
    </div>
  )
}
