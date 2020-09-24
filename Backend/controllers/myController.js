const obj = require('../models/myModel')

insertData = (req, res) => {
    
    //if send data with postman
    // const prodData = req.body.main
    
    //if send data with manually
    const prodData = 
    {
        Sheet: req.body.main
        // Sheet:[
        //     {'St Date': '2019-04-19', 'End Date': '2019-04-19', 'Task ID': 'A0002'}, 
        //     {'St Date': '2019-04-20', 'End Date': '2019-04-30', 'Task ID': 'A0003'}, 
        //     {'St Date': '2019-03-29', 'End Date': '2019-03-29', 'Task ID': 'A0003'}
        // ],
    }
    console.log(prodData);
    obj.create(prodData)
    .then(user => {
        res.json({ status: 'Data inserted!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

// getData = async (req, res) => {
//     await obj.find({}, (err, mbdetect) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!mbdetect) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `obj not found@` })
//         }
//         return res.status(200).json({ success: true, data: mbdetect })
//     }).catch(err => console.log(err))
// }


module.exports = {
    // getData,
    insertData,
}