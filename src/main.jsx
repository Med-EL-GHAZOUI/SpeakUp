import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

// Pas de StrictMode : son double montage en développement vide la première
// étiquette HTML de la scène 3D (composant Html de drei).
createRoot(document.getElementById('root')).render(<App />)
