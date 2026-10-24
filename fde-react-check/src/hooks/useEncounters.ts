import { useState, useEffect } from 'react';
import type { Encounter } from '../types';

const API_BASE = 'http://localhost:8000';
const ITEMS_PER_PAGE = 10;

export function useEncounters() {
  const [encounters, setEncounters] = useState<Encounter[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEncounters(currentPage);
  }, [currentPage]);

  const fetchEncounters = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const offset = (page - 1) * ITEMS_PER_PAGE;
      const response = await fetch(
        `${API_BASE}/encounters?limit=${ITEMS_PER_PAGE}&offset=${offset}`
      );

      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

      const data = await response.json();
      // API returns {value: [...], Count: number} format
      const items = (data.value || data.encounters || data || []) as Record<string, unknown>[];

      const mappedEncounters: Encounter[] = items.map((item) => ({
        encounter_id: item.encounter_id as number,
        patient_nbr: item.patient_nbr as number,
        age: item.age as string,
        risk_level: item.risk_level as string,
      }));

      setEncounters(mappedEncounters);

      // Estimate total pages based on response
      if (items.length < ITEMS_PER_PAGE) {
        setTotalPages(page);
      } else {
        setTotalPages(page + 1);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch encounters';
      setError(message);
      console.error('Error fetching encounters:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const createEncounter = async (payload: Record<string, unknown>) => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE}/encounters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Failed to create: ${response.status}`);

      const newEncounter = await response.json();
      setEncounters([
        {
          encounter_id: newEncounter.encounter_id as number,
          patient_nbr: newEncounter.patient_nbr as number,
          age: newEncounter.age as string,
          risk_level: newEncounter.risk_level as string,
        },
        ...encounters,
      ]);
      return newEncounter;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create encounter';
      setError(message);
      throw err;
    }
  };

  const deleteEncounter = async (encounterId: number) => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE}/encounters/${encounterId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error(`Failed to delete: ${response.status}`);

      setEncounters(encounters.filter((e) => e.encounter_id !== encounterId));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete encounter';
      setError(message);
      throw err;
    }
  };

  return {
    encounters,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
    createEncounter,
    deleteEncounter,
  };
}
