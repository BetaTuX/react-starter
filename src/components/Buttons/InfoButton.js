import {forwardRef} from 'react';
import {_Button} from "./Button";

const InfoButton = forwardRef((props, ref) => _Button(props, ref, 'btn-info'));

export default InfoButton;
