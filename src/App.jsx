import { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import SearchBox from "./Components/SearchBox";
import ResultCard from "./Components/ResultCard";
import History from "./Components/History";
import MappingDetails from "./Components/MappingDetails";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ sidebar toggle state

  

  const mockData = {
  "NAM-001": {
    "term": "Jwara (Fever)",
    "mappings": [
      {"icd_code": "1A00", "icd_label": "Fever, unspecified", "relation": "approximateMatch"}
    ]
  },
  "NAM-002": {
    "term": "Madhumeha (Diabetes mellitus)",
    "mappings": [
      {"icd_code": "5A11", "icd_label": "Type 2 diabetes mellitus", "relation": "broadMatch"}
    ]
  },
  "NAM-003": {
    "term": "Amlapitta (Acid dyspepsia)",
    "mappings": [
      {"icd_code": "DA11", "icd_label": "Gastroesophageal reflux disease", "relation": "closeMatch"}
    ]
  },
  "NAM-004": {
    "term": "Shwasa (Asthma)",
    "mappings": [
      {"icd_code": "CA23", "icd_label": "Asthma, unspecified", "relation": "exactMatch"}
    ]
  },
  "NAM-005": {
    "term": "Arsha (Hemorrhoids)",
    "mappings": [
      {"icd_code": "MB40", "icd_label": "Hemorrhoids", "relation": "closeMatch"}
    ]
  },
  "NAM-006": {
    "term": "Kustha (Skin disorders, incl. Psoriasis)",
    "mappings": [
      {"icd_code": "EA80", "icd_label": "Psoriasis vulgaris", "relation": "narrowMatch"},
      {"icd_code": "EA81", "icd_label": "Dermatitis, unspecified", "relation": "broadMatch"}
    ]
  },
  "NAM-007": {
    "term": "Rajayakshma (Tuberculosis)",
    "mappings": [
      {"icd_code": "1B10", "icd_label": "Pulmonary tuberculosis", "relation": "exactMatch"}
    ]
  },
  "NAM-008": {
    "term": "Hridroga (Heart disease)",
    "mappings": [
      {"icd_code": "BA10", "icd_label": "Ischemic heart disease", "relation": "broadMatch"},
      {"icd_code": "BA11", "icd_label": "Myocardial infarction", "relation": "narrowMatch"}
    ]
  },
  "NAM-009": {
    "term": "Vata Vyadhi (Neurological disorders, esp. paralysis)",
    "mappings": [
      {"icd_code": "8B20", "icd_label": "Stroke, not specified as hemorrhage or infarction", "relation": "approximateMatch"}
    ]
  },
  "NAM-010": {
    "term": "Panduroga (Anemia)",
    "mappings": [
      {"icd_code": "3A00", "icd_label": "Iron deficiency anemia", "relation": "exactMatch"},
      {"icd_code": "3A01", "icd_label": "Anemia, unspecified", "relation": "broadMatch"}
    ]
  }
};


const handleSearch = () => {
  let found = null;
  const searchCode = code.trim().toUpperCase(); // normalize input
  const searchTermLower = code.trim().toLowerCase(); // for term search

  // 1. Direct NAM code match
  if (mockData[searchCode]) {
    found = { code: searchCode, ...mockData[searchCode] };
  } else {
    // 2. Search inside ICD mappings
    for (const [namCode, entry] of Object.entries(mockData)) {
      const match = entry.mappings.find(
        (m) => m.icd_code.toUpperCase() === searchCode
      );
      if (match) {
        found = { code: namCode, ...entry };
        break;
      }
    }

    // 3. Search inside Ayurvedic term (like "Jwara")
    if (!found) {
      for (const [namCode, entry] of Object.entries(mockData)) {
        if (entry.term.toLowerCase().includes(searchTermLower)) {
          found = { code: namCode, ...entry };
          break;
        }
      }
    }
  }

  // 4. Update state
  if (found) {
    setResult(found);
    setHistory((prev) => [...prev, found]);
  } else {
    setResult({
      code: searchCode,
      term: "Not found",
      mappings: [],
    });
  }
};


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ✅ Pass toggle logic to Header */}
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Layout */}
      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />


        {/* Main Content */}
        <main className="flex-1 p-6 transition-all duration-300">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <SearchBox code={code} setCode={setCode} onSearch={handleSearch} />
            {result && (
              <>
                <ResultCard result={result} />
                <MappingDetails mappings={result.mappings} />
              </>
            )}
            <History history={history} />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
