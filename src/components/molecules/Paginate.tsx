import { FC, ComponentProps } from 'react';
import Pagination from 'react-paginate';
import TableView from './TableView';
import { css } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = ComponentProps<typeof TableView>

const Paginate: FC<Props> = (props: Props) => {

  return (
    <div css={paginate}>
      <Pagination
        pageCount={Math.ceil(props.formData.length / props.perPage)}
        onPageChange={props.handlePageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>

  )
}

const paginate= css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export default Paginate;