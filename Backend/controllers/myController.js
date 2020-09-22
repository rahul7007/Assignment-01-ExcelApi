const obj = require('../models/myModel')

insertData = (req, res) => {
    const prodData = {
        // Sheet:[
            // {'St Date': '2019-04-19', 'End Date': '2019-04-19', 'Task ID': 'A0002'}, 
            // {'St Date': '2019-04-20', 'End Date': '2019-04-30', 'Task ID': 'A0003'}, 
            // {'St Date': '2019-03-29', 'End Date': '2019-03-29', 'Task ID': 'A0003'}
        // ],
    }
    obj.create(prodData)
    .then(user => {
        res.json({ status: 'Data inserted!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

// insertData = (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a obj',
//         })
//     }

//     const mbdetect = new obj(body)

//     if (!mbdetect) {
//         return res.status(400).json({ success: false, error: err })
//     }

//     mbdetect
//         .save()
//         .then(() => {
//             return res.status(201).json({
//                 success: true,
//                 id: mbdetect._id,
//                 message: 'obj created!',
//             })
//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: 'obj not created!',
//             })
//         })
// }


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