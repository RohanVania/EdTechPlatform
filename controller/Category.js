const Category = require("../model/Category")

// admin can Create category which we will need to while adding course

// Create Category

exports.createCategory = async (req, resp) => {
    try {
        const { name, description } = req.body;
        if (!name) {
            return resp.status(200).json(
                {
                    status: "Failed",
                    msg: "Name required for category !"
                }
            )
        }

        const CategoryDetails = await Category.create({
            name: name,
            description: description,
        })

        console.log("Category Created", CategoryDetails);

        return resp.status(200).json(
            {
                status: "Success",
                data: CategoryDetails,
                msg: "Category created successfully !"
            }
        )

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "error in creating category",
            errormsg: error
        })
    }

}

// show all category
// mostly we use this to show dropdown options 

exports.showAllCategories = async (req, resp) => {
    try {
        const allCategorys = await Category.find(
            {},
            {
                name: true,
                description: true
            })

        return resp.status(200).json({
            status: "Success",
            data: allCategorys
        })

    } catch (error) {
        console.log(error);
        return resp.status(200).json({
            status: "Failed",
            msg: "Error while showing all categories",
            errormsg: error
        })

    }
}

//category page Details


exports.categoryPageDetails = async (req, resp) => {
    try {
        //get categoryId
        const { categoryId } = req.body;
        //get courses for specified categoryId
        const selectedCategory = await Category.findById(categoryId)
            .populate("courses")
            .exec();
        //validation
        if (!selectedCategory) {
            return resp.status(200).json({
                status: "Failed",
                message: 'Data Not Found',
            });
        }
        //get coursesfor different categories
        const differentCategories = await Category.find({
            _id: { $ne: categoryId },
        })
            .populate("courses")
            .exec();

        //get top 10 selling courses
        //HW - write it on your own

        //return response
        return resp.status(200).json({
            success: true,
            data: {
                selectedCategory,
                differentCategories,
            },
        });

    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            status: "Failed",
            message: error.message,
        });
    }
}
