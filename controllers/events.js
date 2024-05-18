import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";
import Event from "../models/event.js";

const getAllEvents = async (req, res) => {
  const result = await Event.find();

  if (result.length === 0) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

export default { getAllEvents: ctrlWrapper(getAllEvents) };
