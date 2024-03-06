let converCssToReactStyleObject = (cssObject: string) => {
  return cssObject
    .split(";")
    .map((line) =>
      line
        .split(":")
        .map((prop, index) =>
          prop.includes("-")
            ? [
                prop.split("-")[0],
                prop
                  .split("-")[1]
                  .split("")
                  .map((a, i) => (i === 0 ? a.toUpperCase() : a))
                  .join(""),
              ]
                .join("")
                .trim()
            : prop
        )
        .join(" : ")
        .split(":")
        .map((m, id) => (id !== 0 ? ['"', m, '"'].join("").trim() : m.trim()))
        .join(" : ")
    )
    .slice(0, -1)
    .join(" , ")
    .trim();
};

console.log(
  converCssToReactStyleObject(
    "  color: #ff1100;background-color: #ff000046; width: 100%; border-radius: 10px;padding: 10px; display: flex  align-items: center;font-size: 1rem; font-weight: 500;"
  )
);
