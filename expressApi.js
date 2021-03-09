const axios = require('axios');
const express = require("express");
const router = express.Router();
router.get('/download', async (req, res) => {
    const url = req.body.url;
    // var unknown = new URL(url);
    console.log(url);
    try {
        const response = await axios.get(url);
        return res.status(200).send(response.data);
        // if(response.data.graphql.shortcode_media.is_video)
        //     {
        //         // console.log(response.data.graphql.shortcode_media.video_url);
        //         var videoData=response.data.graphql.shortcode_media.video_url;
        //         return res.status(200).send({videoData});

        //     }else{
        //         // console.log(response.data.graphql.shortcode_media.display_url);
        //         var imageData=response.data.graphql.shortcode_media.display_url;
        //         return res.status(200).send({imageData});
        //     }
        // console.log(response.data);

        // var data = https.get(url, (res) => {
        //     var str = "";

        //     res.on('data', (d) => {
        //         str += d;
        //     }).on('end', () => {
        //         console.log(str);
        //         response.send(str);
        //     });
        // });

        // fetch(unknown)
        // .then(res => res.json())
        // .then(json => {
        //     if(json.graphql.shortcode_media.is_video)
        //     {
        //         console.log(json.graphql.shortcode_media.video_url);
        //         var videoData=json.graphql.shortcode_media.video_url;
        //         return res.status(200).send({videoData});

        //     }else{
        //         console.log(json.graphql.shortcode_media.display_url);
        //         var imageData=json.graphql.shortcode_media.display_url;
        //         return res.status(200).send({imageData});
        //     }
        // });
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;