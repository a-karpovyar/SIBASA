import React from 'react';
import styled from 'styled-components';

import Salmon from '../images/salmon.png';

const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${Salmon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
  
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  
  scrollbar-width: none;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const InfoBlock = styled.div`
  background: transparent;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  color: white;
  font-size: 1.4rem;
  line-height: 1.5;
  svg {
    margin-right: 20px;
    width: 36px;
    height: 36px;
    fill: white;
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

const InfoText = styled.span`
  color: white;
  font-size: 1.4rem;
  
  strong {
    font-weight: 600;
  }
`;

const PhoneButton = styled.a`
  background: #000;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  display: inline-block;
  align-self: flex-start;

  &:hover {
    background: #222;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  background: #f0f0f0;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const AddressBlock = styled.div`
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    fill: white;
    flex-shrink: 0;
  }
`;

const AddressText = styled.div`
  h3 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 8px;
    font-weight: 600;
  }
  
  p {
    color: white;
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);

const MarkerIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const DeliveryPage: React.FC = () => {
  const storeAddress = "г. Ярославль, проспект Октября, 68";
  const phoneNumber = "+7 (980) 655-11-01";
  const mapCenter: [number, number] = [57.640223, 39.857419];
  
  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${mapCenter[1]},${mapCenter[0]}&z=17&pt=${mapCenter[1]},${mapCenter[0]},pm2rdl&l=map`;

  return (
    <PageContainer>
      <ContentWrapper>
        <TitleContainer>
          <PageTitle>Доставка</PageTitle>
        </TitleContainer>
        
        <ColumnsContainer>
          <LeftColumn>
            <InfoBlock>
              <InfoItem>
                <CheckIcon />
                <InfoText>Заказывайте на сайте — остальное мы берем на себя</InfoText>
              </InfoItem>
              
              <InfoItem>
                <CheckIcon />
                <InfoText>Остались вопросы? Напишите нам по номеру <strong>{phoneNumber}</strong></InfoText>
              </InfoItem>
              
              <InfoItem>
                <CheckIcon />
                <InfoText>Время работы: с 11:00 до 19:00 (без выходных)</InfoText>
              </InfoItem>
              
              <InfoItem>
                <CheckIcon />
                <InfoText>Бесплатная доставка при заказе от 2000 ₽</InfoText>
              </InfoItem>

              <InfoItem>
                <CheckIcon />
                <InfoText>Свежая рыба - качественное питание для продления жизни</InfoText>
              </InfoItem>
              
              <PhoneButton href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                {phoneNumber}
              </PhoneButton>
            </InfoBlock>
          </LeftColumn>
          
          <RightColumn>
            <MapContainer>
              <MapIframe
                src={mapUrl}
                allowFullScreen
                loading="lazy"
              />
            </MapContainer>
            
            <AddressBlock>
              <MarkerIcon />
              <AddressText>
                <h3>Ждем вас по адресу</h3>
                <p>{storeAddress}</p>
              </AddressText>
            </AddressBlock>
          </RightColumn>
        </ColumnsContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default DeliveryPage;