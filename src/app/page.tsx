import Sidebar from '@/components/layout/sidebar/Sidebar';
import Spaces from '@/app/spaces/page';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Spaces />
    </main>
  );
}
