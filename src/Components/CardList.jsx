import React, {useEffect,useState} from 'react'
import Bootsstrap from './Bootsstrap'

const CardList = ({data}) => {
    console.log(data)

    const [card, setCard] = useState([])

    useEffect(()=>{
    setCard(data)
})

  return (
    <div className='container '>
        <div className="row" >
            {card.map((elmt, index)=>(
            <>
            <div key={index} className="col" >
                <Bootsstrap city={elmt}/>

            </div> 

            </>
            
           ) )}
            </div>
        </div>

     
  )
}

export default CardList
