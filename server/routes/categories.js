const express = require("express");
const router = express.Router();    
const Category = require("../models/Category");

router.get("/", async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


// get a category by id

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if(!category) {
      return res.status(404).json({message: "Category cannot be found" })
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})



// create a category

router.post("/", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    slug: req.body.slug,
    description: req.body.description
  })

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({message: error.message});
  }


})

//  updating a category

router.put("/:id", async (req,res) => {
  try {
    const category = await Category.findById(req.params.id);
    if(!category) {
      return res.status(404).json({message: "Category cannot be found" })
    }

  category.name = req.body.name || category.name;
  category.slug = req.body.slug || category.slug;
  category.description = req.body.description || category.description;
  category.updatedAt = Date.now();
  const updatedCategory = await post.save();
  res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})

//  deleting a post

router.delete("/:id", async (req, res) => {
  try {
    const category = await Post.findById(req.params.id);
    if(!post) {
      return res.status(404).json({message: "Category cannot be found" })
    }
    await category,Category.findByIdAndDelete(category._id);
    res.json({message: "Category has been deleted"});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

module.exports = router;