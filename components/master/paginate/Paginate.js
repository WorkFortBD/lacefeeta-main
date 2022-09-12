import React from 'react'
import ReactPaginate from 'react-paginate';
import propTypes from 'prop-types';

function Paginate(props) {
    const { pageCount, onPageChange, currentPage, perPage, totalItemCount } = props;

    if( totalItemCount > perPage ) {
        return (
            <div className="w-100 px-3 px-sm-2 mt-3">
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <ReactPaginate
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        initialPage={currentPage - 1}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={2}
                        containerClassName={'react-pagination'}
                        activeClassName={'active'}
                        disableInitialCallback
                    />
                </div>
            </div>
        )
    } else {
        return null
    }
}

Paginate.prototype = {
    pageCount: propTypes.number,
    onPageChange: propTypes.func,
    currentPage: propTypes.number,
    perPage: propTypes.number,
    totalItemCount: propTypes.number
}

export default Paginate;
