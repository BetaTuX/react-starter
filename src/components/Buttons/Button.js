import React, {forwardRef} from 'react';

export function _Button({children, className, icon, narrow, ...props}, pRef, additionalStyle) {
  const Icon = icon;

  return (
    <button ref={pRef} {...props}
            className={`w-full inline-flex justify-center align-items-center rounded-md ${narrow ? 'px-3' : 'px-4'} py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all ease-in-out ${className || ''} ${additionalStyle || ''}`}>
      {icon ? <Icon className="mr-1 h-[1.3rem]"/> : ''}
      {children || 'Button'}
    </button>
  );
}

const Button = forwardRef((props, ref) => _Button(props, ref, 'btn'));

export default Button;
