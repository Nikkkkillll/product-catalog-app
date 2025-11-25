import React, { useState, Suspense, lazy } from "react";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { loadDataset } from "./data/loadDataset";

const CataloguePage = lazy(() => import("./pages/CataloguePage"));

export default function App() {
  const [user, setUser] = useState(null);
  const [dataset, setDataset] = useState("response1.json");
  const [dataLoaderKey, setDataLoaderKey] = useState(0);

  const handleDatasetSwitch = (name) => {
    setDataset(name);
    setDataLoaderKey((k) => k + 1);
  };

  return (
    <>
      {/* HEADER ALWAYS VISIBLE */}
      <Header onLogout={() => setUser(null)} user={user} />

      {/* PAGE BODY */}
      {!user ? (
        <LoginPage onLogin={setUser} />
      ) : (
        <Suspense fallback={<div style={{ padding: 20 }}>Loading catalogue...</div>}>
          <CataloguePage
            key={dataLoaderKey}
            dataset={dataset}
            loadDataset={loadDataset}
            onSwitchDataset={handleDatasetSwitch}
          />
        </Suspense>
      )}
    </>
  );
}
