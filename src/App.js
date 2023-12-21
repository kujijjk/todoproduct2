import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import axios from 'axios'
import './index.css'

const App = () => {
	const API = 'http://localhost:8000/products'

	const [products, setProducts] = useState([])
	const [oneProduct, setOneProduct] = useState(null)

	async function readProduct() {
		try {
			const response = await axios(API)
			const data = response.data
			setProducts(data)
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error)
		}
	}

	async function getOneProduct(id) {
		const { data } = await axios(`${API}/${id}`)
		setOneProduct(data)
	}

	async function createProduct(newProduct) {
		await axios.post(API, newProduct)
		readProduct()
	}

	async function deleteProduct(id) {
		await axios.delete(`${API}/${id}`)
		readProduct()
	}
	async function editProduct(id, editedProduct) {
		await axios.patch(`${API}/${id}`, editedProduct)
		readProduct()
	}
	async function productDetails(id) {
		await axios(API)
		readProduct()
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<ProductList
								readProduct={readProduct}
								products={products}
								deleteProduct={deleteProduct}
								productDetails={productDetails}
							/>
						}
					/>
					<Route
						path='/add'
						element={<AddProduct createProduct={createProduct} />}
					/>
					<Route
						path='/edit/:id'
						element={
							<EditProduct
								getOneProduct={getOneProduct}
								oneProduct={oneProduct}
								editProduct={editProduct}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
