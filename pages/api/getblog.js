const fs = require('fs');
function abhi(req, res) {
    fs.readFile(`jsondata/${req.query.slug}.json`,`utf8`,(err,data)=>{
        // console.log(req.query.slug)
        // console.log(data);
        if (err){
            res.status(500).json({error:"No such file found"});
        }
        // console.log(typeof data)
        // const mainThing = JSON.parse(data)
        // console.log(mainThing)
        // console.log(mainThing.name
        
        res.status(200).json(JSON.parse(data))
    });
}
export default abhi;
  