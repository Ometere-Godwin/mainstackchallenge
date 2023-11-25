import React from 'react'
import clsx from "clsx";

export default function Container({as: Component = "div", className, children}) {
  return (
    <Component className = {clsx("mx-w-7xl mx-auto px-6 lg:px-8", className)}>
        <div className='max-w-2xl mx-auto lg:max-w-none'>{children}</div>
    </Component>
  );
};