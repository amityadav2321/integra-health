function ResultCard({ result }) {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Result</h2>
      <p><strong>Code:</strong> {result.code}</p>
      <p><strong>Term:</strong> {result.term}</p>

      <h3 className="text-lg font-semibold mt-3">ICD-11 Mappings:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {result.mappings.map((map, index) => (
          <li key={index}>
            <strong>{map.icd_code}</strong> – {map.icd_label} 
            <span className="italic text-gray-600"> ({map.relation})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
