import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import ListRow from "../components/ListRow";
import Pagination from "../components/Pagination";

export default function CataloguePage({ dataset, loadDataset, onSwitchDataset }) {
    const ITEMS_PER_PAGE = 10;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // selected items
    const [selectedItems, setSelectedItems] = useState([]);

    // view state
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        loadDataset(dataset).then((json) => {
            if (!cancelled) {
                setData(json);
                setLoading(false);
                setPage(1);
                setActiveCategory(null);
                setSearch("");
                setSelectedItems([]); // RESET selection on dataset change
            }
        });
        return () => { cancelled = true; };
    }, [dataset, loadDataset]);

    // derive category list
    const categories = useMemo(() => {
        if (!data?.categories) return [];
        return Object.keys(data.categories);
    }, [data]);

    const items = useMemo(() => data?.frequent || [], [data]);

    // filters
    const filtered = useMemo(() => {
        let list = items;
        if (activeCategory) list = list.filter(i => i.cat === activeCategory);
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(i =>
                (i.title || "").toLowerCase().includes(q) ||
                (i.subCat || "").toLowerCase().includes(q)
            );
        }
        return list;
    }, [items, activeCategory, search]);

    // pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    useEffect(() => { if (page > totalPages) setPage(totalPages); }, [totalPages]);

    const pageItems = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }, [filtered, page]);

    // toggle selection
    const toggleSelect = (id) => {
        setSelectedItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((x) => x !== id);
            }
            return [...prev, id];
        });
    };

    if (loading) return <div style={{ padding: 20 }}>Loading dataset...</div>;
    if (!data) return <div style={{ padding: 20 }}>Dataset not available. Put JSON in public/data/{dataset}</div>;

    return (
        <div>
        {/* === PERFECT TOP ACTION BAR === */}
                <div className="topbar">
                    <div className="topbar-left">
                        <img src="/angle.svg"></img>
                        <span className="topbar-title">Economic Monitor</span>
                    </div>

                    <div className="topbar-right">
                        <button className="top-icon"><img style={{ height: "21px" }} src="/search.svg"></img></button>
                        <button className="top-icon"><img style={{ height: "21px" }} src="/bookmark.svg"></img></button>
                        <button className="top-icon"><img style={{ height: "21px" }} src="/filter.svg"></img></button>

                        <div className="top-divider"></div>

                        <span className="selected-label">Selected ({selectedItems.length})</span>

                        <button className="top-icon"><img style={{ height: "21px" }} src="/cart.svg"></img></button>
                        <button className="top-icon"><img style={{ height: "21px" }} src="/push-pin.png" /></button>

                        <button className="view-graph-btn">
                        View Graph
                        </button>
                    </div>
                </div>

        <div className="catalogue-layout">

            {/* LEFT SIDEBAR */}
            <aside className="left-column">
                <div className="left-header">
                    <div className="category-title">Category:</div>

                    <select
                        className="category-dropdown"
                        value={dataset}
                        onChange={(e) => onSwitchDataset(e.target.value)}
                    >
                        <option value="response1.json">India & States</option>
                        <option value="global.json">Global Data</option>
                        <option value="bis.json">BIS</option>
                        <option value="response2.json">IMF</option>
                        <option value="worldbank.json">World Bank</option>
                        <option value="un.json">United Nations</option>
                    </select>
                </div>

                <Sidebar
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={(c) => { setActiveCategory(c); setPage(1); }}
                />
            </aside>


            {/* RIGHT CONTENT */}
            <main className="right-column">

                {/* ===== RESULTS HEADER ===== */}
                <div className="results-top">
                    <h3>New Releases ({items.length})</h3>

                    <div className="controls">
                        <input
                            className="search"
                            placeholder="Search for data and analytics"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        />

                        <button className="btn" onClick={() => onSwitchDataset("response2.json")}>
                            Load IMF dataset
                        </button>
                    </div>
                </div>


                {/* ===== RESULTS LIST ===== */}
                <div className="result-list">
                    {pageItems.map(item => (
                        <ListRow
                            key={item.id}
                            item={item}
                            selected={selectedItems.includes(item.id)}
                            onToggleSelect={() => toggleSelect(item.id)}
                        />
                    ))}
                </div>


                {/* ===== FOOTER ===== */}
                <div className="results-footer">
                    <div className="summary">
                        Showing {pageItems.length} of {filtered.length} results
                    </div>

                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onChange={setPage}
                    />
                </div>

            </main>
        </div>
        </div>
    );
}
