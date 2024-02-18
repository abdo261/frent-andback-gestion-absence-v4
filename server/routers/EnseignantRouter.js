const EnseignantRouter = require("express").Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require("../controllers/enseignantController");
const isAuth = require("../middlewares/isAuthenticated");

/**
 * @method POST
 * @route /api/enseignants
 * @access private (admin)
 * @description create enseignant
 */
EnseignantRouter.post("/", isAuth, create);

/**
 * @method GET
 * @route /api/enseignants
 * @access private (admin)
 * @description get all enseignants
 */
EnseignantRouter.get("/", isAuth, getAll);

/**
 * @method GET
 * @route /api/enseignants/:id
 * @access public (admin-responsable)
 * @description get enseignant by id
 */
EnseignantRouter.get("/:id", isAuth, getById);

/**
 * @method PUT
 * @route /api/enseignants/:id
 * @access private (admin)
 * @description update enseignant
 */
EnseignantRouter.put("/:id", isAuth, update);

/**
 * @method DELETE
 * @route /api/enseignants/:id
 * @access private (admin)
 * @description delete enseignant
 */
EnseignantRouter.delete("/:id", isAuth, remove);

module.exports = EnseignantRouter;
