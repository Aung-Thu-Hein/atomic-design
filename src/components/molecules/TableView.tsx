import { css } from '@emotion/react'

const TableView = (props: any) => {

  return (
    <>
      <table css={tableStyle}>
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
                  <td >{data.userId}</td>
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
      </table>
    </>
  )
}

const tableStyle = css({
  borderCollapse: "collapse",
  borderSpacing: 0,
  width: "100%",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#ddd",
  textAlign: "center",
  marginBottom: "10px",
  'tr:nth-of-type(even)': {
    backgroundColor: '#f2f2f2',
  },
  'th': {
    padding: "12px",
    backgroundColor: '#f2f2f2',
  },
  'td': {
    padding: "12px",
  }
});

export default TableView;
