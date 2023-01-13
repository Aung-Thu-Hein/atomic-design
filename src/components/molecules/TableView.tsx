import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableView = (props: any) => {

  return (
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
            props.pageData.map((data: any, index: any) => {
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
