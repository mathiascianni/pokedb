export const StyledTitle = ({ type, children }) => {
    if (type === "h1") return (<h1 className="capitalize mb-2 font-bold text-4xl">{children}</h1>);
    if (type === "h2") return (<h2 className="capitalize mb-2 font-bold text-2xl">{children}</h2>);
    if (type === "p") return (<p className="capitalize mb-2 font-bold text-2xl">{children}</p>);
    return (<span className="capitalize mb-2 font-bold text-xl">{children}</span>);
}