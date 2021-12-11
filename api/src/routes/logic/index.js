const axios = require('axios')
const {Dog, Temps} = require('../../db')
const { API_KEY } = process.env
const urlApiDogs = 'https://api.thedogapi.com/v1/breeds?api_key='

const _getCans = async () => {
    const cansComplete = await axios(`${urlApiDogs}${API_KEY}`);
    const cans = cansComplete.data.map(can => ({
        id: can.id,
        name: can.name,
        picture: can.image.url,
        temps: can.temperament,
        weight: can.weight.metric,
        height: can.height.metric,
        yearsOfLife: can.life_span
    }))
    return cans;
}

const _getMyCans = async () => {
    try {
        return await Dog.findAll({
            include: Temps
        })
    } catch (error) {
        console.log(error)
    }
}

const _getFullCans = async () => {
    try {
        const myCans = await _getMyCans();  
        const Cans = await _getCans();
        return [...myCans,...Cans];
    } catch (error) {
        console.log(error)
    }
}

const _getTemps = async () => {
    let cans = await _getCans();
    let temps = (cans.filter((can)=>can.temps)).map((can=>(can.temps.split(', '))))
    temps = new Set(temps.flat())
    return temps
}

module.exports ={
    _getCans,
    _getMyCans,
    _getFullCans,
    _getTemps
}