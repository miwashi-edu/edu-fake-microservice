let animals = [
    // Assuming you have predefined animals or fetching from a database
    { id: 1, name: 'Elephant', description: 'A large mammal with a trunk.', imageUrl: '/images/elefant.jpg' },
    { id: 2, name: 'Gorilla', description: 'A large, predominantly ground-dwelling ape.', imageUrl: '/images/gorilla.jpg' },
    { id: 3, name: 'Crocodile', description: 'A large aquatic reptile with a powerful jaw.', imageUrl: '/images/crocodile.jpg' }
];

exports.listAllAnimals = () => {
    return animals;
};

exports.getAnimalById = (id) => {
    return animals.find(animal => animal.id === id);
};

exports.createAnimal = (animalData) => {
    const newAnimal = {
        id: animals.length + 1, // simplistic ID assignment
        ...animalData
    };
    animals.push(newAnimal);
    return newAnimal;
};

exports.updateAnimal = (id, animalData) => {
    const index = animals.findIndex(animal => animal.id === id);
    if (index !== -1) {
        animals[index] = { ...animals[index], ...animalData };
        return animals[index];
    }
    return null;
};

exports.deleteAnimal = (id) => {
    const index = animals.findIndex(animal => animal.id === id);
    if (index !== -1) {
        return animals.splice(index, 1)[0];
    }
    return null;
};
