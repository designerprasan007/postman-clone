import { Grid, GridItem } from '@chakra-ui/react'

import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
const Home = () =>{
    return(
        <div>
            <Header />
            <Grid
                h='91vh'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={2}
                >
                <GridItem rowSpan={2} colSpan={1} bg='tomato'>
                    <LeftSide />
                </GridItem>
                <GridItem colSpan={4} bg='papayawhip' >

                </GridItem>
                </Grid>
        </div>
    )
}

export default Home