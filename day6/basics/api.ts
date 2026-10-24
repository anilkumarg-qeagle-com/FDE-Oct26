const API_BASE_URL = 'http://localhost:8000';

export interface NewEncounter {
    patient_nbr: number;
    age: string | null;
    time_in_hospital: number;
    number_inpatient: number;
    number_emergency: number;
    num_medications: number;
}

export interface Encounter extends NewEncounter {
    encounter_id: number;
    risk_score: number;
    risk_level: 'LOW' | 'MEDIUM' | 'HIGH';
    review_reason: string | null;
    created_at: string;
}

async function parseResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        const detail = typeof body.detail === 'string' ? body.detail : JSON.stringify(body.detail ?? response.statusText);
        throw new Error(`API ${response.status}: ${detail}`);
    }
    return response.json() as Promise<T>;
}

export async function createEncounter(encounter: NewEncounter): Promise<Encounter> {
    const response = await fetch(`${API_BASE_URL}/encounters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(encounter),
    });
    return parseResponse<Encounter>(response);
}

export async function getEncounter(encounterId: number): Promise<Encounter> {
    return parseResponse<Encounter>(await fetch(`${API_BASE_URL}/encounters/${encounterId}`));
}
