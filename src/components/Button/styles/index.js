import styled from "styled-components";
import { base } from "./base";
import variant from "../../../utils/variant";
import { primary, secondary, gray, green } from "./use";
import { pill, normal, circle } from "./addOn";
import { small, medium, large } from "./sizes";

const use = variant("use", { primary, secondary, gray, green });
const addOn = variant("addOn", { pill, normal, circle });
const size = variant("size", { small, medium, large });

export const StyledButton = styled(base)(use, addOn, size);
