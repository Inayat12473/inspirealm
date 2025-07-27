import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000/api/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage('❌ Error fetching backend');
      });
  }, []);

   return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-3xl font-bold">
      Tailwind background is working 🎨
    </div>

  );
}

export default App;
