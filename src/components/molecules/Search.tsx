// // import Form from 'react-bootstrap/Form';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { InputTextField } from '@/components/molecules/InputTextField'

// const Search = (props : any) => {
//   return (

//     <InputTextField
//             label="User Name"
//             name="userName"
//             type="text"
//             placeholder='Search'
//           />

//     // <Form.Control
//     //   style={{ width: 400 }}
//     //   className='mx-auto mt-3'
//     //   placeholder="Search"
//     //   type="text"
//     //   name="query"
//     //   onChange={props.setQuery}
//     // />
//   )
// }

// export default Search;


import {css} from '@emotion/react';

const Search = (props: any) => {
  return(
    <div css={searchWrapper}>
      <input
      css={searchStyle}
      type="text"
      placeholder="Search"
      name="query"
      onChange={props.search}
    />
    </div>
    
  )
}

const searchStyle = css({
  width: "400px",
  padding: "7px",
  borderRadius: "4px",
  margin: "15px",
})

const searchWrapper= css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
})

export default Search;
