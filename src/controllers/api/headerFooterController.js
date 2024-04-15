// controllers/api/headerFooterController.js
const path = require('path');

const headerFooterController = {
    getHeader: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, '../../views/partials', 'header.ejs'));
        } catch (error) {
            console.error("Error al obtener el header:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },
    getFooter: (req, res) => {
        try {
            res.sendFile(path.join(__dirname, '../../views/partials', 'footer.ejs'));
        } catch (error) {
            console.error("Error al obtener el footer:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
};

module.exports = headerFooterController;
