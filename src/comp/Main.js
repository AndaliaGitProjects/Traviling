import Imag from './../images/130726-063-Denali-National-Park.webp'
import loc from '../images/location-pin-svgrepo-com.svg'
import Data from '../Data/Location'
const Items = function(props){
    return (
        <section>
            <div className='column-1-3'>
                <div className='left'>
                    <img src={Imag}  alt="" />
                </div>
                <div className='right'>
                    <div>
                      <img src={loc} alt="" /> <span>{props.data.location}</span> <a href="">View on google map</a>
                      <h1>{props.data.Site}</h1>
                    </div>
                    <div>
                        <h3>{props.data.statrdate} - {props.data.enddate}</h3>
                        <p>{props.data.locationDes}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const locationsCard = Data.map(function(item){
    return <Items data={item} key={item.id}></Items>
})


console.log(locationsCard)
const Main = function(){
    return(
        <main>
            {locationsCard}
        </main>
    )
}

export default Main