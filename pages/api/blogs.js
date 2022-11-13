const fs = require('fs');
function abhishek(req, res) {
    fs.readdir('./jsondata',(err,data)=>{
        // console.log(typeof data)
        // const mainThing = JSON.parse(data)
        // console.log(mainThing)
        // console.log(mainThing.name)
        res.status(200).json(data)
    });
}
export default abhishek;
  