import React from "react";
import {
  StyledBreadCrumbWrapper,
  StyledFinalCrumb,
  StyledCrumb,
} from "./styles";

const paths = ["Çiçeksepeti Market", "İstanbul", "ÇiçekSepetiBreadCrumb "];

const BreadCrumb = () => {
  return (
    <StyledBreadCrumbWrapper>
      {paths.map((path, i) => {
        if (i !== paths.length - 1) {
          return (
            <StyledCrumb key={path}>
              {path} {" > "}
            </StyledCrumb>
          );
        } else {
          return <StyledFinalCrumb key={path}>{path} </StyledFinalCrumb>;
        }
      })}
    </StyledBreadCrumbWrapper>
  );
};

export default BreadCrumb;
