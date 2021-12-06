import React, { FC } from 'react';
import Size from '../atoms/sizes/component';
import Color from '../molecules/colors/component';

import styled from '../pages/main-page-styled.module.scss';
import photo from '../../assets/images/Rectangle 2.png';

interface Imaintemplate {
  hidden: boolean;
  setHidden: (...args: any) => void;
  counter: number;
  selectedColor: {
    color: string;
    id: number;
    label: string;
  };
  selectedSize: {
    size: string;
    id: number;
  };
  price: number;
}
const MainTemplate: FC<Imaintemplate> = ({ hidden,
  setHidden,
  counter,
  selectedColor,
  selectedSize,
  price }) => (
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
                <div role="button" tabIndex={0} onKeyDown={() => setHidden(!hidden)} onClick={() => setHidden(!hidden)}>&#9998;</div>
              </div>
              <div className={styled.container}>
                <h5 className={styled.montsterrat}>Left: 297pc.</h5>
                <h5 className={styled.montsterrat}>Quantity: x {counter}</h5>
              </div>
            </div>
          </div>
          <div className={styled.container}>
            <Color
              className="mr-3-vw ml-3-vw"
              key={selectedColor.id}
              onClick={() => 0}
              label={selectedColor.label}
              color={selectedColor.color}
            />
            <Size
              className="mr-3-vw ml-3-vw"
              key={selectedColor.id + 1}
              onClick={() => 0}
            >
              {selectedSize.size}
            </Size>

            <h4>
              Total:
            </h4>
            <h4>$ {price}</h4>
          </div>
        </div>
      </div>
    </div>
);

export default MainTemplate;
