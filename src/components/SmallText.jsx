import React from 'react';

export const SmallText = ({ children, capitalize = false, type }) => {
    if (type === "p") return (<p className={`${capitalize ? "capitalize" : ""} text-slate-400 text-sm`}>{children}</p>);
    return (<p className={`${capitalize ? "capitalize" : ""} text-slate-400 text-sm`}>{children}</p>);
}
