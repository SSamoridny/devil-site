import Banner from '../components/Banner'
import Art from '../views/Art'
import Collabs from '../views/Collabs'
import Genesis from '../views/Genesis'
import Babies from '../views/Babies'

export default function Header(){
    return(
        <div>
            <Banner />
            <Art />
            <Collabs />
            <Genesis />
            <Babies />
        </div>
    )
}
