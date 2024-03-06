var converCssToReactStyleObject = function (cssObject) {
    return cssObject
        .split(";")
        .map(function (line) {
        return line
            .split(":")
            .map(function (prop, index) {
            return prop.includes("-")
                ? [
                    prop.split("-")[0],
                    prop
                        .split("-")[1]
                        .split("")
                        .map(function (a, i) { return (i === 0 ? a.toUpperCase() : a); })
                        .join(""),
                ]
                    .join("")
                    .trim()
                : prop;
        })
            .join(" : ")
            .split(":")
            .map(function (m, id) { return (id !== 0 ? ['"', m, '"'].join("").trim() : m.trim()); })
            .join(" : ");
    })
        .slice(0, -1)
        .join(" , ")
        .trim();
};
console.log(converCssToReactStyleObject("  color: #ff1100;background-color: #ff000046; width: 100%; border-radius: 10px;padding: 10px; display: flex  align-items: center;font-size: 1rem; font-weight: 500;"));
