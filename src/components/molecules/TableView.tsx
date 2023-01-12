import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

type User = {
  userId: string;
  userName: string;
  gender: string;
  email: string;
  address: string;
  birthday: string;
  age: number;
  userRole: string;
}

// function search(username: string, formData: User[]): any {

//   if (!username) {
//     return formData;
//   } else {
//     let results = formData.filter(name => name.userName === username);
//     return results
//   }
// }

const TableView = () => {

  // const [query, setQuery] = useState<string>("");
  const [formData, setFormData] = useState<User[]>([]);
  // const [page, setPage] = useState<number>(0);
  // const [perPage, setPerPage] = useState<number>(10);

  // const searchName = search(query, formData);

  // const pageData = searchName.slice(page * perPage, (page + 1) * perPage);

  // const navigate = useNavigate();
  // const navigateToForm = () => navigate('/');

  // const handlePageChange = (page: any) => {
  //   setPage(page.selected);
  // };



  useEffect(() => {
    let data: any[] = [];
    const saved = localStorage.getItem("Form Data");
    if (saved) {
      data = JSON.parse(saved);
      data.sort((a, b) => {
        let usernameA: string = a.userName.toLowerCase()
        let usernameB: string = b.userName.toLowerCase()
        if (usernameA < usernameB) return -1
        else if (usernameA > usernameB) return 1
        else return 0
      })
      console.log("Data: ", data);
      setFormData(data)
    }
  }, [])


  return(
    <>
      <Table striped>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>User Role</th>
          </tr>
        </thead>
        <tbody>
          {
            formData.map((data: any, index: any) => {
              return (
                <tr key={index}>
                  <td>{data.userId}</td>
                  <td>{data.userName}</td>
                  <td>{data.gender}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                  <td>{data.birthday}</td>
                  <td>{data.userRole}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableView;