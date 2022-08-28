import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../../service/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()   
    useEffect(() => {
        setLoading(true)

        getDocs (collection(db, 'products')).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data() 
                console.log(data)
                return { id: doc.id, ...data}
            })
            console.log(productsAdapted)
        }). catch (error=> {
            console.log (error)
        }).finally (()=>
            setLoading(false))
        })

}, [categoryId]),

        //const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        //asyncFunction(categoryId).then(response => {
        //    setProducts(response)
        //}).catch(error => {
        //    console.log(error)
        //}).finally(() => {
        //    setLoading(false)
        //})  
    

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
          
            <ItemList products={products} />
        </div>
    )


export default ItemListContainer