import React, {useState} from 'react';
import {data} from './Data'

export const Birthday = () => {
const [people, setPeople] = useState(data)

  return (
    <div>
      <section>
        <h2 className='number'>{people.length} birthday today</h2>
        <List people={people} />
        <button className='clearButton' onClick={() => setPeople([])}>Clear All</button>
      </section>

    </div>
  )
}





const List = ({ people }) => {

  return (
  <div>
    {people.map(person =>{
        const { id, name, age, img } = person
        return(
            <div key={id} className='container'>
                <img src={img} alt="image" className='image'/>
                <div className='info'>
                    <h1>{name}</h1>
                    <h3>{age} years</h3>
                </div>
                
            </div>
        )
    })}
  </div>
  )
}




