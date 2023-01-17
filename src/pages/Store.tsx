import React from 'react'
import storeItems from '../data/items.json'
import {StoreItem} from '../components/StoreItem'


export const Store = () => {
  return (
  <>
    <div>Store</div>
    <div className='grids grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        {storeItems.map( item =>(
            <div key={item.id}>
                <StoreItem {...item} />
            </div>
        ))}
    </div>
  </>
    
  )
}
