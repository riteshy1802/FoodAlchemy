const sortAlphabetically = (products, isAscending=true) => {
    return [...products].sort((a,b)=>{
        const comparison =  a.product_name.localeCompare(b.product_name);
        return isAscending ? comparison : -comparison;
    })
}

const sortEnergetically = (products, isAscending) => {
    return [...products].sort((a,b)=>{
        const nutrimentsA = a.nutriments;//nutriments is an object so we will get the kcal value to maintain the simplicity..
        const nutrimentsB = b.nutriments;
        return isAscending ? (nutrimentsA["energy-kcal"] || 0)-(nutrimentsB["energy-kcal"] || 0) :  (nutrimentsB["energy-kcal"] || 0)-(nutrimentsA["energy-kcal"] || 0);
    })
}

const sortByNutritionGrade = (products, isAscending) => {
    const nutritionGradeMap = {a:1, b:2, c:3, d:4, e:5};
    return [...products].sort((a,b)=>{
        const gradeComparison = (nutritionGradeMap[a.nutriscore_grade] || 6)-(nutritionGradeMap[b.nutriscore_grade] || 6);
        return isAscending ? gradeComparison : -gradeComparison;
        //if grade is not provided then we will assign grade 6 to it..
    })
}

const filterOutAllergens = (products, allergicItems)=>{
    const newArray = [...products];
    return newArray.filter((product)=>{
        return !product.allergens_tags?.some((allergen) => allergicItems.includes(allergen));
    })
}

export {sortAlphabetically, sortByNutritionGrade, sortEnergetically, filterOutAllergens};