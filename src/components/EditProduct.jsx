import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditProduct.css'

const EditProduct = ({ oneProduct, getOneProduct, editProduct }) => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [title, setTitle] = useState('')
	const [year, setYear] = useState('')
	const [descr, setDescr] = useState('')
	const [image, setImage] = useState('')

	useEffect(() => {
		getOneProduct(id)
	}, [])

	useEffect(() => {
		if (oneProduct) {
			setTitle(oneProduct.title)
			setYear(oneProduct.year)
			setDescr(oneProduct.descr)
			setImage(oneProduct.image)
		}
	}, [oneProduct])

	function handleSaveChanges() {
		const editedProduct = {
			title,
			year,
			descr,
			image,
		}
		editProduct(id, editedProduct)
		navigate('/')
	}

	return (
		<div className='edit-product-container'>
			<h2>Edit Product</h2>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				className='input-field'
			/>
			<input
				type='number'
				value={year}
				onChange={e => setYear(e.target.value)}
				className='input-field'
			/>
			<input
				type='text'
				value={descr}
				onChange={e => setDescr(e.target.value)}
				className='input-field'
			/>
			<input
				type='text'
				value={image}
				onChange={e => setImage(e.target.value)}
				className='input-field'
			/>
			<Button onClick={handleSaveChanges} className='save-changes-button'>
				Сохранить
			</Button>
		</div>
	)
}

export default EditProduct
