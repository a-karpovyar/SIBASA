import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label }) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox checked={checked} onClick={() => {
        const event = {
          target: { name, checked: !checked }
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }}>
        {checked && <Checkmark>✓</Checkmark>}
      </StyledCheckbox>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 14px;
  height: 14px;
  background: white;
  border: 1px solid orange;
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Checkmark = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  transform: scale(1.2);
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  text-align: left;
  line-height: 1.4;
  user-select: none;
`;

export default Checkbox;