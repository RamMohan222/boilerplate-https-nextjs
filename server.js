const { createServer } = require("https");
const { parse } = require("url");
const next = require('next')
const fs = require('fs')

/*
keytool -genkeypair -keyalg RSA -keysize 2048 -keystore keystore.p12 -storepass secret -storetype PKCS12 -validity 365 -dname "cn=localhost, ou=MyCompany, o=Organization, c=US" -alias localhost
*/
const options = {
    pfx: fs.readFileSync('keystore.p12'),
    passphrase: 'secret',
};

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(options, async (req, res) => {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl)
    }).listen(PORT, (err) => {
        if (err) {
            console.error(err);
            return err;
        }
        console.log(`Application starts at https://localhost:${PORT}/`)
    })
})