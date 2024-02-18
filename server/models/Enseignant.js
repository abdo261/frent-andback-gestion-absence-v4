const { Schema, model } = require("mongoose");
const joi = require('joi')
const EnseignantSchema = new Schema({
  PPR: {
    type: String,
    required: true,
    unique: true,
  },
  CIN: {
    type: String,
    required: true,
    unique: true,
  },
  nom_FR: {
    type: String,
    required: true,
    minlength: 3,
  },
  prenom_FR: {
    type: String,
    required: true,
    minlength: 3,
  },
  nom_AR: {
    type: String,
    required: true,
    minlength: 3,
  },
  prenom_AR: {
    type: String,
    required: true,
    minlength: 3,
  },
  sexe: {
    type: String,
    required: true,
    enum: ["homme", "femme"],
  },
  cadre: {
    type: String,
  },
  secteur: {
    type: String,
    enum: ["primaire", "collége", "lycée"],
    required: true,
  },
  etablissement:{
    type:Schema.Types.ObjectId,ref:"etablissement",
    default:null
  }
},{
    timestamps:true
});

const Enseignant = model('enseignant',EnseignantSchema)
const validateCreateEnseignant = (obj) => {
    const CIN_REGEX = /^[A-Z]{1,3}\d+$/;
    const enseignantSchema = joi.object({
      PPR: joi.string().trim().required(),
      CIN: joi.string().trim().regex(CIN_REGEX).required(),
      nom_FR: joi.string().trim().min(3).required(),
      prenom_FR: joi.string().trim().min(3).required(),
      nom_AR: joi.string().trim().min(3).required(),
      prenom_AR: joi.string().trim().min(3).required(),
      sexe: joi.string().valid('homme', 'femme').required(),
      cadre: joi.string().trim().allow(null), 
      secteur: joi.string().valid("primaire", "collége", "lycée").required(),
      etablissement: joi.string().trim().allow(null)
    });
    return enseignantSchema.validate(obj);
  };
  
  const validateUpdateEnseignant = (obj) => {
    const CIN_REGEX = /^[A-Z]{1,3}\d+$/;
    const enseignantSchema = joi.object({
      PPR: joi.string().trim(),
      CIN: joi.string().regex(CIN_REGEX).trim(),
      nom_FR: joi.string().trim().min(3),
      prenom_FR: joi.string().trim().min(3),
      nom_AR: joi.string().trim().min(3),
      prenom_AR: joi.string().trim().min(3),
      sexe: joi.string().valid('homme', 'femme'),
      cadre: joi.string().trim().allow(null),
      secteur: joi.string().valid("primaire", "collége", "lycée"),
      etablissement: joi.string().trim().allow(null)
    }).or('PPR', 'CIN', 'nom_FR', 'prenom_FR', 'nom_AR', 'prenom_AR', 'sexe', 'cadre', 'secteur', 'etablissement');
    return enseignantSchema.validate(obj);
  };

  module.exports = {Enseignant,validateCreateEnseignant,validateUpdateEnseignant}
