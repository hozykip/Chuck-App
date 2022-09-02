import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import { getChuckCategories, getRandomJoke } from "../api/api";
import RandomJokeModal from "./RandomJokeModal";



export default function Chuck(props) {

    const [categories, setCategories] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);
    const [randomCategory, setRandomCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //load from api
        try {
            const fetchCategories = async () => {
                var response = await getChuckCategories();
                setIsLoading(false)
                if (response.status == 1) {
                    setCategories(response.data)
                }
            }

            fetchCategories()
        } catch (err) {
            alert('Error fetching categories: ' + err.message)
            setIsLoading(false)
        }

    }, [isLoading])

    const fetchRandomJoke = category => {
        setRandomCategory(category)
        // var response = await getRandomJoke(category);
        // if (response.status == 1) {
        //     setRandomJoke(response.data)
        // }
    }

    const handleCloseModal = () => setRandomCategory(null)

    return <div>
        <h3>Chuck categories</h3>

        {isLoading && <div>Please wait...</div>}

        <RandomJokeModal category={randomCategory} handleClose={handleCloseModal} />

        {!isLoading && <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {categories.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <IconButton title="Get Random Joke" edge="end" onClick={() => fetchRandomJoke(value)} aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemText id={labelId} primary={`${value}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>}

    </div>
}