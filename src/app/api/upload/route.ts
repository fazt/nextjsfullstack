import { NextResponse } from "next/server";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

export async function POST(request: Request) {
  const data = await request.formData();
  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json("archivo no encontrado", { status: 400 });
  }

  // guardar el archivo en memoria del servidor
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "image",
          format: "png",
        },
        function (error, result) {
          if (error) {
            reject(error);
          }

          resolve(result);
        }
      )
      .end(buffer);
  });

  return NextResponse.json(result);
}
