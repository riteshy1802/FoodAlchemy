import {
    sortAlphabetically,
    sortEnergetically,
    sortByNutritionGrade,
    filterOutAllergens,
    filterOutCategory,
} from './Filters';


export const compiledFunctionFilter = (products, filters) => {
    let sortByOrder = false;
    let nutriGradeOrder = false;
    let energyOrder = false;
    const sortBy = filters.sortBy;
    const nutriGrade = filters.nutriGrade;
    const energy = filters.energy;

    if (sortBy === 'a-z') {
        sortByOrder = true; // ascending true...
    }
    if (nutriGrade === 'asc') {
        nutriGradeOrder = true; // ascending
    }
    if (energy === 'inc') {
        energyOrder = true; // ascending
    }

    let filteredProducts = products;

    if (filters.category !== 'Shuffled') {
        filteredProducts = filterOutCategory(filteredProducts, filters.category);
        // console.log('Filtered by Category:', filteredProducts);
    }

    if (filters.allergicItems.length > 0) {
        filteredProducts = filterOutAllergens(filteredProducts, filters.allergicItems);
        // console.log('Filtered by Allergens:', filteredProducts);
    }

    if (sortBy !== 'random') {
        filteredProducts = sortAlphabetically(filteredProducts, sortByOrder, filters);
        // console.log('Sorted Alphabetically:', filteredProducts);
    }

    if (energy !== 'default') {
        filteredProducts = sortEnergetically(filteredProducts, energyOrder);
        // console.log('Sorted by Energy:', filteredProducts);
    }

    if (nutriGrade !== 'default') {
        filteredProducts = sortByNutritionGrade(filteredProducts, nutriGradeOrder);
        // console.log('Sorted by Nutrition Grade:', filteredProducts);
    }

    return filteredProducts;
};
