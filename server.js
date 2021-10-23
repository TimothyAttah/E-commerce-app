import dotenv from 'dotenv';
dotenv.config( { path: './config/.env' } );
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import path from 'path';
import Pusher from 'pusher';
// import { upload } from './config/db.js';
import Post from './models/PostModel.js';

// Grid.mongo = mongoose.mongo



// APP CONFIG
const app = express();
const PORT = process.env.PORT || 9000;

// MIDDLEWARES
app.use( express.json() );
app.use( cors() );

// DB CONFIG
Grid.mongo = mongoose.mongo;

const mongoURI = 'mongodb://localhost:27017/facebookClone';

export const conn = mongoose.createConnection(mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

let gfs;

conn.once('open', () => {
	console.log('DB Connected');
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection('images');
});

const storage = new GridFsStorage({
	url: mongoURI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			const filename = `image-${Date.now()}${path.extname(file.originalname)}`;
			const fileInfo = {
				filename: filename,
				bucketName: 'images',
			};
			resolve(fileInfo);
		});
	},
});

export const upload = multer({ storage });

mongoose.connect(mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// API ROUTES
app.get( '/', ( req, res ) => res.status( 200 ).send( 'hello world' ) )
app.post( '/upload/image', upload.single( 'file' ), ( req, res ) => {
	res.status(201).send(req.file)
} )

app.post( '/upload/post', ( req, res ) => {
	const postData = req.body;
	console.log( postData );
	Post.create( postData, ( err, data ) => {
		if ( err ) {
			res.status(500).send(err)
		} else {
			res.status(201).send(data)
		}
	})
})
app.get( '/retrieve/posts', ( req, res ) => {
	Post.find( ( err, data ) => {
		if ( err ) {
			res.status(500).send(err)
		} else {
			data.sort( ( b, a ) => {
				return a.timestamp - b.timestamp;
			})
			res.status(200).send(data)
		}
	})
} )

app.get( '/retrieve/images/single', ( req, res ) => {
	gfs.files.findOne( { filename: req.query.name }, ( err, file ) => {
		if ( err ) {
			res.status( 500 ).send( err );
		} else {
			if ( !file || file.length === 0 ) {
				res.status(404).json({err: 'file not found'})
			} else {
				const readstream = gfs.createReadStream( file.filename );
				readstream.pipe( res );
			}
		}
	})
})


// LISTEN
app.listen( PORT, () => console.log( `Server started and listening on localhost: ${ PORT }` ) );
