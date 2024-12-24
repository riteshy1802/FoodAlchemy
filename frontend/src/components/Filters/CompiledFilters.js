import {
    sortAlphabetically,
    sortEnergetically,
    sortByNutritionGrade,
    filterOutAllergens,
} from './Filters';


export const compiledFunctionFilter = (products, filters) => {
    console.log(filters);
    let sortByOrder = false;
    let nutriGradeOrder = false;
    let energyOrder = false;
    const sortBy = filters.sortBy;
    const nutriGrade = filters.nutriGrade;
    const energy = filters.energy;
    console.log("SortBy: ", sortBy, "NutriGrade : ", nutriGrade, "Energy : ", energy);
    if(sortBy==='a-z'){
        sortByOrder = true;//ascending true...
    }
    if(nutriGrade==='asc'){
        nutriGradeOrder = true;//ascending
    }
    if(energy==='inc'){
        energyOrder = true;//ascending
    }

    let filteredProducts = products;
    if (filters.allergicItems.length > 0) {
        filteredProducts = filterOutAllergens(filteredProducts, filters.allergicItems);
    }

    if(sortBy!=='random'){
        filteredProducts = sortAlphabetically(filteredProducts,sortByOrder);
    }
    if(energy!=='default'){
        filteredProducts = sortEnergetically(filteredProducts,nutriGradeOrder);
    }
    if(nutriGrade!=='default'){
        filteredProducts = sortByNutritionGrade(filteredProducts,energyOrder)
    }
    if(filters.allergicItem.length>0){
        filteredProducts = filterOutAllergens(filteredProducts, filters.allergicItem);
    }
    return filteredProducts;
}