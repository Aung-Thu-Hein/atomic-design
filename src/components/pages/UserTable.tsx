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
  const [pageCount, setPageCount] = useState<number>(0);

  const pageData = formData.slice(page * perPage, (page + 1) * perPage);

  const handlePageChange = (page: any) => {
    setPage(page.selected);
  };

  const search = (e: any): any => {

    const username = e.target.value;
    setQuery(username);
    
    let results = formData.filter(name => name.userName.includes(username));
    setFormData(results);
    
    setPageCount(Math.ceil(formData.length / perPage));
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
      setFormData(data);
      setPageCount(Math.ceil(data.length / perPage));
      console.log("PC::", pageCount);
    }
  }, [])

  return (
    <>
      <Search search={search} />
      <TableView pageData={pageData} />
      <Paginate
        PageCount={pageCount}
        handlePageChange={handlePageChange}
      />
      <Navigate />
    </>
  )
}

export default UserTable;
