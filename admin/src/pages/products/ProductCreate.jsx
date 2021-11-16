import React, { useState } from 'react';
import styled from 'styled-components';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase';
import { app } from '../../firebase';

export const Container = styled.div`
	flex: 4;
`;
export const NewProductTitle = styled.h1``;
export const NewProductForm = styled.form`
	/* display: flex;
	flex-wrap: wrap; */
  margin-top: 10px;
`;
export const NewProductFormItem = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
  > input{
    border: none;
  }
	/* margin-right: 20px; */
	label {
		margin-bottom: 10px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--gray);
	}
	input {
		height: 30px;
		padding: 20px 10px;
		border: 1px solid var(--gray);
		border-radius: 5px;
    :first-child{
      border: none;
    }
	}
	select {
		height: 40px;
    padding: 10px;
		border-radius: 5px;
	}
`;
export const NewProductGender = styled.div`
	input {
		margin-top: 15px;
		height: 15px;
		padding: 0;
	}
	label {
		margin: 10px;
		font-size: 1.1rem;
		color: var(--text-gray);
		font-weight: normal;
	}
`;
export const NewProductButton = styled.button`
	width: 200px;
	background-color: var(--darkBlue);
	color: var(--text-white);
	padding: 7px 10px;
	border-radius: 10px;
	font-weight: 600;
	margin-top: 30px;
`;

export const ProductCreate = () => {
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

		const storage = getStorage(app)
		const newProduct = {
			file,
			inputs,
			category
		}

		console.log('this is new product', newProduct);
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
