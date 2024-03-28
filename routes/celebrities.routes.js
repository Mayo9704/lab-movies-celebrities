// const router = require("express").Router();
// const Celebrity = require('../models/Celebrity.model'); // Asegúrate de que la ruta sea correcta


// router.get('/celebrities/create', (req, res) => {
//     res.render('celebrities/new-celebrity');
//   });
  
//   // Aqui empiezo la lógica de creación de la celebridad
//   router.post('/celebrities/create', async (req, res) => {
//     const { name, occupation, catchPhrase } = req.body;
  
//     try {
//       await Celebrity.create({ name, occupation, catchPhrase });
//       res.redirect('/celebrities'); 
//     } catch (error) {
//       console.log(error);
//       res.render('celebrities/new-celebrity');
//     }
//   });

// // router.get("/celebrities/create", (req, res) => {
// //     res.render("celebrities/new-celebrity")
// //     console.log('testing create-form')
// // });

// // lógica de creación de la celebridad
// // router.post("/celebrities/create", (req, res) => {
// //     const { name, occupation, catchphrase } = req.body;
// //     Celebrity.create({ name, occupation, catchphrase })
// //       .then(dbCeleb => {
// //         return Celebrity.findById(name, {$push: { celebrities: dbCeleb._id} })
// //         .then (() => res.redirect("/celebrities"))
// //         // if (!dbCeleb) {
// //         //   // prettier-ignore
// //         //   Celebrity.create({ name, occupation, catchphrase })
// //         //   .then(() => res.redirect('/celebrities/celebrities'));
// //         // } else {
// //         //   res.render("celebrities/new-celebrity", { message: "celebrity duplicated. ☀️" });
// //         //   return;
// //         }
// //       )
// //       .catch((err) => console.log(`Error while creating a new celebrity: ${err}`));
// // });

// router.get('/celebrities', async (req, res) => {
//     try {
//       const celebrities = await Celebrity.find();
//       res.render('celebrities/celebrities', { celebrities });
//     } catch (error) {
//       console.log(error);
//       res.redirect('/');
//     }
// });

// module.exports = router;

const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch(() => res.render("celebrities/new-celebrity"));
});

router.get("/", (req, res) => {
  Celebrity.find()
    .then((celebrities) =>
      res.render("celebrities/celebrities", { celebrities })
    )
    .catch((error) => console.log(error));
});

module.exports = router;