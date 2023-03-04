import { Express, Request, Response } from 'express';
import { CustomerEp } from '../endpoint/customer-ep';

export function initRoutes(app: Express) {
  //--SAMPLE DATA
  // const data = {
  //   id: '0001',
  //   type: 'donut',
  //   name: 'Cake',
  //   ppu: 0.55,
  //   batters: {
  //     batter: [
  //       { id: '1001', type: 'Regular' },
  //       { id: '1002', type: 'Chocolate' },
  //       { id: '1003', type: 'Blueberry' },
  //       { id: '1004', type: "Devil's Food" },
  //     ],
  //   },
  //   topping: [
  //     { id: '5001', type: 'None' },
  //     { id: '5002', type: 'Glazed' },
  //     { id: '5005', type: 'Sugar' },
  //     { id: '5007', type: 'Powdered Sugar' },
  //     { id: '5006', type: 'Chocolate with Sprinkles' },
  //     { id: '5003', type: 'Chocolate' },
  //     { id: '5004', type: 'Maple' },
  //   ],
  // };

  // app.get('/api/data', (req: Request, res: Response) => {
  //   res.send({ data: data.topping });
  // });

  // app.get('/', (req: Request, res: Response) => {
  //    res.send({ data: CustomerEp.customerData() });
  // });

  app.post('/api/create/customer', CustomerEp.createCustomer);

  app.get('/api/customers', CustomerEp.getAllCustomers);

  //--USING ID AND QUERY PARAMETERS
  app.get('/api/customers/:id?', CustomerEp.getCustomerById);

  app.put('/api/customers/:id', CustomerEp.updateCustomer);

  app.patch('/api/customers/:id', CustomerEp.updatePartialCustomer);

  app.patch('/api/orders/:id', CustomerEp.updateCustomerOrder);

  app.delete('/api/customers/:id', CustomerEp.deleteCustomer);

  app.get('/', (req: Request, res: Response) => {
    res.send('Customer App API');
  });
}
