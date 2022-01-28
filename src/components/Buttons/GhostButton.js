import React, {forwardRef} from 'react';
import {_Button} from "./Button";

const GhostButton = forwardRef((props, ref) => _Button(props, ref, 'btn-ghost'));

export default GhostButton;
