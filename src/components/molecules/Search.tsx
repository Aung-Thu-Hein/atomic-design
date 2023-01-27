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
