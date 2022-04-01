import React, { createContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

const App: React.VoidFunctionComponent = () => {
  const [currentColor, setCurrentColor] = useColor('hex', '#455787');

  const handleColorChange = (e: any) => {
    setCurrentColor(e);
  };

  return (
    <div className="container">
      <Popover
        placement={'top'}
        trigger="click"
        content={
          <ColorPicker
            width={250}
            height={150}
            color={currentColor}
            onChange={(e) => handleColorChange(e)}
            hideHSV
          />
        }
      >
        <span
          style={{ background: currentColor.hex, padding: 3, borderRadius: 5 , cursor: 'pointer'}}
        >
          Color Button
        </span>
      </Popover>
    </div>
  );
};

render(<App />, document.getElementById('root'));
