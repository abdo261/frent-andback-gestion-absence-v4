const { Schema, model } = require("mongoose");
const joi = require("joi");
const AbsenceSchema = new Schema(
  {
    // date_absence: {
    //   type: String,
    //   required: true,
    // },
    jour: {
      type: String,
      required: true,
    },
    periode: {
      type: String,
      required: true,
      enum: ["matin", "soir"],
    },
    enseignant: {
      type: Schema.Types.ObjectId,
      ref: "enseignant",
    },
  },-
  {
    timestamps: true,
    versionKey:false
  }
);
// Define validation functions
const validateCreateAbsence = (obj) => {
  const absenceSchema = joi.object({
    jour: joi.string().required(),
    periode: joi.string().valid("matin", "soir").required(),
    enseignant: joi.string().required(),
  });
  return absenceSchema.validate(obj);
};

const validateUpdateAbsence = (obj) => {
  const absenceSchema = joi
    .object({
      jour: joi.string(),
      periode: joi.string().valid("matin", "soir"),
      enseignant: joi.string(),
    })
    .or("jour", "periode", "enseignant");
  return absenceSchema.validate(obj);
};
// // Define a virtual for 'jour' field
// AbsenceSchema.virtual("jour").get(function () {
//   const date = new Date(this.date_absence);
//   const day = date.getDate().toString().padStart(2, "0");
//   const month = (date.getMonth() + 1).toString().padStart(2, "0");
//   const year = date.getFullYear();
//   const dayName = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ][date.getDay()];
//   return `${dayName}, ${day}/${month}/${year}`;
// });

// AbsenceSchema.set("toJSON", { virtuals: true });

const Absence = model("absence", AbsenceSchema);

module.exports = { Absence, validateUpdateAbsence, validateCreateAbsence };
