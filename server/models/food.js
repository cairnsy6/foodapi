const foodsData = require('../data')

class Food{
    constructor(data){
        this.id = data.id,
        this.name = data.name,
        this.calories = data.calories
    }

    static get all() {
        const foods =foodsData.map((food) => new Food(food));
        return foods;
    }

    static create(food){
        const newFoodId = foodsData.length + 1;
        const newFood = new Food({ id: newFoodId, ...food });
        foodsData.push(newFood);
        return newFood;
    }

    destroy() {
        const food = foodsData.filter((food) => food.id === this.id)[0];
        foodsData.splice(foodsData.indexOf(food), 1);
    }
    



    

}


module.exports = Food;