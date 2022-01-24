import React, { useEffect, useState } from "react"
import GetNumberOfPage from "./Handler/GetNumberOfPage"
import '../books.css'

const Pagination = (props) => {
    const [numberOfPage, setNumberOfPages] = useState([])

    const nextPage = () => props.setPageNumber(props.pageNumber === numberOfPage.length ? numberOfPage.length : props.pageNumber + 1)
    const previousPage = () => props.setPageNumber(props.pageNumber === 1 ? 1 : props.pageNumber - 1)

    return (
        <div className="paginationContainer">
            <button className={`arrow ${props.pageNumber === 1 ? 'hidden' : ''}`} onClick={previousPage}><span class="material-icons-outlined">keyboard_arrow_left</span>Previous</button>
            <div>
                <GetNumberOfPage
                    numberOfPage={numberOfPage}
                    setNumberOfPages={value => setNumberOfPages(value)}
                    setPageNumber={props.setPageNumber}
                    pageNumber={props.pageNumber}
                />
            </div>
            <button className={`arrow ${props.pageNumber === numberOfPage.length ? 'hidden' : ''}`} onClick={nextPage}>Next<span class="material-icons-outlined">keyboard_arrow_right</span></button>
        </div>
    )
}

export default Pagination