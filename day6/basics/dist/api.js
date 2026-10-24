const API_BASE_URL = 'http://localhost:8000';
async function parseResponse(response) {
    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        const detail = typeof body.detail === 'string' ? body.detail : JSON.stringify(body.detail ?? response.statusText);
        throw new Error(`API ${response.status}: ${detail}`);
    }
    return response.json();
}
export async function createEncounter(encounter) {
    const response = await fetch(`${API_BASE_URL}/encounters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(encounter),
    });
    return parseResponse(response);
}
export async function getEncounter(encounterId) {
    return parseResponse(await fetch(`${API_BASE_URL}/encounters/${encounterId}`));
}
