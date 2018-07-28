const datas = require('../app_content');

exports.retrieveAndFormatTour = (req, res) => {
    const { tour_id } = req.params;
    const tour = datas.tours.find(t => t.idx == tour_id);
    if (!tour) {
        return res.status(404).send(`Could not find tour with id: ${tour_id}`);
    }
    const { idx, title, pois_idx } = tour;
    const pois = datas.pois.filter(p => pois_idx.includes(p.idx));
    return res.status(200).json({ idx, title, pois });
}