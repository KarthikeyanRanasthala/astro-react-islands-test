import _ from "lodash";

const Heavy = () => {
  return (
    <div className="min-h-screen">
      <p>This section uses loadash</p>
      <p>{_.VERSION}</p>
    </div>
  );
};

export default Heavy;