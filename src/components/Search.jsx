import React from "react";
import { Button, TextField } from "@mui/material";

import { search as apiSearch } from "../api/api";
import ChuckSearchResult from "./ChuckSearchResult";
import SwapiSearchResult from "./SwapiSearchResult";

export default function Search() {
    const [query, setQuery] = React.useState(null)
    const [searching, setSearching] = React.useState(false)
    const [searchingChuck, setSearchingChuck] = React.useState(false)
    const [chuckResult, setChuckResult] = React.useState([])
    const [swapiResult, setSwapiResult] = React.useState([])
    const [totalRows, setTotalRows] = React.useState(0);


    const handleSearchFieldChange = (evt) => {
        let val = evt.target.value

        if (val == '') {
            val = null
        }

        setQuery(val)
    }

    const search = async (query, page) => {
        try {

            setSearching(true)
            if (page == 1) {
                setSearchingChuck(true)
            }

            var search = await apiSearch(query, page);

            if (search.status == 1) {

                if (page == 1) {
                    setSearchingChuck(false)
                    setChuckResult(search.data.chucks)
                }
                setTotalRows(search.data.swapi.totalItems)
                setSwapiResult(search.data.swapi.items)
            }

            setSearching(false)
            if (page == 1) {
                setSearchingChuck(false)
            }
        } catch (err) {
            alert(`An error has occurred while sending request: ${err.message}`)
        }
    }

    const handleSearchButtonClicked = () => {
        search(query, 1)
    }

    const handlePageChange = page => {
        if (totalRows > 0) {
            search(query, page);
        }
    };

    return <>
        <h3>Search</h3>
        <TextField id="outlined-basic" label="Search" onChange={handleSearchFieldChange} variant="outlined" />
        <br /><br />
        <Button variant="outlined" disabled={query == null || searching} onClick={handleSearchButtonClicked}>Search</Button>


        <div>

            <ChuckSearchResult chucks={chuckResult} search={query} />

            <br /><br />

            <SwapiSearchResult
                search={query}
                isLoading={searching}
                people={swapiResult}
                totalRows={totalRows}
                handlePageChange={handlePageChange} />

        </div>

    </>
}