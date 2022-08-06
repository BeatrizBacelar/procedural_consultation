const consultations = require('../../data/process.json');

function getProcessByCnj(cnj) {
    const process = consultations.filter((item) => item.CNJ.includes(cnj))
    return process 
}

function getProcessByCourt(court) {
    const process = consultations.filter((item) => item.court_origin.includes(court))
    return process
}

exports.get = (req, res) => {
    let court_list = consultations.map((item) => item.court_origin)
    court_list = new Set(court_list);
    court_list = [...court_list]
    return res.json(court_list); 
}

exports.post = (req, res) => {
    const processNumber = req.body.processNumber
    const court = req.body.court

    if (processNumber && court){
        return res.json(consultations.filter((item) => item.CNJ.includes(processNumber) && item.court_origin.includes(court)))
    } 
    
    if(processNumber){
        return res.json(getProcessByCnj(processNumber))
    } 
    
    if(court){
        return res.json(getProcessByCourt(court))
    } 

    return res.json(consultations); 
}

