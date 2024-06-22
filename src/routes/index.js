import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "First Web Node", message: "Artificial Intelligence" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About First Node Website", message: "Artificial Intelligence" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", message: "Artificial Intelligence" });

});

router.get("/NotFound", (req, res) => {
  res.render("NotFound", { title: "404 Not Found", message: "404 Not Found" });

});





export default router;
