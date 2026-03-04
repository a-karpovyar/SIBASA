import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  image: string;
  title: string;
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #000000 55%, #3A1207 87%);
  color: #fff;
  border-radius: 20px;
  overflow: hidden;
  width: 414px;
  height: 388px;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background: transparent;
  color: #fff;
  border: 1px solid #BC8146;
  padding: 0;
  font-size: 13px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    background: transparent;
    border-color: #BC8146;
    color: #fff;
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <CardWrapper>
      <MenuCard>
        <MenuImage src={image} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Button>Перейти в каталог</Button>
        </Info>
      </MenuCard>
    </CardWrapper>
  );
};

export default ProductCard;