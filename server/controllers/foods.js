const express = require('express');
const router = express.Router();

const Food = require('../models/food');

router.get('/', (req, res) => {
    const foodsData = Food.all;
    res.send(foodsData);
});

router.get('/:id', (req, res) => {
    try {
        const foodId = parseInt(req.params.id);
        const selectedFood = Cat.findById(foodId);
        res.send(selectedFood);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.get('/', (req, res)=>{
    let totalCalories = 0
        for(let i = 0; i <= foodsData[calories]; i++) {
            totalCalories+= i
        }
        res.send(totalCalories);
        
})

router.post('/', (req, res) => {
    const data = req.body;
    const newFood = Food.create(data);
    res.status(201).send(newFood);
});

router.delete('/:id', (req, res) => {
    const foodId = parseInt(req.params.id);
    const foodToDestroy = Food.findById(foodId);
    foodToDestroy.destroy();
    res.status(204).send();
});


// router.update('/:id', (req, res) => {
//     const foodId = parseInt(req.params.id);
//     const foodToUpdate = Food.findById(foodId);

// })

module.exports = router;
