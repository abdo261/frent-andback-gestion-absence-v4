const { Etablissement, validateCreateEtablissement ,validateUpdateEtablissement} = require("../models/Etablissement");

const create = async (req, res) => {
    // if (!req.is_admin) {
    //     return res.status(403).json({ message: "Vous n'avez pas le droit de créer un établissement." });
    // }
    try {
        const { error, value } = validateCreateEtablissement(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        
        const newEtablissement = new Etablissement(value);
        await newEtablissement.save();
        
        res.status(201).json({ message: `Établissement '${newEtablissement.nom}' créé avec succès` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getAll = async (req, res) => {
    // if (!req.is_admin) {
    //     return res.status(403).json({ message: "Vous n'avez pas le droit de lister les établissements." });
    // }
    try {
        const etablissements = await Etablissement.find().sort({ createdAt: -1 });
        res.status(200).json(etablissements);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    // if (!req.is_admin) {
    //     return res.status(403).json({ message: "Vous n'avez pas le droit de lister un établissement." });
    // }
    try {
        const etablissement = await Etablissement.findById(req.params.id);
        if (!etablissement) return res.status(404).json({ message: "Établissement introuvable." });
        res.status(200).json(etablissement);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    // if (!req.is_admin) {
    //     return res.status(403).json({ message: "Vous n'avez pas le droit de modifier un établissement." });
    // }
    try {
        const { error, value } = validateUpdateEtablissement(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });
        
        const etablissement = await Etablissement.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!etablissement) return res.status(404).json({ message: "Établissement introuvable." });
        
        res.status(200).json({ message: `Établissement ${etablissement.nom} modifié avec succès` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    // if (!req.is_admin) {
    //     return res.status(403).json({ message: "Vous n'avez pas le droit de supprimer un établissement." });
    // }
    try {
        const etablissement = await Etablissement.findByIdAndDelete(req.params.id);
        if (!etablissement) return res.status(404).json({ message: "Établissement introuvable." });
        
        res.status(200).json({ message: "Établissement supprimé avec succès" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { create, getAll, getById, update, remove };
