const {
  Absence,
  validateCreateAbsence,
  validateUpdateAbsence,
} = require("../models/Absence");

const create = async (req, res) => {
  try {
    const { error, value } = validateCreateAbsence(req.body);
    if (error)
      return res
        .status(400)
        .json({
          message: "Erreur de validation : " + error.details[0].message,
        });

    const newAbsence = new Absence(value);
    await newAbsence.save();

    res
      .status(201)
      .json({
        message: `Absence '${newAbsence.jour}' créée avec succès`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur : " + error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const absences = await Absence.find().sort({ createdAt: -1 });
    res.status(200).json(absences);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur : " + error.message });
  }
};

const getById = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id);
    if (!absence)
      return res.status(404).json({ message: "Absence introuvable." });
    res.status(200).json(absence);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur : " + error.message });
  }
};

const update = async (req, res) => {
  try {
    const { error, value } = validateUpdateAbsence(req.body);
    if (error)
      return res
        .status(400)
        .json({
          message: "Erreur de validation : " + error.details[0].message,
        });

    const absence = await Absence.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!absence)
      return res.status(404).json({ message: "Absence introuvable." });

    res
      .status(200)
      .json({
        message: `Absence '${absence.jour}' modifiée avec succès`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur : " + error.message });
  }
};

const remove = async (req, res) => {
  try {
    const absence = await Absence.findByIdAndDelete(req.params.id);
    if (!absence)
      return res.status(404).json({ message: "Absence introuvable." });

    res.status(200).json({ message: "Absence supprimée avec succès" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erreur serveur : " + error.message });
  }
};

module.exports = { create, getAll, getById, update, remove };
