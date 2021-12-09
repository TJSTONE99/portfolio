import { ReactElement } from 'react';
import Scene3D from '../3D/scene3d';
import Footer from '../footer/footer';
import Header from '../header/header';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <Scene3D />
      <Header /> 
      <main className="relative h-full">{children}</main>
      <Footer />
    </div>
  );
}