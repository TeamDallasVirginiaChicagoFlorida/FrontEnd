import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./App.css";

const PER_PAGE = 12;

function App() {
    const [currentPage, setCurrentPage] = useState(0)
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchData();
    }, []);

    function fetchData() {
        fetch("https://graceshoperbackenddallasvirginiachicagof.onrender.com/api")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    }
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
    const offset = currentPage * PER_PAGE
    const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(( res, index ) => <img key={index} src={res.thumbnailUrl} />);

    const pageCount = Math.ceil(data.length / PER_PAGE);

    return (
        <div ClassName="App">
            <h1>React Pagination</h1>
            {currentPageData}

            <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"→ Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination_link"}
            nextLinkClassName={"pagination_link"}
            disabledClassName={"pagination_link--disabled"}
            activeClassName={"pagination_link--active"}
            />
        </div>
    )
}


export default App;





















export default App;