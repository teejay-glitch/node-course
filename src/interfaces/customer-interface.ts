import IOrder from './order-interface';

export default interface ICustomer {
  name: string;
  industry: string;
  orders?: IOrder[];
}
