import Image from "next/image";

export default function Grid({employees}) {
  return (
    <>
      {employees?.map((employee) => (
        <div key={employee._id} className="card col-3" >
          {employee.photo && (
            <Image
              src={employee.photo}
              height={144}
              width={144}
              alt="profile photo"
            />
          )}

          <div className="card-body">
            <p className="card-text mb-0">{employee.first_name} {' '} {employee.last_name}</p>
            <p className="card-text mb-0">{employee.email}</p>
            <p className="card-text mb-0">{employee.phone}</p>
            <p className="card-text mb-0">{employee.gender}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </>
  )
}
