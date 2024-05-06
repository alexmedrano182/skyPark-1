const nodemailer = require("nodemailer"); //correo

const qr = require("qrcode");
const fs = require("fs"); // Módulo de sistema de archivos de Node.js


function generarQR(texto) {
  qr.toFile("codigo_qr.png", texto, (err) => {
    if (err) {
      console.error("Error al generar el código QR:", err);
    } else {
      console.log("Código QR generado correctamente");
    }
  });
}

function conectionEmail() {
  return (transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "victor000hugo10@gmail.com",
      pass: "aiqpxzzmenwfnyud",
    },
  }));
}

function CrearMensaje(correo, asunto, descripcion,hora) {
  
   generarQR(descripcion);

   let qrImagen = fs.readFileSync("codigo_qr.png");

  let mensaje = {
    from: "sKYPark",
    to: correo,
    subject: asunto,
    text: descripcion,
    html: "<head>" +
    "<style>" +
    "body {" +
    "  font-family: Arial, sans-serif;" +
    "}" +
    ".ticket {" +
    "  width: 400px;" +
    "  margin: 0 auto;" +
    "  padding: 20px;" +
    "  border: 1px solid #ccc;" +
    "  border-radius: 10px;" +
    "  background-color: #f9f9f9;" +
    "}" +
    ".title-container {" +
    "  display: flex;" +
    "  align-items: center;" +
    "  margin-bottom: 20px;" +
    "}" +
    ".title {" +
    "  flex: 1;" +
    "  text-align: center;" +
    "  font-size: 24px;" +
    "}" +
    ".logo {" +
    "  width: 100px; /* Ajustar el tamaño del logo según sea necesario */" +
    "  margin-right: 20px;" +
    "}" +
    ".sponsor-img {" +
    "  width: 200px; /* Ajustar el tamaño de la imagen del patrocinador según sea necesario */" +
    "  margin: 20px auto; /* Centrar la imagen */" +
    "  display: block; /* Para asegurar que esté centrada */" +
    "}" +
    ".info {" +
    "  margin-bottom: 10px;" +
    "}" +
    ".info label {" +
    "  font-weight: bold;" +
    "}" +
    ".footer {" +
    "  margin-top: 20px;" +
    "  text-align: center;" +
    "  font-size: 18px;" +
    "}" +
    "</style>" +
    "</head>" +
    "<body>" +
    
    "<div class='ticket'>" +
    "  <div class='title-container'>" +
    "    <img class='logo' src='cid:logo' alt='Logo'>" +
    "    <div class='title'>"+asunto+"</div>" +
    "  </div>" +
    "  <div class='info'>" +
    "    <label>Hora de Entrada:</label> "+hora+"<br>" +
    "  <img class='' src='cid:codigo_qr' alt='QR'>" +

    "  </div>" +
    "  <div class='footer'>¡Gracias por su visita!</div>" +
    "  <img class='sponsor-img' src='cid:patrocinadores' alt='Patrocinadores'>" +
    "</div>" +
    
    "</body>",
    attachments: [
      {
        filename: "logo.jpg",
        path: __dirname + "/logo.jpg",
        cid: "logo",
      },
      {
        filename: "marcas.png",
        path: __dirname + "/marcas.png",
        cid: "patrocinadores",
      },
      {
        filename: "codigo_qr.png",
        content: qrImagen,
        encoding: "base64",
        cid: "codigo_qr",

      },
    ]
  };

  return mensaje;
}

module.exports={ conectionEmail,CrearMensaje};
