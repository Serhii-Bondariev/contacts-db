import Contact from "../models/Contact.js";

export const getAllContacts = () => Contact.find();

export const getOneContact = (id) => Contact.findById(id);

export const createContact = (body) => Contact.create(body);

export const updateContact = (id, body) => Contact.findByIdAndUpdate(id, body);

export const deleteContact = (id) => Contact.findByIdAndRemove(id);

export const updateStatusContact = (id, favorite) => {
  return Contact.findByIdAndUpdate(id, { favorite }, { new: true });
};

export default {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
};
