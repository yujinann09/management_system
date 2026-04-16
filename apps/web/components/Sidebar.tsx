'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const SIDEBAR_ITEMS = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Karyawan', path: '/employees', icon: '👥' },
  { name: 'Departemen', path: '/departments', icon: '🏥' },
  { name: 'Kehadiran', path: '/attendance', icon: '⏱️' },
  { name: 'Jadwal Shift', path: '/schedules', icon: '📅' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} glass`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>RS</div>
        <span>Efarina</span>
      </div>

      <nav className={styles.nav}>
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button className={`${styles.navItem} ${styles.logout}`} style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}>
        <span>🚪</span> Keluar
      </button>
    </aside>
  );
}
