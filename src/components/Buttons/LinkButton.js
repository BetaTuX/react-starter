import {forwardRef} from 'react';
import {_Button} from "./Button";
import './LinkButton.css'

const LinkButton = forwardRef((props, ref) => _Button(props, ref, 'btn-lnk'));

export default LinkButton;
