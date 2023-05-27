const getTypeColor = (type, background = true) => {
    let stringColor;

    if (background) {
        if (type == "normal") stringColor = "text-white bg-gray-400";
        if (type == "fighting") stringColor = "text-white bg-red-700";
        if (type == "flying") stringColor = "text-black bg-violet-300";
        if (type == "poison") stringColor = "text-white bg-violet-800";
        if (type == "ground") stringColor = "text-black bg-amber-400";
        if (type == "rock") stringColor = "text-white bg-yellow-800";
        if (type == "bug") stringColor = "text-white bg-lime-600";
        if (type == "ghost") stringColor = "text-white bg-purple-700";
        if (type == "steel") stringColor = "text-white bg-slate-600";
        if (type == "fire") stringColor = "text-white bg-orange-600";
        if (type == "water") stringColor = "text-white bg-blue-400";
        if (type == "grass") stringColor = "text-white bg-green-500";
        if (type == "electric") stringColor = "text-black bg-yellow-300";
        if (type == "psychic") stringColor = "text-white bg-pink-500";
        if (type == "ice") stringColor = "text-black bg-sky-300";
        if (type == "dragon") stringColor = "text-white bg-indigo-600";
        if (type == "dark") stringColor = "text-white bg-yellow-950";
        if (type == "fairy") stringColor = "text-black bg-pink-300";
        if (type == "all") stringColor = "text-white bg-gray-800";
    } else {
        if (type == "normal") stringColor = "text-gray-400";
        if (type == "fighting") stringColor = "text-red-700";
        if (type == "flying") stringColor = "text-violet-300";
        if (type == "poison") stringColor = "text-violet-800";
        if (type == "ground") stringColor = "text-amber-400";
        if (type == "rock") stringColor = "text-yellow-800";
        if (type == "bug") stringColor = "text-lime-600";
        if (type == "ghost") stringColor = "text-purple-700";
        if (type == "steel") stringColor = "text-slate-600";
        if (type == "fire") stringColor = "text-orange-600";
        if (type == "water") stringColor = "text-blue-400";
        if (type == "grass") stringColor = "text-green-500";
        if (type == "electric") stringColor = "text-yellow-300";
        if (type == "psychic") stringColor = "text-pink-500";
        if (type == "ice") stringColor = "text-sky-300";
        if (type == "dragon") stringColor = "text-indigo-600";
        if (type == "dark") stringColor = "text-yellow-950";
        if (type == "fairy") stringColor = "text-pink-300";
        if (type == "all") stringColor = "text-white bg-gray-300";
    }

    return stringColor;
}

export default getTypeColor;