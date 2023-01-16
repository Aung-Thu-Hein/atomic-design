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

function search(username: string, formData: User[]): any {

  if (!username) {
    return formData;
  } else {
    let results = formData.filter(name => name.userName.includes(username));
    return results
  }
}

const UserTable = () => {

  const [query, setQuery] = useState<string>("");
  const [formData, setFormData] = useState<User[]>([]);
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(5);

  const searchName = search(query, formData);

  const pageData = searchName.slice(page * perPage, (page + 1) * perPage);

  const handlePageChange = (page: any) => {
    setPage(page.selected);
  };

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
      <Search setQuery={(e:any) => setQuery(e.target.value)}/>
      <TableView pageData={pageData}/>
      <Paginate 
        handlePageChange={handlePageChange} 
        formData={formData}
        perPage={perPage}/>
      <Navigate />
    </>
  )
}

export default UserTable;
