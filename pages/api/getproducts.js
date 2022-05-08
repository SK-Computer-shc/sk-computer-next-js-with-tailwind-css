import connectDb from "../../middleware/mongoose"
import product from "../../modals/product"

const handler = async (req, res)=>{
let products =await product.find()

res.status(200).json({ products})
}


export default connectDb(handler);