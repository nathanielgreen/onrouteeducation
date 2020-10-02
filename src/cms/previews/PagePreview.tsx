import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/page/PageTemplate";

const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) return <div>Hello</div>;
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PagePreview;
