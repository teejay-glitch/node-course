import Customer from '../models/customer';
import { Request, Response } from 'express';
import { Types } from 'mongoose';

export namespace CustomerEp {
  export async function createCustomer(req: Request, res: Response) {
    const { name, industry } = req.body;

    try {
      const customer = new Customer({
        name: name,
        industry: industry,
      });

      await customer.save();

      //return res.send({ customer: customer });
      //--samething as above
      return res.send({ customer });
    } catch (error: any) {
      return res.send({ error: error.message });
    }
  }

  export async function getAllCustomers(req: Request, res: Response) {
    try {
      const customerList = await Customer.find();

      return res.send({ customers: customerList });
    } catch (error: any) {
      return res.send({ error: error.message });
    }
  }

  export async function getCustomerById(req: Request, res: Response) {
    const customerId = req.params.id ? req.params.id : req.query.id?.toString();

    try {
      const customer = await Customer.findById(new Types.ObjectId(customerId));

      return res.send({ customer });
    } catch (error: any) {
      return res.send({ error: error.message });
    }
  }

  export async function updateCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    try {
      //const c = await Customer.replaceOne({ _id: new Types.ObjectId(customerId) }, req.body);

      //return res.send({ updatedCount: c?.modifiedCount }); returns the count

      const c = await Customer.findOneAndReplace({ _id: new Types.ObjectId(customerId) }, req.body, { new: true });

      //returns the updated object
      return res.send({ updatedCount: c });
    } catch (error: any) {
      return res.send({ error: error.message });
    }
  }

  export async function deleteCustomer(req: Request, res: Response) {
    const customerId = req.params.id;
    try {
      const c = await Customer.deleteOne({ _id: new Types.ObjectId(customerId) });

      return res.send({ updatedCount: c?.deletedCount });
    } catch (error: any) {
      return res.send({ error: error.message });
    }
  }
}
