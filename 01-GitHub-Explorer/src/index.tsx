import React from 'react';
import {createRoot} from 'react-dom/client';

import { App } from './App'

const root = document.getElementById('root')

if(!root) {
    throw new Error('Error in creating the index');
}

const main = createRoot(root);

main.render(<App />);
