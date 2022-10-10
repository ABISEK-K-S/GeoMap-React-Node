import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const MapChart = (props) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#000000"
        stroke="#808080"
        strokeWidth={1.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={props.selectedData?.COORDINATES?.split(",")}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#F53"
          stroke="#F53"
          fontSize="30px"
        >
          {props.selectedData.COMPANY_NAME}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
