import styles from './spaces.module.css';
import Toolbar from './components/Toolbar';
import SpacesTable from './components/SpacesTable';
import WeeklyCodeStats from '@/components/ui/weekCodes'

const SPACES_DATA = [
  {
    name: 'Candra Delvano Space',
    type: 'Publish',
    users: 1,
    bandwidth: '0.001GB / 10',
    views: '4,634 / 10,000',
    credits: '7 / 75',
  },
  {
    name: 'Candra Delvano Space',
    type: 'Publish',
    users: 2,
    bandwidth: '0.001GB / 10',
    views: '4,634 / 10,000',
    credits: '7 / 75',
  },
  {
    name: 'Candra Delvano Space',
    type: 'Publish',
    users: 3,
    bandwidth: '0.001GB / 10',
    views: '4,634 / 10,000',
    credits: '7 / 75',
  },
];

export default async function SpacesPage() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Spaces</h1>
        <p className={styles.subtitle}>
          A space is a content silo, for instance for separate sites, stores, or apps.
          <a className={styles.learn}> Learn more</a>
        </p>
      </header>
      <Toolbar />
      <SpacesTable data={SPACES_DATA} />
      <WeeklyCodeStats />
    </section>
  );
}
