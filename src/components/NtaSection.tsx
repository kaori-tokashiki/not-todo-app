import { NtaCard } from './NtaCard'
import {Grid, Box} from '@mui/material';


export const NtaSection = (): JSX.Element => {
    return (
        <Box style={{ marginBottom: -200}}>
            {/* TODO： cards' position adjustment by #11. justifyContent="center" do not work */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
                {Array.from(Array(9)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <NtaCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}