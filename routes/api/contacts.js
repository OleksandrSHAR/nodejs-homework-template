import contactsController from "../../controllers/contacts-controller.js";
import {
  authenticate,
  isEmptyBody,
  isValidId,
} from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  contactsAddSchema,
  contactsUpdateSchema,
  contactFavoriteShema,
} from "../../models/Contact.js";
import express from "express";
const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAll);

router.get("/:id", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.add
);

router.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactsUpdateSchema),
  contactsController.updateById
);
router.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactFavoriteShema),
  contactsController.updateById
);
router.delete("/:id", isValidId, contactsController.deleteById);

export default router;
