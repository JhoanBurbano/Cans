const { Dog, Temps} = require('../../db');
const { DataTypes, Op } = require('sequelize');
const { _getCans, _getMyCans, _getFullCans, _getTemps } = require('../logic/index');

const getCans = async (req, res, next) => {
	const { name } = req.query;
	try {
		const allCans = await _getFullCans();
        if(name){
            const cans = allCans.filter(can => can.name.toUpperCase() === name.toUpperCase())
            if(cans.length>0)return res.json(cans);
            res.status(404).send({message: 'Can Not Found'});
        }else{
            res.status(200).json(allCans);
        }
	} catch (error) {
        res.send(error);
    }
};
const getByRaza = async (req, res, next) => {
    const {idRaza} = req.params
    try {
        if(idRaza){
            const allCans = await _getFullCans();
            const cans = allCans.filter(can=>can.id == idRaza)
            if(cans.length)return res.json(cans);
            res.stats(404).send('Can is lost');
        }

    } catch (error) {
        res.send(error);
    }
};
const postCan = async (req, res, next) => {
    let {name, picture, minHeight, maxHeight, minWeight, maxWeight, yearsOfLife, temps} = req.body
    let height = `${minHeight} - ${maxHeight}`
    let weight = `${minWeight} - ${maxWeight}`
    console.log(req.body)
    try {
        const myCans = await _getMyCans();
        existCan = myCans.filter(can => can.name.toLowerCase() === name.toLowerCase())
        if(existCan.length===0){
            const can =  await Dog.create({name, picture, height, weight, yearsOfLife})
            for(let temp of temps){
                can.addTemps(await Temps.findOne({where: {name: temp}}) )
            }
            res.json({can, message: 'El perro es de los nuestros'})
        }else{
            res.json({message: 'Ya esta con nosotros'})
        }
    } catch (error) {
        res.send(error);
    }
}; 

const getTemps = async (req, res, next) => {
    try {
        const temps = await _getTemps();
        console.log('temps')
        for(let temp of temps){
            await Temps.findOrCreate({where: {name:temp}})
        }
        const _temps = await Temps.findAll();
        res.json(_temps)
    } catch (error) {
        res.send(error);
    }
};

const getDB = async(req, res, next)=>{
    try {
        const temps = await _getMyCans();
        res.send(temps)
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
	getCans,
	getByRaza,
	postCan,
	getTemps,
    getDB
};
