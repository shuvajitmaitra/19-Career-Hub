import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-blue-50 rounded-lg p-6 space-y-3 mt-6 flex flex-col items-center">
      <img src={logo} alt="" />
      <h1 className="text-xl font-semibold">{category_name}</h1>
      <p>{availability}</p>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
