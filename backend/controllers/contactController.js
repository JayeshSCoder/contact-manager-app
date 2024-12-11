const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose")
const Contact = require("../models/contactModel");




// @desc Get all contacts
// @route GET /api/contacts
// @access Public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    res.status(200).json(contacts);
})


// @desc Get all contacts
// @route POST /api/contacts
// @access Public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are Mandatory")
    }



    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contact);
})


// @desc Get contact
// @route GET /api/contacts/:id
// @access Public
const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    res.status(200).json(contact);
})


// @desc Update Contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );


    res.status(200).json(updatedContact);
})

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access Public
const deleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("No Contact Found");
    }

    await Contact.deleteOne();

    res.status(200).json(contact);
})




module.exports = { getContacts, createContact, getContact, updateContact, deleteContact }