import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import './ProductDetails.css'

const ProductDetails = ({ selectedProduct, onClose }) => {
	if (!selectedProduct) {
		return null
	}

	const { image, title, descr, year } = selectedProduct

	return (
		<div className='product-details-container'>
			<Card className='product-card'>
				<CardMedia
					component='img'
					height='140'
					image={image}
					alt='product image'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='product-title'
					>
						Название: {title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						className='product-descr'
					>
						Описание: {descr}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						className='product-year'
					>
						Год: {year}
					</Typography>
				</CardContent>
				<Button onClick={() => onClose()} className='close-button'>
					Закрыть
				</Button>
			</Card>
		</div>
	)
}

export default ProductDetails
