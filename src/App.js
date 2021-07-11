import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const  [color,  setColor]  = useState('');
  const [error, setError]= useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = e => {
      e.preventDefault();

    try{
        let colors = new Values(color).all(10);
        setList(colors)
        setError(false);

    }catch(error){
        setError(true);
        console.log(error);
    }


  }


  return (
      <>
        <section className='container'>
            <h3>Color generator</h3>

            <form onSubmit={handleSubmit}>
                <input type='text' className={`${error ? 'error' : null }`} placeholder='#f15025' value={color} onChange={(e) => setColor(e.target.value)}/>

                <button className='btn' type='submit'>Submit</button>
            </form>
        </section>

        <section className='colors'>
            {
                list.map((color, idx) => {

                    const  hex = color.hex;

                    return(
                        <SingleColor key={idx} {...color} idx={idx} hexColor={hex}/>
                    )
                })
            }
        </section>
      </>
  )
}

export default App
