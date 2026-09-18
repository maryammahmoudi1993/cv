import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
import AdminLayout from './AdminLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import PostsListPage from './pages/PostsListPage.jsx';
import PostFormPage from './pages/PostFormPage.jsx';
import ProjectsListPage from './pages/ProjectsListPage.jsx';
import ProjectFormPage from './pages/ProjectFormPage.jsx';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="posts" element={<PostsListPage />} />
        <Route path="posts/new" element={<PostFormPage />} />
        <Route path="posts/:id/edit" element={<PostFormPage />} />
        <Route path="projects" element={<ProjectsListPage />} />
        <Route path="projects/new" element={<ProjectFormPage />} />
        <Route path="projects/:id/edit" element={<ProjectFormPage />} />
      </Route>
    </Routes>
  );
}
