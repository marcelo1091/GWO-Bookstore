import React, { useState, useEffect } from "react"
import axios from 'axios'
import Book from "./Book";
import Pagination from "./Pagination/Pagination";
import './books.css'


function Books() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(1)

    const getBooks = async () => {
        try {
            await axios.get(`http://localhost:3001/api/book?page=${pageNumber}`)
                .then(response => {
                    const { data } = response.data
                    if (response.status === 200) {
                        setIsLoading(false)
                        setItems(data)
                    }
                })
        } catch (error) {
            setIsLoading(false)
            setError(error)
        }
    }

    useEffect(getBooks, [pageNumber])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="books">
                    {items.map(item => (
                        <Book key={item.id} {...item} />
                    ))}

                </div>
                <Pagination pageNumber={pageNumber} setPageNumber={(value) => setPageNumber(value)} />
            </div>
        );
    }
}

export default Books