import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "../../templates/page/PageTemplate";

const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <PageTemplate
        frontmatter={{
          title: data.title,
          color: data.color,
          image: getAsset(data.image),
        }}
        html={data.body}
      />
    );
  }

  return <div>Loading...</div>;
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PagePreview;
