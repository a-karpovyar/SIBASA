import React from 'react';
import styled from 'styled-components';

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  isTextArea?: boolean;
}

const Field: React.FC<FieldProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  type = 'text', 
  isTextArea = false 
}) => {
  return (
    <FieldContainer>
      <FieldLabel>{label}</FieldLabel>
      {isTextArea ? (
        <TextAreaField
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  color: #000;
  font-weight: normal;
  text-align: left;
  width: 100%;
  display: block;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  background: white;
  color: #000;
  box-sizing: border-box;

  &:focus {
    border-color: #999;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  background: white;
  color: #000;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  box-sizing: border-box;
  &:focus {
    border-color: #999;
  }
`;

export default Field;