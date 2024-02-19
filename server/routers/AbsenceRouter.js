const AbsenceRouter = require("express").Router();
const {
    create, getAll, getById, update, remove
} = require("../controllers/absenceController");

/**
 * @method POST
 * @route /api/absences
 * @access public (admin-responsable)
 * @description create enseignant absence 
 */
AbsenceRouter.post("/", create);

/**
 * @method GET
 * @route /api/absences
 * @access public (admin-responsable)
 * @description get all enseignant absence 
 */
AbsenceRouter.get("/", getAll);

/**
 * @method GET
 * @route /api/absences/:id
 * @access public (admin-responsable-responsable)
 * @description get enseignant absence note by id
 */
AbsenceRouter.get("/:id", getById);

/**
 * @method PUT
 * @route /api/absences/:id
 * @access public (admin-responsable)
 * @description update enseignant absence 
 */
AbsenceRouter.put("/:id", update);

/**
 * @method DELETE
 * @route /api/absences/:id
 * @access public (admin-responsable)
 * @description delete enseignant absence 
 */
AbsenceRouter.delete("/:id", remove);

module.exports = AbsenceRouter;
