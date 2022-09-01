import React, { useState, useEffect } from "react";
import { getChuckCategories } from "../api/api";

export default function Chuck(props) {

    const [categories, setCategories] = useState([]);

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

    return <div>
        <h3>Chuck categories</h3>

        {isLoading && <div>Please wait...</div>}

        {!isLoading && <ul>
            {categories.map(category => (
                <h5>{category}</h5>
            ))}
        </ul>}

    </div>
}