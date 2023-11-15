import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import express from "express";
const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getById);

router.post("/", isEmptyBody, contactsController.add);

router.put("/:id", isEmptyBody, contactsController.updateById);

router.delete("/:id", contactsController.deleteById);

export default router;
