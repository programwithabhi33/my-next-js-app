const fs = require('fs');
async function abhi(req, res) {
    fs.readFile(`jsondata/${req.query.slug}.json`,`utf8`,(err,data)=>{
        // console.log(req.query.slug)
        // console.log(data);
        if (err){
            res.status(500).json({error:"No such file found"});
        }
        // console.log(typeof data)
        // const mainThing = JSON.parse(data)
        // console.log(mainThing)
        // console.log(mainThing.name)
        
        res.status(200).json(JSON.parse(data))
    });

    // let file = await fs.promises.readFile(`jsondata/${req.query.slug}.json`,'utf-8')
    // if(file){
    //     res.status(200).json(JSON.parse(file))
    // }
    // else{
    //     res.status(500).json({error:"No such file found"});
    // }
}
export default abhi;
  