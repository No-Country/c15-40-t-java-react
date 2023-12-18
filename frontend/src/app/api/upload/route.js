import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// PONER EN VARIABLES DE ENTORNO
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST (request) {
  const data = await request.formData();
  // console.log(data.get('file'));

  const images = data.get('file');

  if (!images) {
    return NextResponse.json('No se ha subido ninguna imagen', { status: 400 });
  }

  const bytes = await images.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({}, (err, result) => {
      if (err) {
        reject(err);
      }

      resolve(result);
    })
      .end(buffer);
  });

  // console.log(response.secure_url);
  return NextResponse.json({
    message: 'imagen subida',
    url: response.secure_url
  });
}
