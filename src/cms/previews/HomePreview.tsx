import React from "react";
import PropTypes from "prop-types";
import HomeTemplate from "../../templates/home/HomeTemplate";

const HomePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <HomeTemplate
        heading={data.heading}
        headerImage={getAsset(data.headerImage)}
        services={data.services}
        who={data.who}
      />
    );
  }

  return <div>Loading...</div>;
};

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePreview;
