// ./domain/image-handler.js
const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, '../../images');

const listImages = (req) => {
    return new Promise((resolve, reject) => {
        fs.readdir(imagesDirectory, (err, files) => {
            if (err) {
                reject('Failed to list images');
            } else {
                const baseUrl = `${req.protocol}://${req.get('host')}/images`;
                const imageListHtml = files.map(file => {
                    const imageUrl = `${baseUrl}/${file}`;
                    // Return HTML snippet for each image
                    return `<div class="image-item">
                                <img src="${imageUrl}" alt="${file}" style="width:100%;max-width:300px;">
                                <button onclick="navigator.clipboard.writeText('${imageUrl}');alert('URL copied to clipboard!');">Copy URL</button>
                            </div>`;
                }).join('');

                const fullHtml = `<html><head>
                                    <style>
                                        .image-gallery {
                                            display: flex;
                                            flex-wrap: wrap;
                                            justify-content: space-around;
                                            padding: 0;
                                            margin: 0;
                                        }
                                        .image-item {
                                            margin: 10px;
                                            border: 1px solid #ccc;
                                            box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
                                        }
                                        button {
                                            width: 100%;
                                            padding: 8px;
                                            border: none;
                                            border-top: 1px solid #ccc;
                                            background-color: lightgrey;
                                            cursor: pointer;
                                        }
                                        button:hover {
                                            background-color: grey;
                                            color: white;
                                        }
                                    </style>
                                  </head><body>
                                    <h1>List of Images</h1>
                                    <div class="image-gallery">${imageListHtml}</div>
                                  </body></html>`;
                resolve(fullHtml);
            }
        });
    });
};

module.exports = {
    listImages
};
