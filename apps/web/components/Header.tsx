import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.search}>
        <span>🔍</span>
        <input 
          type="text" 
          placeholder="Cari karyawan, departemen..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.profileInfo}>
        <button className={styles.bell} aria-label="Notifikasi">
          🔔
        </button>

        <div className={styles.avatarContainer}>
          <div style={{ textAlign: 'right' }}>
            <div className={styles.userName}>Dr. Andi Saputra</div>
            <div className={styles.userRole}>Super Admin</div>
          </div>
          <div className={styles.avatar}>A</div>
        </div>
      </div>
    </header>
  );
}
