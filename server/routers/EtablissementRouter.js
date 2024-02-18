const EtablissementRouter = require("express").Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require("../controllers/etablissementControllers");
const isAuth = require("../middlewares/isAuthenticated");

/**
 * @method POST
 * @route /api/etablissements
 * @access private (admin)
 * @description create etablissement
 */
EtablissementRouter.post("/", isAuth, create);

/**
 * @method GET
 * @route /api/etablissements
 * @access private (admin)
 * @description get all etablissements
 */
EtablissementRouter.get("/", isAuth, getAll);

/**
 * @method GET
 * @route /api/etablissements/:id
 * @access public (admin-responsable)
 * @description get etablissement by id
 */
EtablissementRouter.get("/:id", isAuth, getById);

/**
 * @method PUT
 * @route /api/etablissements/:id
 * @access private (admin)
 * @description update etablissement
 */
EtablissementRouter.put("/:id", isAuth, update);

/**
 * @method DELETE
 * @route /api/etablissements/:id
 * @access private (admin)
 * @description delete etablissement
 */
EtablissementRouter.delete("/:id", isAuth, remove);

module.exports = EtablissementRouter;
