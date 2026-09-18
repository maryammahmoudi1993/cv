import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PostPage from './pages/PostPage.jsx';
import { AuthProvider } from './lib/AuthContext.jsx';
import AdminRoutes from './admin/AdminRoutes.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </AuthProvider>
  );
}
