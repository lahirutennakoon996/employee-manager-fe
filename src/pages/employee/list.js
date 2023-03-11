import Image from 'next/image';

export default function List({data}) {
  console.log('test: ', data);

  const employees =  [
    {
      "_id": 1,
      "first_name": "Henri",
      "last_name": "Rodriguez",
      "email": "Darrin_Rippin@gmail.com",
      "phone": "+94771277218",
      "gender": "M",
      "photo": "https://randomuser.me/api/portraits/men/92.jpg",
      "__v": 0,
      "created_at": "2023-03-11T08:48:13.603Z",
      "updated_at,": "2023-03-11T08:48:13.603Z"
    },
    {
      "_id": 2,
      "first_name": "Lindsay",
      "last_name": "Herman",
      "email": "Ewald.Kunde@gmail.com",
      "phone": "+94771274218",
      "gender": "F",
      "photo": "https://randomuser.me/api/portraits/men/30.jpg",
      "__v": 0,
      "created_at": "2023-03-11T08:48:13.603Z",
      "updated_at,": "2023-03-11T08:48:13.603Z"
    },
    {
      "_id": 5,
      "first_name": "Simeon",
      "last_name": "Russel",
      "email": "Fabiola_Heidenreich@yahoo.com",
      "phone": "+94771277682",
      "gender": "M",
      "photo": "https://randomuser.me/api/portraits/men/81.jpg",
      "__v": 0,
      "created_at": "2023-03-11T08:48:13.603Z",
      "updated_at,": "2023-03-11T08:48:13.603Z"
    },
    {
      "_id": 6,
      "first_name": "Kenyon",
      "last_name": "Fahey",
      "email": "Lia_Purdy@hotmail.com",
      "phone": "+94771277683",
      "gender": "F",
      "__v": 0,
      "created_at": "2023-03-11T08:48:13.603Z",
      "updated_at,": "2023-03-11T08:48:13.603Z"
    },
    ]

  return (
    <div className="container ">
      <div className="row text-end">
        <div className="col">
          <button type="button" className="btn btn-primary my-2">Switch view</button>
        </div>
      </div>

      <div className="row">
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="text-center">
                {employee.photo && (
                  <Image
                    src={employee.photo}
                    height={144}
                    width={144}
                    alt="profile photo"
                  />
                )}
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
      </div>

      <button className="btn btn-primary m-3">Sling Academy</button>
      <button className="btn btn-warning m-3">Hello</button>

      <div className="dropdown m-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Option 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

// This gets called on every request
/*
export async function getServerSideProps() {
  // Fetch data from NodeJs API
  const res = await fetch(`http://localhost:5001/api/employee?limit=10&page=1&column=-1&order=asc&search=`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}*/
