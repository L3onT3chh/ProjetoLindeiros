export default interface IRepresentante {
  id: number;
  name: string;
  description: string;
  contact: {
    phone: string;
    type: string;
    address: string;
    email: string;
  };
  sigle: string;
  city: string;
}
