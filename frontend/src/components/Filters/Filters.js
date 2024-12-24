const sortAlphabetically = (products, ascending, filters = {}) => {
    const sortBy = filters.sortBy || 'random';

    if (sortBy === "random") {
        const shuffled = [...products].sort(() => Math.random() - 0.5);
        return shuffled;
    } else {
        const sorted = products.slice().sort((a, b) => {
            if (a.product_name && b.product_name) {
                return ascending
                    ? a.product_name.localeCompare(b.product_name)
                    : b.product_name.localeCompare(a.product_name);
            } else {
                return 0;
            }
        });
        return sorted;
    }
};

const sortEnergetically = (products, ascending) => {
    const sorted = products.slice().sort((a, b) => {
        return ascending ? a.nutriments.energy - b.nutriments.energy : b.nutriments.energy - a.nutriments.energy;
        });
        console.log('Energetically sorted:', sorted);
    return sorted;
};

const filterOutCategory = (products, category) => {
    const filtered = products.filter(product => product.categories.includes(category));
    console.log('Filtered by category:', filtered);
    return filtered;
};

const sortByNutritionGrade = (products, ascending) => {
    const sorted = products.slice().sort((a, b) => {
        const gradeOrder = ['a', 'b', 'c', 'd', 'e'];
        return ascending
            ? gradeOrder.indexOf(a.nutriscore_grade) - gradeOrder.indexOf(b.nutriscore_grade)
            : gradeOrder.indexOf(b.nutriscore_grade) - gradeOrder.indexOf(a.nutriscore_grade);
        });
        console.log('Sorted by nutrition grade:', sorted);
    return sorted;
};


const filterOutAllergens = (products, allergens) => {
    if (allergens.length === 0) {
        return products;
    }

    const filtered = [...products].filter(product => {
        return !allergens.some(allergen => 
            product.allergens_tags.includes(allergen.id)
        );
    });

    console.log('Filtered by allergens:', filtered);
    return filtered;
};



export {
    sortAlphabetically,
    sortByNutritionGrade,
    sortEnergetically,
    filterOutAllergens,
    filterOutCategory,
};
