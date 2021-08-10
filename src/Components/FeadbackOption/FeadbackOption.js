import { PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
export const FeadbackOption = ({ options, btnOption }) => {
  return (
    <>
      {btnOption.map((mood) => (
        <button key={uuidv4()} onClick={options(mood)}>
          {mood}
        </button>
      ))}
    </>
  );
};
FeadbackOption.propTypes = {
  options: PropTypes.func.isRequired,
  btnOption: PropTypes.arrayOf(PropTypes.string),
};
