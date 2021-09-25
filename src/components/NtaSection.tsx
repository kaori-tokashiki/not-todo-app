import { NtaCard } from './NtaCard'
import Grid from '@mui/material/Grid';



export const NtaSection = (): JSX.Element => {
    return (
        <>
            {/* TODO： cards' position adjustment by #11. justifyContent="center" do not work */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <NtaCard />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}