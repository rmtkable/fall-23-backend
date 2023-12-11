const router = require('express').Router();
let Attractions = require('../models/Attractions.model')

router.route('/').get((req,res) => {
    Attractions.find()
    .then(Attractions1 => res.json(Attractions1))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const address= req.body.address;
    const description = req.body.description;
    const ratings = req.body.ratings;

    const newAttractions = new Attractions({
        title,
        address,
        description,
        ratings,
    });

    newAttractions.save()
    .then(() => res.json('Attractions added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Attractions.findByIdAndDelete(req.params.id)
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Attractions.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attractions deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Attractions.findById(req.params.id)
    .then(attractions => {
        attractions.title = req.body.title;
        attractions.address = req.body.address;
        attractions.description = req.body.description;
        attractions.ratings = req.body.ratings;

        exercise.save()
        .then(() => res.json('Attractions updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports=router;