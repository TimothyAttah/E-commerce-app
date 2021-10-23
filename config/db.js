import mongoose from 'mongoose';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import path from 'path';

Grid.mongo = mongoose.mongo;

const mongoURI = 'mongodb://localhost:27017/facebookClone';

export const conn = mongoose.createConnection(mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
} );

let gfs;

conn.once( 'open', () => {
  console.log( 'DB Connected' );
  gfs = Grid( conn.db, mongoose.mongo )
  gfs.collection('images')
} )

const storage = new GridFsStorage( {
  url: mongoURI,
  file: ( req, file ) => {
    return new Promise( ( resolve, reject ) => {
      const filename = `image-${ Date.now() }${ path.extname( file.originalname ) }`
      const fileInfo = {
        filename: filename,
        bucketName: 'images'
      };
      resolve( fileInfo );
    } );
  }
} );

export const upload = multer( { storage } );

mongoose.connect(mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// export const connectDB = async () => {
//   try {
//     const mongoDB = await mongoose.connect(process.env.MONGODB__URL, {
// 			useNewUrlParser: true,
// 			useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify:true
// 		});
//     console.log(`MongoDB connected on ${mongoDB.connection.host}`);
//   } catch (err) {
//     console.log(err);
//   } 
// }

