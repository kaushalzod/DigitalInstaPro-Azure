const fetch = require("node-fetch");
const bluebird = require("bluebird");
const express = require("express");
const router = express.Router();
fetch.Promise=bluebird;
router.get('/download',async(req,res)=>{
    const url= req.body.url;
    var unknown=new URL(url);

    fetch(unknown)

        .then(res => res.json())
    
        .then(json => {
            if(json.graphql.shortcode_media.is_video)
            {
                console.log(json.graphql.shortcode_media.video_url);
                res.status(200).send(json.graphql.shortcode_media.video_url);
                
            }else{
                console.log(json.graphql.shortcode_media.display_url);
                res.status(200).send(json.graphql.shortcode_media.display_url);
            }
        });
    

});

module.exports=router;