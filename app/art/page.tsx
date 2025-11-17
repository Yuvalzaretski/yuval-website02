'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

type ArtItem = {
  objectID: number;
  title: string;
  artistDisplayName: string;
  primaryImageSmall: string;
  objectDate: string;
  medium: string;
  country: string;
};

type Department = {
  departmentId: number;
  displayName: string;
};

async function getArtData(departmentId: string, count: number): Promise<{ department: Department, artworks: ArtItem[] }> {
  const deptRes = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
  if (!deptRes.ok) throw new Error('Failed to fetch departments');
  const deptData = await deptRes.json();
  const department = deptData.departments.find((d: Department) => d.departmentId === parseInt(departmentId));
  if (!department) throw new Error('Invalid department');

  const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${departmentId}`);
  if (!res.ok) throw new Error('Failed to fetch object IDs');

  const data = await res.json();
  const ids: number[] = data.objectIDs || [];

  if (ids.length === 0) return { department, artworks: [] };

  const randomIds = ids.sort(() => 0.5 - Math.random()).slice(0, count);

  const fetches = randomIds.map(async (id) => {
    const itemRes = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
    if (!itemRes.ok) throw new Error(`Failed to fetch object ${id}`);
    return await itemRes.json();
  });

  const artworks = await Promise.all(fetches);

  return { department, artworks };
}

export default function ArtPage() {
  const [artworks, setArtworks] = useState<ArtItem[]>([]);
  const [deptName, setDeptName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtData('6', 12) 
      .then(({ department, artworks }) => {
        setArtworks(artworks);
        setDeptName(department.displayName);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className={styles.status}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <main className={styles.main}>
      <h1>{deptName}</h1>
      <div className={styles.gallery}>
        {artworks.map((art) => (
          <div key={art.objectID} className={styles.card}>
            {art.primaryImageSmall && <img src={art.primaryImageSmall} alt={art.title} />}
            <h2>{art.title}</h2>
            <p><strong>Artist:</strong> {art.artistDisplayName || 'Unknown'}</p>
            <p><strong>Date:</strong> {art.objectDate}</p>
            <p><strong>Medium:</strong> {art.medium}</p>
            <p><strong>Country:</strong> {art.country}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
