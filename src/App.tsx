import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServicePage } from '@/pages/ServicePage';
import { ServiceAreasPage } from '@/pages/ServiceAreasPage';
import { ServiceAreaPage } from '@/pages/ServiceAreaPage';
import { AboutPage } from '@/pages/AboutPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';
import { BlogListPage } from '@/pages/BlogListPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

function App() {
  const serviceRoutes = services.map((s) => (
    <Route key={s.path} path={s.path} element={<ServicePage />} />
  ));
  const areaRoutes = serviceAreas.map((a) => (
    <Route key={a.path} path={a.path} element={<ServiceAreaPage />} />
  ));

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {serviceRoutes}
          {areaRoutes}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
