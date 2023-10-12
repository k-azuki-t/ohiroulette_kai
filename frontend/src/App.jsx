import { useState } from 'react'

function App() {
  const [places, setPlaces] = useState([]);

  const handleSubmit = (e) => {
    // Prevent browser reloding
    e.preventDefault();

    // Fetch API
    const newPlaces = ['マクドナルド', 'サブウェイ', 'ケンタッキー'];

    // Update state
    setPlaces([...places, ...newPlaces]);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          テキストで検索
          <textarea name="query" />
        </label>
        <button type="submit">探す</button>
      </form>
      <ul>
        {places.map((place) => (
          <li>{place}</li>
        ))}
      </ul>
    </>
  )
}

export default App
