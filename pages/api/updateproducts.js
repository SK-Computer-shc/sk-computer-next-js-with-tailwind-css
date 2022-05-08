import connectDb from "../../middleware/mongoose"
import product from "../../modals/product"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = await product.findByIdAndUpdate(req.body[i]._id, req.body[i])
            res.status(200).json({ Success: "Successfully Updated Product" })
        }
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler);