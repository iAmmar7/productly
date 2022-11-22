export default async function handler(req, res) {
  const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
