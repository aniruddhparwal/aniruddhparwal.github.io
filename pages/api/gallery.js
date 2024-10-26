// /pages/api/gallery.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  try {
    const { resources } = await cloudinary.search
      .expression('"bio data*"')
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    const images = resources.map((image) => ({
      src: image.secure_url,
      alt: image.public_id,
    }));

    res.status(200).json({ images });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
}
