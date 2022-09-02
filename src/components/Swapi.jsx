import React, { useState, useEffect } from "react";
import { getChuckCategories, getPeople } from "../api/api";
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Gender',
        selector: row => row.gender,
    },
];

export default function Swapi(props) {

    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalRows, setTotalRows] = useState(0);
    // const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        //load from api
        try {
            fetchPeople(1)
        } catch (err) {
            alert('Error fetching categories: ' + err.message)
            setIsLoading(false)
        }

    }, [isLoading])

    const fetchPeople = async page => {
        try {
            var response = await getPeople(page);
            if (response.status == 1) {
                setPeople(response.data.items)
                setTotalRows(response.data.totalItems);
            }
            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            alert(`Error fetching people: ${err.message}`)
        }
    }

    const handlePageChange = page => {
        fetchPeople(page);
    };

    const tableOptions = {
        noRowsPerPage: true
    }

    return <div>
        <h3>Swapi People</h3>
        <DataTable
            title="Star Wars People"
            columns={columns}
            data={people}
            progressPending={isLoading}
            pagination
            paginationServer
            paginationComponentOptions={tableOptions}
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange}
        />
    </div>
}