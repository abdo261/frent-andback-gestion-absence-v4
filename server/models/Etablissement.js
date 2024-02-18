const { Schema, model } = require("mongoose");
const joi = require('joi')
const etablissementSchema = new Schema({
  nom: {
    type: String,
    required: true,
    minlength: 3,
  },
  secteur: {
    type: String,
    enum: ["primaire", "collége", "lycée"],
    required: true,
  },
  responsable: {
    type: Schema.Types.ObjectId,
    ref: "responsable",
    default: null,
  },
  commune: {
    type: Schema.Types.ObjectId,
    ref: "commune",
    default: null,
  },
});

const Etablissement = model('etablissement',etablissementSchema)

const validateCreateEtablissement = (obj) => {
  const etablissementSchema = joi.object({
    nom: joi.string().trim().min(3).required(),
    secteur: joi.string().valid("primaire", "collége", "lycée").required(),
    responsable: joi.string().trim().allow(null), // Assuming responsible can be null
    commune: joi.string().trim().allow(null), // Assuming commune can be null
  });
  return etablissementSchema.validate(obj);
};
const validateUpdateEtablissement = (obj) => {
  const etablissementSchema = joi.object({
    nom: joi.string().trim().min(3).required(),
    secteur: joi.string().valid("primaire", "collége", "lycée").required(),
    responsable: joi.string().trim().allow(null), 
    commune: joi.string().trim().allow(null), 
  }).or('nom', 'secteur', 'responsable', 'commune');
  return etablissementSchema.validate(obj);
};

module.exports ={Etablissement,validateCreateEtablissement,validateUpdateEtablissement}
