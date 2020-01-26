const fs = require("fs")
const path = require("path")

module.exports = async (req, res) => {
  function findOverlap(a, b) {
    const result = (a.match(new RegExp('[' + b + ']', 'g')) || []).join('');
    var cleanedText = result.replace(/^[a-z]*([A-Z])/,"$1");
    return cleanedText
  }
  fs.readFile(path.join(process.cwd(), '/../Win10.psm1'), (error, data) => {
    if (error) { throw error }
    let functionsAvailable = []
    let num = 1
    data.toString().split("\n").forEach((line, index, arr) => {
      if (index === arr.length - 1 && line === "") { return }
      if (line.startsWith('Function ')) {
        const cleanLine = line.replace('Function ', '').replace(' {', '')
        functionsAvailable.push({ id: num, name: cleanLine, checked: false })
        num++
      }
    })
    let resp = []
    for (let i = 0; i < functionsAvailable.length; i += 2) {
      const a = functionsAvailable[i]
      const b = functionsAvailable[i + 1]
      if (a && b) {
        comparedHeading = findOverlap(a.name, b.name)
      }
      resp.push({
        heading: comparedHeading || '',
        a: {
          name: a.name,
          id: a.id
        }, 
        b: {
          name: b && b.name,
          id: b && b.id
        }
      })
    }
    res.status(200).json({ resp, functionsAvailable })
  })
}
