import { FC} from 'react'; 
import { Link, Routes, Route } from 'react-router-dom'; 
import Content from '../allPages/StartPageContent';
import SinglePage from '../allPages/singlePage';
import Checkout from '../allPages/checkOut';

interface Props{

}


const RenderView: FC<Props> = (props) => {
    return( 

        <Routes> 
            <Route path="/" element={ <Content /> } />
            <Route path="/:productId" element={ <SinglePage /> } />
            <Route path="/" element={ <Checkout /> } />

        </Routes>
    )
}


export default RenderView