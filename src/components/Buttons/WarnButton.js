import {forwardRef} from 'react';
import {_Button} from "./Button";

const WarnButton = forwardRef((props, ref) => _Button(props, ref, 'btn-warn'));

export default WarnButton;
