import React, { FC, useEffect, useMemo } from 'react';
import Size from '../atoms/sizes/component';
import Color from '../molecules/colors/component';
import Counter from '../organisms/counter/component';
import SelectedItem from '../organisms/selecteditems/component';
import SelectField from '../organisms/selectfield/component';

import styled from './main-page-styled.module.scss';
import photo from '../../assets/images/Rectangle 2.png';
import MainTemplate from '../templates/main-template';

const MainPage: FC = () => {
  const Price = 499;
  const [hidden, setHidden] = React.useState<boolean>(false);
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<number | null>(null);
  const [showSizes, setShowSizes] = React.useState<boolean>(false);
  const [showColors, setShowColors] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(1);
  const [price, setPrice] = React.useState<number>(Price);

  const sizes = useMemo(
    () => [
      { id: 0, size: 'XS' },
      { id: 1, size: 'S' },
      { id: 2, size: 'M' },
      { id: 3, size: '2XL' },
      { id: 4, size: 'XL' },
      { id: 5, size: 'L' },
      { id: 6, size: '3XL' },
      { id: 7, size: '4XL' },
    ], []);

  const colors = useMemo(
    () => [
      { id: 0, label: 'Dark blue', color: '#346E92' },
      { id: 1, label: 'Aqua', color: '#B0E0FE' },
      { id: 2, label: 'Green', color: 'rgba(57, 182, 59, 1)' },
      { id: 3, label: 'Violet', color: '#493B87' },
      { id: 4, label: 'Purple', color: '#902749' },
      { id: 5, label: 'Light blue', color: '#9F8DEF' },
      { id: 6, label: 'Red', color: 'rgba(237, 42, 84, 1)' },
      { id: 7, label: 'Yellow', color: 'rgba(255, 255, 0, 1)' },
    ], []);

  const getSelectSizeHanlder = (id: number) => () => {
    setSelectedSize(id);
    setShowSizes(!showSizes);
  };

  const getSelectColorHanlder = (id: number) => () => {
    setSelectedColor(id);
    setShowColors(!showColors);
  };

  useEffect(() => {
    setPrice(Price * counter);
  }, [counter, hidden]);
  if (hidden && selectedSize !== null && selectedColor !== null) {
    return (
      <MainTemplate
        hidden={hidden}
        setHidden={setHidden}
        counter={counter}
        selectedColor={colors[selectedColor]}
        selectedSize={sizes[selectedSize]}
        price={price}
      />
    );
  }
  return (
    <div>
      <div>
        <div className={styled.card}>
          <div className={styled.container}>
            <img alt="#" className={styled.photo} src={photo} />
            <div className={styled.text_container}>
              <div className={styled.container}>
                <div className={styled.montsterrat}>
                  <h4>Back Collection</h4>
                  <h4>Abignail XT</h4>
                </div>
                <div role="button" tabIndex={0} onKeyDown={() => setHidden(!hidden)} onClick={() => setHidden(!hidden)}>&#10006;</div>
              </div>
              <div className={styled.container}>
                <h4>Total</h4>
                <h4>$ {price}</h4>
              </div>
            </div>
          </div>
          <div className={styled.container}>
            <SelectedItem onClick={() => setShowColors(!showColors)}>
              <Color
                className="mr-3-vw ml-3-vw"
                key={selectedColor}
                onClick={() => 0}
                label={colors[selectedColor || 0].label}
                color={colors[selectedColor || 0].color}
              />
            </SelectedItem>
            <SelectedItem onClick={() => setShowSizes(!showSizes)}>
              <Size
                className="mr-3-vw ml-3-vw"
                key={selectedSize}
                onClick={() => 0}
              >
                {sizes[selectedSize || 0].size}
              </Size>
            </SelectedItem>
            <Counter
              disabled={counter === 1}
              Function1={() => setCounter(counter - 1)}
              Function2={() => setCounter(counter + 1)}
              count={counter}
            />
          </div>
          <SelectField display={showSizes}>
            {
              sizes.map(({ id, size }) => (
                <Size
                  className={styled.m2}
                  key={id}
                  onClick={getSelectSizeHanlder(id)}
                  selected={id === selectedSize}
                >
                  {size}
                </Size>
              ))
            }
          </SelectField>
          <SelectField display={showColors}>
            {
              colors.map(({ id, ...props }) => (
                <Color
                  className={styled.m2}
                  key={id}
                  onClick={getSelectColorHanlder(id)}
                  selected={id === selectedColor}
                  {...props}
                />
              ))
            }
          </SelectField>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
