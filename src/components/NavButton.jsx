import getTypeColor from "../helpers/getTypeColor";

export const NavButton = ({type, clickEvent}) => {
    const textAndBackground = getTypeColor(type);

    return (
        <button onClick={clickEvent} className={`w-full py-0.5 rounded-full capitalize ${textAndBackground}`}>{type}</button>
    );
}