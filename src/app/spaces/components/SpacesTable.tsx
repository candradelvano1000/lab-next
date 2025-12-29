import styles from '../spaces.module.css';

type Space = {
  name: string;
  type: string;
  users: number;
  bandwidth: string;
  views: string;
  credits: string;
};

export default function SpacesTable({ data }: { data: Space[] }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name ⇅</th>
            <th>Type ⇅</th>
            <th>Users ⇅</th>
            <th>Bandwidth ⇅</th>
            <th>Visual Views ⇅</th>
            <th>Agent Credits ⇅</th>
          </tr>
        </thead>
        <tbody>
          {data.map((space, i) => (
            <tr key={i}>
              <td data-label="Name" className={styles.name}>{space.name}</td>
              <td data-label="Type">{space.type}</td>
              <td data-label="Users">{space.users}</td>
              <td data-label="Bandwidth">{space.bandwidth}</td>
              <td data-label="Visual Views">{space.views}</td>
              <td data-label="Agent Credits">{space.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
