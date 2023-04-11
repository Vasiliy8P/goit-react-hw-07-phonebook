import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://640d0e31b07afc3b0da6e662.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async () => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (contact) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

