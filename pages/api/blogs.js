const fs = require('fs');
async function abhishek(req, res) {
    // fs.readdir('./jsondata',(err,data)=>{
    //     // console.log(typeof data)
    //     // const mainThing = JSON.parse(data)
    //     // console.log(mainThing)
    //     // console.log(mainThing.name)
    //     res.status(200).json(data)
    //     // res.status(200).json({name:"abhishek"})
    // });
    let fileArray = []
    const dirRead = await fs.promises.readdir('./jsondata')
    for (let index = 0; index < dirRead.length; index++) {
        const element = dirRead[index];
        let file = await fs.promises.readFile('jsondata/'+element,'utf-8')
        fileArray.push(JSON.parse(file));
    }
    res.status(200).json(fileArray)

}
export default abhishek;
  