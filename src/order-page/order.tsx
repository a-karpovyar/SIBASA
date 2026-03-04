import React, { useState } from 'react';
import styled from 'styled-components';
import Field from '../shared/field.tsx';
import Checkbox from '../shared/checkbox.tsx';

interface FormData {
  name: string;
  phone: string;
  city: string;
  address: string;
  wishes: string;
  agreed: boolean;
}

interface OrderFormProps {
  totalPrice: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ totalPrice }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    city: '',
    address: '',
    wishes: '',
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert('Пожалуйста, согласитесь с условиями Политики конфиденциальности');
      return;
    }
    console.log('Форма отправлена:', formData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Field
          label="Имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />

        <Field
          label="Телефон"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
        />

        <Field
          label="Город"
          name="city"
          value={formData.city}
          onChange={handleChange}
          type="text"
        />

        <Field
          label="Адрес"
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
        />

        <Field
          label="Здесь можно указать пожелания по вашему заказу"
          name="wishes"
          value={formData.wishes}
          onChange={handleChange}
          isTextArea={true}
        />

        <Checkbox
          id="agreed"
          name="agreed"
          checked={formData.agreed}
          onChange={handleCheckboxChange}
          label="Я согласен с условиями Политики конфиденциальности"
        />

        <TotalPriceText>Итоговая сумма: {totalPrice.toLocaleString('ru-RU')} р.</TotalPriceText>

        <SubmitButton type="submit">Оформить заказ</SubmitButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TotalPriceText = styled.div`
  font-size: 18px;
  color: #000;
  margin: 10px 0;
  font-weight: normal;
  text-align: left;
`;

const SubmitButton = styled.button`
  background: #000;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  text-align: center;
  margin-top: 10px;

  &:hover {
    background: #222;
  }
`;

export default OrderForm;