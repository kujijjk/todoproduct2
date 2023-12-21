import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProduct.css'

const AddProduct = ({ createProduct }) => {
	const [title, setTitle] = useState('')
	const [year, setYear] = useState('')
	const [descr, setDescr] = useState('')
	const [image, setImage] = useState('')
	const navigate = useNavigate()

	function handleAddProduct() {
		if (!title || !year || !image || !descr) {
			alert('Не все поля заполнены!')
			return
		}
		const newProduct = {
			title,
			year,
			descr,
			image,
		}
		createProduct(newProduct)
		setTitle('')
		setYear('')
		setDescr('')
		setImage('')
		navigate('/')
	}
	return (
		<div className='add-product-container'>
			<h2>Add Product</h2>
			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Year'
				value={year}
				onChange={e => setYear(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Description'
				value={descr}
				onChange={e => setDescr(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Image'
				value={image}
				onChange={e => setImage(e.target.value)}
			/>
			<Button className='add-product-button' onClick={handleAddProduct}>
				Добавить
			</Button>
		</div>
	)
}

export default AddProduct
