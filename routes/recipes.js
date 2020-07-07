var express = require("express");
var router  = express.Router();
var Recipe = require("../models/recipe");
var middleware = require("../middleware");
var request = require("request");

//INDEX - show all recipes
router.get("/", function(req, res){
    // Get all recipes from DB
    Recipe.find({}, function(err, allRecipes){
       if(err){
           console.log(err);
       } else {
           request('https://maps.googleapis.com/maps/api/geocode/json?address=sardine%20lake%20ca&key=AIzaSyBtHyZ049G_pjzIXDKsJJB5zMohfN67llM', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(body); // Show the HTML for the Modulus homepage.
                res.render("recipes/index",{recipes:allRecipes});

            }
});
       }
    });
});

//CREATE - add new recipe to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to recipes array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newRecipe = {name: name, image: image, description: desc, author:author}
    // Create a new recipe and save to DB
    Recipe.create(newRecipe, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to recipes page
            console.log(newlyCreated);
            res.redirect("/recipes");
        }
    });
});

//NEW - show form to create new recipe
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("recipes/new"); 
});

// SHOW - shows more info about one recipe
router.get("/:id", function(req, res){
    //find the recipe with provided ID
    Recipe.findById(req.params.id).populate("comments").exec(function(err, foundRecipe){
        if(err){
            console.log(err);
        } else {
            console.log(foundRecipe)
            //render show template with that recipe
            res.render("recipes/show", {recipe: foundRecipe});
        }
    });
});

router.get("/:id/edit", middleware.checkUserRecipe, function(req, res){
    console.log("IN EDIT!");
    //find the recipe with provided ID
    Recipe.findById(req.params.id, function(err, foundRecipe){
        if(err){
            console.log(err);
        } else {
            //render show template with that recipe
            res.render("recipes/edit", {recipe: foundRecipe});
        }
    });
});

router.put("/:id", function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.description};
    Recipe.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, recipe){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/recipes/" + recipe._id);
        }
    });
});

//middleware
// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You must be signed in to do that!");
//     res.redirect("/login");
// }

module.exports = router;

