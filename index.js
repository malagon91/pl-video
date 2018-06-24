import React from 'react';
import ReactDom from 'react-dom';
import Categories from './src/categories/components/categories';
import data from './src/api';

const container = document.getElementById('app');
//ReactDom.render(que voy a renderizar, donde);
ReactDom.render(<Categories data={data}/>,container);

