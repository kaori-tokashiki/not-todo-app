import Box from '@mui/material/Box';
import { Favicon } from '../components/Favicon'

export const Introduction = (): JSX.Element => {
    return(
        <Box sx={{ py: 15 }}>
            <Box sx={{ py: 5 }}>
                <Favicon isAnimating size={200} />
            </Box>
            <h1>What's NTA ?</h1>
            <h2>NTA(Not To Do App) is the app for the people who cannot say the things they do not want to do</h2>
            <h3><a href="#declare">Let's get started !</a></h3>
        </Box>
    )
}