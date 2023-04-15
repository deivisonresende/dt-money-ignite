import { Model, createServer } from 'miragejs';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Desenvolvimento',
          value: 5000,
          createdAt: new Date('2023/04/15').toISOString()
        },
        {
          id: 2,
          title: 'Manutenção api',
          type: 'deposit',
          category: 'Desenvolvimento',
          value: 800,
          createdAt: new Date('2023/04/16').toISOString()
        },
        {
          id: 3,
          title: 'Prestação',
          type: 'withdraw',
          category: 'Casa',
          value: -1700,
          createdAt: new Date('2023/04/17').toISOString()
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(JSON.stringify(request.requestBody))
      return this.schema.create('transaction', data)
    });
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
