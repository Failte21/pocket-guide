const datas = require('../app_content');

exports.retrievePoi = (req, res) => {
    const { poi_id } = req.params;
    const poi = datas.pois.find(p => p.idx == poi_id);
    if (!poi) {
        return res.status(404).send(`Could not find point of interest with id: ${poi_id}`);
    }
    return res.status(200).json(poi);
}