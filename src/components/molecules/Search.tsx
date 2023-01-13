import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = (props : any) => {
  return (
    <Form.Control
      style={{ width: 400 }}
      className='mx-auto mt-3'
      placeholder="Search"
      type="text"
      name="query"
      onChange={props.setQuery}
    />
  )
}

export default Search;
