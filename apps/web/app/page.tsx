'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Dashboard() {
  const [greeting, setGreeting] = useState('Selamat Datang');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Selamat Pagi');
    else if (hour < 15) setGreeting('Selamat Siang');
    else if (hour < 18) setGreeting('Selamat Sore');
    else setGreeting('Selamat Malam');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <div>
          <h1>{greeting}, Admin</h1>
          <p>Berikut adalah ringkasan sistem manajemen karyawan hari ini.</p>
        </div>
        <button className={styles.actionBtn}>
          <span>+</span> Tambah Karyawan
        </button>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} glass`}>
          <div className={styles.statIcon} style={{ background: 'rgba(14, 116, 144, 0.1)', color: 'var(--efarina-brand-m)' }}>
            👥
          </div>
          <div className={styles.statTitle}>Total Karyawan Aktif</div>
          <div className={styles.statValue}>
            432 <span className={`${styles.statTrend} ${styles.trendUp}`}>+12 bulan ini</span>
          </div>
        </div>

        <div className={`${styles.statCard} glass`}>
          <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--efarina-accent-green)' }}>
            🏥
          </div>
          <div className={styles.statTitle}>Kehadiran Hari Ini (Medis)</div>
          <div className={styles.statValue}>
            120 <span className={`${styles.statTrend} ${styles.trendUp}`}>95%</span>
          </div>
        </div>

        <div className={`${styles.statCard} glass`}>
          <div className={styles.statIcon} style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--efarina-accent-yellow)' }}>
            🏖️
          </div>
          <div className={styles.statTitle}>Sedang Cuti / Izin</div>
          <div className={styles.statValue}>
            15 <span className={`${styles.statTrend} ${styles.trendDown}`}>-2 dari kemarin</span>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={`${styles.section} glass`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Aktivitas Kehadiran Terkini</h2>
            <a href="/attendance" className={styles.viewAll}>Tampilkan Semua</a>
          </div>
          
          <div className={styles.activityList}>
            {[
              { id: 1, name: 'Dr. Sarah', action: 'Check-in Shift Pagi', time: '07:05 AM', status: 'Tepat Waktu', badge: styles.badgeSuccess },
              { id: 2, name: 'Ns. Budi', action: 'Check-in Shift Pagi', time: '07:12 AM', status: 'Terlambat', badge: styles.badgeWarning },
              { id: 3, name: 'Ahmad (IT)', action: 'Check-in', time: '07:55 AM', status: 'Tepat Waktu', badge: styles.badgeSuccess },
              { id: 4, name: 'Drg. Lisa', action: 'Mulai Operasi', time: '08:30 AM', status: 'Berlangsung', badge: styles.badgeSuccess },
            ].map(activity => (
              <div key={activity.id} className={styles.activityItem}>
                <div className={styles.activityAvatar} style={{ background: `hsl(${activity.id * 50}, 70%, 80%)`}}></div>
                <div className={styles.activityInfo}>
                  <div className={styles.activityDesc}><strong>{activity.name}</strong> - {activity.action}</div>
                  <div className={styles.activityTime}>{activity.time}</div>
                </div>
                <div className={`${styles.badge} ${activity.badge}`}>{activity.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.section} glass`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Jadwal Cuti Mendatang</h2>
            <span className={styles.viewAll}>Kelola</span>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem} style={{ border: 'none', padding: '8px 0' }}>
              <div>
                <strong>Budi (HRD)</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>15 - 18 April 2026</div>
              </div>
              <div style={{ marginLeft: 'auto', fontWeight: 600, color: 'var(--efarina-accent-yellow)'}}>Menunggu Review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
