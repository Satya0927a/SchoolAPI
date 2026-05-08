import { prisma } from "../utils/prisma.js";

const addSchool = async (req, res, next) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).send({
        success: false,
        error: "Missing Payload inputs",
      });
    }
    if (name.length < 8) {
      return res.status(403).send({
        success: false,
        error: "School name must be atleast 8 char long",
      });
    }
    if (address.length < 8) {
      return res.status(403).send({
        success: false,
        error: "Address must be atleast 8 char long",
      });
    }
    if (typeof latitude != "number" || typeof longitude != "number") {
      return res.status(404).send({
        success: false,
        message: "latitude and longitude must be numbers",
      });
    }
    const newschool = await prisma.school.create({
      data: {
        name: name,
        address: address,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
    });
    res.status(201).send({
      success: true,
      message: "school added successfully",
      data: newschool,
    });
  } catch (error) {
    next(error);
  }
};
export { addSchool };
