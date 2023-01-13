import {FC, ComponentProps} from 'react';
import Pagination from 'react-paginate';
import TableView from './TableView';

type Props = ComponentProps<typeof TableView> 

const Paginate: FC<Props> = (props : Props)  => {

  return(
    <Pagination
        pageCount={Math.ceil(props.formData.length / props.perPage)} // total number of pages
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
  )
}

export default Paginate;
