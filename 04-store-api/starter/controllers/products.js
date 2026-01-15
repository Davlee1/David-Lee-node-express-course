const getAllProductsStatic = async (req, res) => {
  /*const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');*/

  res.status(200).json({ msg:'product testing route' });
};

const getAllProducts = async (req, res) => {
  /*const products = await Product.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');*/

  res.status(200).json({ msg:'product route' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};