const animalsDomain = require('../domain/animal_handler'); // This should be your new domain file for animals

exports.listAllAnimals = (req, res) => {
    res.json(animalsDomain.listAllAnimals());
};

exports.getAnimalById = (req, res) => {
    const animalId = parseInt(req.params.animalId, 10);
    const animal = animalsDomain.getAnimalById(animalId);

    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};

exports.createAnimal = (req, res) => {
    const newAnimal = animalsDomain.createAnimal(req.body);
    res.status(201).json(newAnimal);
};

exports.updateAnimal = (req, res) => {
    const animalId = parseInt(req.params.animalId, 10);
    const updatedAnimal = animalsDomain.updateAnimal(animalId, req.body);

    if (updatedAnimal) {
        res.json(updatedAnimal);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};

exports.deleteAnimal = (req, res) => {
    const animalId = parseInt(req.params.animalId, 10);
    const deletedAnimal = animalsDomain.deleteAnimal(animalId);

    if (deletedAnimal) {
        res.json(deletedAnimal);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};
