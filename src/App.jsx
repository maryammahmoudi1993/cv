import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PostPage from './pages/PostPage.jsx';
import { AuthProvider } from './lib/AuthContext.jsx';
import { LanguageProvider } from './lib/LanguageContext.jsx';
import AdminRoutes from './admin/AdminRoutes.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </AuthProvider>
    </LanguageProvider>
  );
}
