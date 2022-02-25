import Header from '../../partials/components/Header/Header'
import LeftSide from '../../partials/components/LeftSide/LeftSide'
const Home = () =>{
    return(
        <div>
            <Header />
            <div className='row'>
                <div className='col-md-3 col-lg-3'>
                    <LeftSide />
                </div>
                <div className='col-md-9 col-lg-9'>

                </div>
            </div>
           
        </div>
    )
}

export default Home