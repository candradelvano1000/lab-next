import styles from './spaces.module.css';
import Toolbar from './components/Toolbar';
import SpacesTable from './components/SpacesTable';

export default async function SpacesPage() {
  const spaces = [
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

  return (
    <section className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Spaces</h1>
          <p className={styles.subtitle}>
            A space is a content silo, for instance for separate sites, stores, or apps.
            <a className={styles.learn}> Learn more</a>
          </p>
        </div>
      </header>

      {/* Toolbar */}
      <Toolbar />

      {/* Table */}
      <SpacesTable data={spaces} />
    </section>
  );
}
