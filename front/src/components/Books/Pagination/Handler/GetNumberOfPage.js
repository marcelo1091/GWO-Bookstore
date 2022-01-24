import React, { useEffect } from "react"
import axios from 'axios'
import '../../books.css'

const GetNumberOfPage = (props) => {

    const GetNumberOfPage = async () => {
        try {
            await axios.get(`http://localhost:3001/api/book`)
                .then(response => {

                    const { metadata } = response.data

                    if (response.status === 200) {

                        let y = 0
                        const pages = []
                        for (let x = metadata.total_records; x > 0; x -= metadata.records_per_page) {
                            y++
                            pages.push(y)
                        }
                        props.setNumberOfPages(pages)
                    }
                })
        } catch (error) {

        }
    }

    useEffect(GetNumberOfPage, [])

    return (
        <div className="pages">
            {props.numberOfPage.map(item => (
                <button className={item === props.pageNumber ? 'active' : ''} key={item} onClick={() => props.setPageNumber(item)}>{item}</button>
            ))}
            <span>z</span>
            <span>{`${props.numberOfPage.length}`}</span>
        </div>
    )
}

export default GetNumberOfPage