import { Link } from "react-router-dom";

export const StyledButton = ({ clickFunction, href, children }) => {
    const style = "bg-slate-200 py-2 px-4 rounded-full hover:bg-slate-300 transition transition-color mb-4 text-center";

    if (!href) return (<button className={style} onClick={clickFunction}>{children}</button>);
    return (<Link to={href} className={`${style} inline-block`} onClick={clickFunction}>{children}</Link>);
}