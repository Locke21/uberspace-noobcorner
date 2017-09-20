var express = require( 'express' );
var path = require( 'path' );
var app = express();

const port = 4200;

app.use( express.static( path.join( __dirname, '/webui' ) ) );

app.listen( port, () => {
    console.log( "Server listen on " + port );
} );
