const datas = require('../app_content');
const path = require('path');
const fs = require('fs');

exports.retrievePoi = (req, res) => {
    const { poi_id } = req.params;
    const poi = datas.pois.find(p => p.idx == poi_id);
    if (!poi) {
        return res.status(404).send(`Could not find point of interest with id: ${poi_id}`);
    }
    return res.status(200).json(poi);
}

const base64_encode = path => {
    // read binary data
    var bitmap = fs.readFileSync(path);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

exports.retrievePoiImage = (req, res) => {
    const { poi_id } = req.params;
    const { role } = req.query;
    if (!role) {
        return res.status(400).send('Missing query parameter: role');
    }
    const poi = datas.pois.find(p => p.idx == poi_id);
    if (!poi) {
        return res.status(404).send(`Could not find point of interest with id: ${poi_id}`);
    }
    const { medias_roles } = poi;

    //Roles are not unique, we'll have to check later to find an existing image
    const medias = medias_roles.filter(mr => mr.role == role);
    if (!medias.length) {
        res.status(404).send(`Could not find image for poi ${poi_id} with role ${role}`);
    }
    const formattedNames = medias.map(media => `media${media.media_idx}_L.jpg`);
    retrieveAndSendImageFromName(formattedNames, res, 0);
}

const retrieveAndSendImageFromName = (formattedNames, res, i) => {
    const formattedName = formattedNames[i];
    if (!formattedName) {
        return res.status(404).send('Could not retrieve image on server')
    }
    const media_path = path.join(__dirname, '../medias', `${formattedName}`);
    fs.exists(media_path, exists => {
        if (exists) {
            const image = `data:image/jpg;base64,${base64_encode(media_path)}`;
            return res.end(image);
        }
        retrieveAndSendImageFromName(formattedNames, res, i + 1);
    })
}