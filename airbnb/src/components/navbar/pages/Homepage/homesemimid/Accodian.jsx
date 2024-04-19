import { useState} from 'react'
import { questions } from './api.jsx'
import MyAccodian from './myAccodian.jsx';
const Accodian = () => {
    const [data, setdata] = useState(questions)
 

  return (
    <>
    {data.map((curr) => {
        const id = curr.id
        return  <MyAccodian key={id} {...curr}/>
    })}

    </>
  )
}

export default Accodian