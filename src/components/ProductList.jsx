import React, { useEffect, useState } from 'react'
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	Modal,
} from '@mui/material'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import './ProductList.css'

const ProductList = ({ readProduct, products, deleteProduct }) => {
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		readProduct()
	}, [])

	const productDetails = product => {
		setSelectedProduct(product)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setSelectedProduct(null)
		setIsModalOpen(false)
	}

	return (
		<div className='product-list-container'>
			<h2>Product List</h2>
			{Array.isArray(products) &&
				products.map((item, index) => (
					<Card key={index} className='product-card'>
						<CardMedia
							className='product-image'
							component='img'
							image={item.image}
							alt='product image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								className='product-title'
							>
								Название: {item.title}
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								className='product-description'
							>
								Описание: {item.descr}
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								className='product-year'
							>
								Год: {item.year}
							</Typography>
						</CardContent>
						<CardActions className='product-actions'>
							<Link to={`edit/${item.id}`}>
								<Button className='action-button'>Изменить</Button>
							</Link>
							<Button
								className='action-button'
								onClick={() => deleteProduct(item.id)}
							>
								Удалить
							</Button>
							<Button
								className='action-button'
								onClick={() => productDetails(item)}
							>
								Обзор
							</Button>
						</CardActions>
					</Card>
				))}
			<Modal open={isModalOpen} onClose={handleCloseModal}>
				<ProductDetails
					selectedProduct={selectedProduct}
					onClose={handleCloseModal}
				/>
			</Modal>
		</div>
	)
}

export default ProductList
