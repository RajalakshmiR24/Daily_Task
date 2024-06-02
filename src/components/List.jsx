import React from 'react'

function List() {
    const Products = [
        {
            id:1,
            item: "Apple",
            stock: 10
        },
        {
            id:2,
            item: "Orange",
            stock: 20

        },
        {
            id:3,
            item: "Grapes",
            stock: 15

        }
    ]
  return (
    <>
    <ul>
    {Products.map((i, id) => (
        <li key = {id}>
        {i.item} {i.stock}
        </li>
  ))}
    </ul>
    
    </>
  )
}

export default List;