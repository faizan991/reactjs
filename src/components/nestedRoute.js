import { useParams } from 'react-router-dom'

const NestedRoute = () => {

    const peram = useParams()
    const value = peram.dynamic ? peram.dynamic : '';
  return ( <div> this is nested rout page {value} </div> )
}

export default NestedRoute
