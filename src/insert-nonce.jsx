const fs = require('fs');
const path =  require('path');
const crypto = require('crypto');

const indexPath = path.join(__dirname, 'dist', 'index.html');

const insertNonce = (nonce) => {
    fs.readFile(indexPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading index.html', err);
            return;
        }
        //Replace script with nonce
        const result = data.replace(
            /<script type="module" crossorigin src="(.+?)"><\/script>/,
      `<script nonce="${nonce}" type="module" crossorigin src="$1"></script>`
    );

    fs.writeFile(indexPath, result, 'utf8', (err) => {
        if (err) {
            console.error('Error writing index.html', err);
        } else {
            console.log('Nonce added to script tag in index.html');
        }
    });
    });
};
//Generate a nonce and insert it
const nonce = crypto.randomBytes(16).toString('base64');
insertNonce(nonce);
