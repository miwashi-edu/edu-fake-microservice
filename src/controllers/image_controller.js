// ./controllers/image_controller.js
const imageHandler = require('../domain/image_handler');

exports.listImages = (req, res) => {
    imageHandler.listImages(req)
        .then(fullHtml => {
            res.send(fullHtml);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};
