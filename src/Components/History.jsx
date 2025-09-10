function History({ history }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-3">Search History</h2>
      <ul className="list-disc pl-6 space-y-1">
        {history.map((item, index) => (
          <li key={index}>
            <strong>{item.code}</strong>: {item.term}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
