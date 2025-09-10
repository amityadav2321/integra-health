function MappingDetails({ mappings }) {
  if (!mappings || mappings.length === 0) {
    return <p className="text-gray-500 mt-4">No mappings available.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Mappings</h2>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ICD Code</th>
            <th className="p-2 border">ICD Label</th>
            <th className="p-2 border">Relation</th>
          </tr>
        </thead>
        <tbody>
          {mappings.map((m, idx) => (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{m.icd_code}</td>
              <td className="p-2 border">{m.icd_label}</td>
              <td className="p-2 border">{m.relation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MappingDetails;
