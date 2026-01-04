// api/check.js
export default async function handler(req, res) {
    const { id, zone } = req.query;
    const apiKey =  d2ee0d2198msh2759e73295d3863p13a0c3jsn6ec632a5abce';

    try {
        const response = await fetch(`https://true-id-mobile-legends.p.rapidapi.com/true-id/mobile-legends?id=${id}&zone=${zone}`, {
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'true-id-mobile-legends.p.rapidapi.com'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}