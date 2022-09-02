import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getRandomJoke } from "../api/api";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function RandomJokeModal({ handleClose, category, ...props }) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const handleClose = () => setOpen(false);
    const [randomJoke, setRandomJoke] = React.useState(null);

    React.useEffect(() => {

        if (category != null) {
            fetchRandomJoke(category)
        }

        return () => {
            setRandomJoke(null)
        }
    }, [category])

    const fetchRandomJoke = async category => {
        var response = await getRandomJoke(category);
        if (response.status == 1) {
            setRandomJoke(response.data)
        }
    }

    return (
        <div>
            <Modal
                open={category != null}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Random joke for category '{category}'
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {randomJoke == null ? <p>Fetching random joke...</p> : <></>}
                        {randomJoke && <>{randomJoke.value}</>}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
