import { FC} from 'react'; 
import { Link, Routes, Route } from 'react-router-dom'; 
import Content from '../allPages/StartPageContent';
import SinglePage from '../allPages/singlePage';
import CheckOut from '../allPages/checkOut';
import Admin from '../allPages/admin';

interface Props{}


const RenderView: React.FC<Props> = (props) => {
    return( 

        <Routes> 
            <Route path="/" element={ <Content /> } />
            <Route path="/:productId" element={ <SinglePage /> } />
            <Route path="/checkOut" element={ <CheckOut /> } />
            <Route path="/admin" element={ <Admin /> } />

        </Routes>
    )
}


export default RenderView