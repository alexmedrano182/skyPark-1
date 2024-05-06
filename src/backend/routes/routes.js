const express = require("express");
const router = express.Router();
const fs = require("fs");
const { Pool } = require('pg');

const nodemailer = require("nodemailer"); //correo
let msj = require("./mensaje.js");
let jsonHdlr = require("../handdleJson.js");
let encrypter = require("../encrypter.js");


const { body, param, validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.send("<h1>HOLAA</h1>");
});

router.post(
  "/sendEmail",
  [
    body("correo").not().isEmpty().isString(),
    body("placa").not().isEmpty().isString(),
    body("hora").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(500).json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    const { correo, placa,hora } = req.body;
    asunto="Recibo de boleto de estacionamiento"
    
    mensaje = msj.CrearMensaje(correo, asunto, placa,hora);
    console.log(mensaje);
    var transporter = msj.conectionEmail();

    transporter.sendMail(mensaje, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
      } else {
        console.log("Email enviado");
        res.json({
          success: true,
          data: JSON.stringify({ correo, asunto, placa,hora }),
        });
      }
    });
  }
);

module.exports = router;
