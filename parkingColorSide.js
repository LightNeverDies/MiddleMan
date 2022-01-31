const colorSide = require('./parkingData.json')
const fs = require('fs')
const path = require('path')

let parkingColorSide = colorSide

const colorPalet = [
    "#bc0000",
    "#69c100",
    "#ffcb00"
]


parkingColorSide.map((obj) => {
    if(obj.status === "Free") {
        obj["code"] = colorPalet[1]
    } else if(obj.status === "Taken") {
        obj["code"] = colorPalet[0]
    } else {
        obj["code"] = colorPalet[2]
    }
})

fs.writeFileSync(path.join(__dirname, './', 'newlyGeneratedParkingData.json'), JSON.stringify(parkingColorSide))
