import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Container ,Row } from 'react-bootstrap'
import { selectCount } from '../../store/count/productSlice'

function Listproducts(setcurrentId) {
    const donne = useSelector(selectCount)

    return (
        <div> 
                <Container>
            {donne.map((done)=> (
             
                 <Row key={done.id} md="1">
             
               
                     <Product donne={done}  />

                     </Row>
            
                
            
            ))}
                 </Container>

                 
        </div>
    )
}

export default Listproducts
