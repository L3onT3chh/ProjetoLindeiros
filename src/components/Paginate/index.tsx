import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { PaginateContainer } from './style';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface IPaginate {
    itemsPerPage: number;
    max: number;
    setPag: any;
    setLastPage?: any;
}

export const PaginatedItems = ({ itemsPerPage, max, setPag, setLastPage }: IPaginate) => {
    const pageCount = Math.ceil(max / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % max;
        setPag({min: newOffset, max: (newOffset + itemsPerPage)});

        if((event.selected + 1) === pageCount) {
            setLastPage(true);
        }else{
            setLastPage(false);
        }
    };

    return (
        <PaginateContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<AiOutlineRight color='#333'/>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                activeClassName="active"
                previousLabel={<AiOutlineLeft color='#333'/>}
                renderOnZeroPageCount={null}
                
            />
        </PaginateContainer>
    );
}