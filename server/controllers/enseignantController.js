const { Enseignant, validateCreateEnseignant, validateUpdateEnseignant } = require("../models/Enseignant");

const create = async (req, res) => {
      if (!req.is_admin) {
        return res.status(403).json({ message: "Vous n'avez pas le droit de créer un enseignant." });
    }
    try {
        const { error, value } = validateCreateEnseignant(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        
        const newEnseignant = new Enseignant(value);
        await newEnseignant.save();
        
        res.status(201).json({ message: `Enseignant '${newEnseignant.nom_FR} ${newEnseignant.prenom_FR}' créé avec succès` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
      if (!req.is_admin) {
        return res.status(403).json({ message: "Vous n'avez pas le droit de lister les enseignants." });
    }
    try {
        const enseignants = await Enseignant.find().sort({ createdAt: -1 });
        res.status(200).json(enseignants);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
     if (!req.is_admin) {
        return res.status(403).json({ message: "Vous n'avez pas le droit de lister un enseignant." });
    }
    try {
        const enseignant = await Enseignant.findById(req.params.id);
        if (!enseignant) return res.status(404).json({ message: "Enseignant introuvable." });
        res.status(200).json(enseignant);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
     if (!req.is_admin) {
        return res.status(403).json({ message: "Vous n'avez pas le droit de modifier un enseignant." });
    }
    try {
        const { error, value } = validateUpdateEnseignant(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        
        const enseignant = await Enseignant.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!enseignant) return res.status(404).json({ message: "Enseignant introuvable." });
        
        res.status(200).json({ message: `Enseignant '${enseignant.nom_FR} ${enseignant.prenom_FR}' modifié avec succès` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const remove = async (req, res) => {
      if (!req.is_admin) {
        return res.status(403).json({ message: "Vous n'avez pas le droit de supprimer un enseignant." });
    }
    try {
        const enseignant = await Enseignant.findByIdAndDelete(req.params.id);
        if (!enseignant) return res.status(404).json({ message: "Enseignant introuvable." });
        
        res.status(200).json({ message: "Enseignant supprimé avec succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { create, getAll, getById, update, remove };
