import React, { useCallback, useState } from "react";
import Tree from "react-d3-tree";
import "./FamilyTree.css";

const FamilyTree = () => {
  const treeData = {
    name: "Murlidarji / Geeta Devi",
    children: [
      {
        name: "Gopal Krishna / Chandrakala",
        children: [
          {
            name: "Pankaj / Ritu",
            children: [
              { name: "Aniruddh", highlight: true }, // Highlighted
              { name: "Kartik" },
            ],
          },
          {
            name: "Rajdeep / Anusha",
            children: [{ name: "Sumedha" }, { name: "Shreyas" }],
          },
        ],
      },
      {
        name: "Suresh / Chandrakanta",
        children: [
          {
            name: "Abhishek / Rakhi",
            children: [{ name: "Divyansh" }],
          },
        ],
      },
      {
        name: "Dinesh / Vidhya",
        children: [
          {
            name: "Saurabh / Priyanka",
            children: [{ name: "Heenal" }],
          },
          {
            name: "Gaurav / Arpita",
            children: [{ name: "Hriday" }, { name: "Hridan" }],
          },
        ],
      },
    ],
  };
  const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
    const [translate, setTranslate] = useState(defaultTranslate);
    const [dimensions, setDimensions] = useState();
    const containerRef = useCallback((containerElem) => {
      if (containerElem !== null) {
        const { width, height } = containerElem.getBoundingClientRect();
        setDimensions({ width, height });
        setTranslate({ x: width / 2, y: height / 2 });
      }
    }, []);
    return [dimensions, translate, containerRef];
  };

  const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <div className="tree-container">
      <Tree
        dimensions={dimensions}
        translate={translate}
        data={treeData}
        orientation="step"
        renderCustomNodeElement={CustomNode}
      />
    </div>
  );
};

const CustomNode = ({ nodeDatum, toggleNode }) => {
  // console.log(nodeDatum, "nodeDatum");

  return (
    <g>
      
      <rect width="20" height="20" x="-10" y="-15" style={{fill:"skyblue" , stroke:"codetblue", strokeWidth:0, borderRadius:"50%"}} onClick={toggleNode} />
      <text className={nodeDatum.highlight ?"ani":""} fill={nodeDatum.highlight ? "red" : "black"} strokeWidth="0" x="30">
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default FamilyTree;
