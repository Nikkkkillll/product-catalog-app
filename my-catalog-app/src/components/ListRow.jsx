import React from "react";

const Badge = ({ text, color }) => (
    <span className={"badge " + (color || "")}>{text}</span>
);

export default React.memo(function ListRow({ item, selected, onToggleSelect }) {
    // compute category breadcrumb
    const bread = [item.cat, item.subCat, item.subset]
        .filter(Boolean)
        .join(" / ");

    // range: placeholder if missing
    const range = item.range || "";

    return (
        <div className="list-row">
            {/* LEFT SIDE */}
            <div className="row-left">
                <div className="row-title">{item.title}</div>
                <div className="row-breadcrumb">{bread}</div>
            </div>

            {/* MID COLUMNS */}
            <div className="row-mid">
                <div className="row-range">{range}</div>
                <div className="row-freq">{item.freq || ""}</div>
            </div>

            {/* UNIT */}
            <div className="row-unit">{item.unit || ""}</div>

            {/* COVERAGE TAGS */}
            <div className="row-coverage">
                {item.sData === "Y" ? <Badge text="S" color="pink" /> : null}
                {item.datatype === "N" ? <Badge text="N" color="blue" /> : null}
            </div>

            {/* ACTIONS */}
            <div className="row-actions-cell">
                <div className="row-actions">
                    {/* bookmark */}
                    <button title="bookmark" className="icon small">
                        <img src="/bookmark.svg" alt="compare" style={{ width: "18px", height: "18px" }} />
                    </button>

                    {/* NEW: SELECT/UNSELECT BUTTON */}
                    <button
                        title="select"
                        className="icon small"
                        onClick={onToggleSelect}
                        style={{
                            background: selected ? "#e0e7ff" : "#fbfdff",
                            borderColor: selected ? "#6366f1" : "#e5e7eb",
                            color: selected ? "#312e81" : "inherit",
                            fontWeight: selected ? "700" : "400",
                        }}
                    >
                        {selected ? "✔" : "＋"}
                    </button>

                    {/* compare */}
                    <button title="compare" className="icon small">
  <img src="/search.svg" alt="compare" style={{ width: "18px", height: "18px" }} />
</button>

                    {/* menu */}
                    <button title="menu" className="icon small">
                        ⋯
                    </button>
                </div>
            </div>
        </div>
    );
});
