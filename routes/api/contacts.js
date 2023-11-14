import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import express from "express";
const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getContactById);

router.post("/", isEmptyBody, contactsController.addContact);

// router.delete("/:contactId", contactsController.deleteContact);

// router.put("/:contactId", isEmptyBody, contactsController.updateContacts);

export default router;
