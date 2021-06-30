import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getfake, selectCount } from '../store/count/productSlice'
import Listproducts from './components/Listproducts'
function Home() {
     const dispatch = useDispatch()
     const donne = useSelector(selectCount)

    useEffect(() => {
      dispatch(getfake())
    }, [dispatch])


    return (
        <div> 
       
            
        <Listproducts/>
          
               
      </div>
    )
}

export default Home
