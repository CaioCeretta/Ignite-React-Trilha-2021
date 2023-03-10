import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelancer',
          category: 'Dev',
          type: 'deposit',
          amount: 6000,
          createdAt: new Date('2023-02-18 15:00:00')
        },
        {
          id: 2,
          title: 'Rent',
          category: 'House',
          type: 'withdraw',
          amount: 1100,
          createdAt: new Date('2023-02-16 12:00:00')
        }
        
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');

    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


