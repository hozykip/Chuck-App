import React from "react";
import DataTable from "react-data-table-component";

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

const tableOptions = {
    noRowsPerPage: true
}

export default function SwapiSearchResult({ people, search, isLoading, totalRows, handlePageChange, ...props }) {
    return <React.Fragment>
        {search && <DataTable
            title={`Star Wars search results for term '${search}'`}
            columns={columns}
            data={people}
            progressPending={isLoading}
            pagination
            paginationServer
            paginationComponentOptions={tableOptions}
            paginationTotalRows={totalRows}
            onChangePage={handlePageChange} />}
    </React.Fragment>
}