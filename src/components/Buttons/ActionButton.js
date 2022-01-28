import {forwardRef} from 'react';
import {_Button} from "./Button";

const ActionButton = forwardRef((props, ref) => _Button(props, ref, 'bg-purple-700 hover:bg-purple-600 text-white'));

export default ActionButton;
