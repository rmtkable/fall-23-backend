const router = require('express').Router();
// let AddAttraction = require('../models/AddAttraction.model');
let AddAttraction = require('../models/Attractions.model')

router.route('/').get((req,res) => {
    AddAttraction.find()
    .then(AddAttractions => res.json(AddAttractions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    // const attraction = req.body.attraction;
    // const address= req.body.address;

    // const newAddAttraction = new AddAttraction({
    //     attraction,
    //     address,
    // });

  
    const title = req.body.title;
    const address = req.body.address;
    const description = req.body.description;
    const ratings = req.body.ratings;




    newAddAttraction.save()
    .then(() => res.json('AddAttraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    AddAttraction.findByIdAndDelete(req.params.id)
    .then(addattraction => res.json(addattraction))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    AddAttraction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Addattraction deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    AddAttraction.findById(req.params.id)
    .then(addattraction => {
        addattraction.attraction = req.body.attraction;
        addattraction.address = req.body.address;
        addattraction.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports=router;