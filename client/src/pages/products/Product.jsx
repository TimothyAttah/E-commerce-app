/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar } from '../../components/nav/Navbar';
import { Announcement } from '../../components/Announcement';
import { Newsletter } from '../../components/Newsletter';
import { Footer } from '../../components/footer/Footer';
// import { images } from '../../components/images';
import { mobile } from '../../responsive';
import { Add, Remove } from '@material-ui/icons';
import { publicRequest } from '../../requestMethods';
import { addProduct } from '../../redux/cartSlice';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({
    padding: '10px',
    flexDirection: 'column',
  })}
`;
const ImageContainer = styled.div`
	flex: 1;
	text-align: center;
`;
const Image = styled.img`
	width: 50%;
	/* object-fit: cover; */
	${mobile({
    height: '25vh',
  })}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	${mobile({
    padding: '10px',
  })}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 2rem;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	${mobile({
    width: '100%',
  })}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 1.2em;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
	margin: 0 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({
    width: '100%',
  })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	cursor: pointer;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;
const Button = styled.button`
	text-transform: uppercase;
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	font-weight: 500;
	:hover {
		background-color: #f8f4f4;
	}
`;

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [ size, setSize ] = useState( '' );
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get( `/products/find/${ id }` );
        console.log('find product', res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct( {
        ...product, quantity, color, size
      } )
    );
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> $ { product.price }</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              { product?.color?.map( c => (
                <FilterColor color={c} key={c} onClick={()=> setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                { product?.size?.map( s => (
                  <FilterSizeOption key={s}>{ s }</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
