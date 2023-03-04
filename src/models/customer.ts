import mongoose from 'mongoose';

//--THIS CAN BE USED AS WELL
// const customerSchema = new mongoose.Schema({
//   name: String,
//   industry: String,
// });

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  industry: String,
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
