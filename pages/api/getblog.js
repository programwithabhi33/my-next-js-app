const fs = require('fs');
function abhishek(req, res) {
    fs.readFile('./jsondata/abhi.json','utf-8',(err,data)=>{
        // console.log(typeof data)
        // const mainThing = JSON.parse(data)
        // console.log(mainThing)
        // console.log(mainThing.name)
        res.status(200).json(JSON.parse(data))
    });
}
export default abhishek;
  