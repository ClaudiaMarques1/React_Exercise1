import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Basic from "../../stories/exercises/03-component.stories"

const Demo = (Basic) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>{Basic.course}</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td>{Basic.modules[0].name}</td>
          <td>{Basic.modules[0].noLectures}</td>
          <td>{Basic.modules[0].noPracticals}</td>
        </tr>
        <tr>
          <td>{Basic.modules[1].name}</td>
          <td>{Basic.modules[1].noLectures}</td>
          <td>{Basic.modules[1].noPracticals}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Demo;
