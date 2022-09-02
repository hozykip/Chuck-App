import React from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'Joke',
        selector: row => row.value,
    },
    {
        name: 'Date Updated',
        selector: row => row.updated_at,
    },
];


export default function ChuckSearchResult({ chucks, search, ...props }) {
    return <React.Fragment>
        {search && <DataTable
            columns={columns}
            data={chucks}
            title={`Chuck Norris search results for term '${search}'`}
            pagination />}
    </React.Fragment>
}