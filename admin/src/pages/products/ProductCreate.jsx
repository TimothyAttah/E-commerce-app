import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/apiCall';
import {
	Container,
	NewProductButton,
	NewProductForm,
	NewProductFormItem,
	NewProductTitle
} from './ProductCreateStyles';


export const ProductCreate = () => {
	const dispatch = useDispatch();
	const [ inputs, setInputs ] = useState( {
	})
	const [file, setFile] = useState(null)
	const [ category, setCategory ] = useState( [] )

	const handleChange = (e) => {
		// setInputs({...inputs,[e.target.name]:e.target.value})
		setInputs( prev => {
			return{...prev, [e.target.name]:e.target.value}
		})
	}




	const handleCategories = (e) => {
		setCategory(e.target.value.split(","))
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const fileName = new Date().getTime() + file.name;

		const storage = getStorage( app )
		const storageRef = ref( storage, fileName )
		const uploadTask = uploadBytesResumable( storageRef, file )
		
		uploadTask.on(
			'state_change',
			( snapshot ) => {
				const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
				console.log(`Upload is ${progress}% done`);
				switch ( snapshot.state ) {
					case 'paused':
						console.log( 'Upload is paused' );
						break
					case 'running':
						console.log( 'Upload is running' );
						break
					default:

				}
			},
			( error ) => {
				console.log(error);
			},
			() => {
				getDownloadURL( uploadTask.snapshot.ref ).then( downloadURL => {
					console.log( 'File available at ', downloadURL );
					const product = { ...inputs, img: downloadURL, categories: category };
					addProduct(product, dispatch)
				})
			}
		) 
	}
	
	 
	return (
		<Container>
			<NewProductTitle>New Product</NewProductTitle>
			<NewProductForm onSubmit={handleSubmit}>
				<NewProductFormItem>
					<label>Image</label>
					<input
						type='file'
						id='file'
						onChange={e => setFile(e.target.files[0])}
					/>
				</NewProductFormItem>
				<NewProductFormItem>
					<label> Title</label>
					<input
						type='text'
						placeholder='Apple AirPods'
						name='title'
						onChange={handleChange}
					/>
				</NewProductFormItem>
				<NewProductFormItem>
					<label> Description</label>
					<input
						type='text'
						placeholder='description....'
						name='desc'
						onChange={handleChange}
					/>
				</NewProductFormItem>
				<NewProductFormItem>
					<label> Price</label>
					<input
						type='number'
						placeholder='2000'
						name='price'
						onChange={handleChange}
					/>
				</NewProductFormItem>
				<NewProductFormItem>
					<label> Categories</label>
					<input
						type='text'
						placeholder='jeans, skirts'
						onChange={handleCategories}
					/>
				</NewProductFormItem>
				<NewProductFormItem>
					<label>Stock</label>
					<select name='inStock' onChange={handleChange}>
						<option value='true'>Yes</option>
						<option value='false'>No</option>
					</select>
				</NewProductFormItem>
				<NewProductButton type='submit'>Create</NewProductButton>
			</NewProductForm>
		</Container>
	);
};
