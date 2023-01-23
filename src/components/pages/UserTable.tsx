//react
import { useEffect, useState } from 'react';

//molecules
import TableView from "@/components/molecules/TableView";
import Navigate from "@/components/molecules/Navigate";
import Paginate from "@/components/molecules/Paginate";
import Search from "@/components/molecules/Search";

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

const UserTable = () => {

  const [query, setQuery] = useState<string>("");
  const [formData, setFormData] = useState<User[]>([]);
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(5);
  const [filterItem, setFilterItem] =  useState<User[]>(formData);
  const [pageCount, setPageCount] = useState<number>(Math.ceil(formData.length / perPage));

  //const searchName = search(query);

  const pageData = formData.slice(page * perPage, (page + 1) * perPage);

  const handlePageChange = (page: any) => {
    setPage(page.selected);
  };

  function search(e: any): any {
    
    const username = e.target.value;
    setQuery(username);

      let results = formData.filter(name => name.userName.includes(username));
      setFilterItem(results);
      setPageCount(Math.ceil(filterItem.length / perPage));
      setPage(0);
  }

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

  return (
    <>
      <Search search={search} />
      <TableView pageData={pageData} />
      <Paginate
        pageCount={pageCount}
        handlePageChange={handlePageChange}
        //formData={page}
        //perPage={perPage}
      />
      <Navigate />
    </>
  )
}

export default UserTable;


// //react
// import { useEffect, useState } from 'react';

// //molecules
// import TableView from "@/components/molecules/TableView";
// import Navigate from "@/components/molecules/Navigate";
// import Paginate from "@/components/molecules/Paginate";
// import Search from "@/components/molecules/Search";

// type User = {
//   userId: string;
//   userName: string;
//   gender: string;
//   email: string;
//   address: string;
//   birthday: string;
//   age: number;
//   userRole: string;
// }

// const UserTable = () => {

//   const [formData, setFormData] = useState<User[]>([]);

//   useEffect(() => {
//     let data: any[] = [];
//     const saved = localStorage.getItem("Form Data");
//     if (saved) {
//       data = JSON.parse(saved);
//       data.sort((a, b) => {
//         let usernameA: string = a.userName.toLowerCase()
//         let usernameB: string = b.userName.toLowerCase()
//         if (usernameA < usernameB) return -1
//         else if (usernameA > usernameB) return 1
//         else return 0
//       })
//       console.log("Data: ", data);
//       setFormData(data)
//     }
//   }, [])

//   return (
//     <>
//       <TableView pageData={formData} />
//       <Navigate />
//     </>
//   )
// }

// export default UserTable;
