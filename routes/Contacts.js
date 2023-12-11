const router = require('express').Router();
let Contact = require('../models/Contact.model');

router.route('/').get((req,res) => {
    Contact.find()
    .then(Contacts => res.json(Contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email= req.body.email;
    // const phonenumber= req.body.phonenumber;
    const question= req.body.question

    const newContact = new Contact({
        name,
        email,
        // phonenumber,
        question
    });

    newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req,res) => {
//     Contact.findByIdAndDelete(req.params.id)
//     .then(Contact => res.json(Contact))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req,res) => {
//     Contact.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Contact deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req,res) => {
//     Contact.findById(req.params.id)
//     .then(Contact => {
//         Contact.name = req.body.name;
//         Contact.email = req.body.email;
//         Contact.phonenumber=req.body.phonenumber;
//         Contact.comment=req.body.comment;
//         Contact.save()
//         .then(() => res.json('Contact updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });
module.exports=router;