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
            <React.Fragment key={path}>
              <StyledCrumb href="#">{path}</StyledCrumb>
              {" > "}
            </React.Fragment>
          );
        } else {
          return (
            <StyledFinalCrumb key={path} href="#">
              {path}
            </StyledFinalCrumb>
          );
        }
      })}
    </StyledBreadCrumbWrapper>
  );
};

export default BreadCrumb;
