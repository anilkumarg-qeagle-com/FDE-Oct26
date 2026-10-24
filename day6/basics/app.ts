import { createEncounter, getEncounter, type Encounter, type NewEncounter } from './api.js';

const form = document.querySelector<HTMLFormElement>('#encounter-form')!;
const message = document.querySelector<HTMLParagraphElement>('#message')!;
const tableBody = document.querySelector<HTMLTableSectionElement>('#encounter-rows')!;
const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

function readForm(): NewEncounter {
    const data = new FormData(form);
    const num = (name: string) => Number(data.get(name));
    return {
        patient_nbr: num('patient-number'),
        age: (data.get('age') as string) || null,
        time_in_hospital: num('time-in-hospital'),
        number_inpatient: num('inpatient-visits'),
        number_emergency: num('emergency-visits'),
        num_medications: num('medications'),
    };
}

function addRow(e: Encounter): void {
    const row = tableBody.insertRow(0);
    [e.encounter_id, e.patient_nbr, e.age ?? '', e.time_in_hospital, e.number_inpatient, e.number_emergency, e.num_medications, `${e.risk_level} (${e.risk_score})`, e.review_reason ?? '']
        .forEach((value) => { row.insertCell().textContent = String(value); });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    message.textContent = 'Saving...';
    try {
        const created = await createEncounter(readForm());
        const saved = await getEncounter(created.encounter_id); // confirm via GET /encounters/{id}
        addRow(saved);
        message.textContent = `Created encounter ${saved.encounter_id}.`;
        form.reset();
    } catch (error) {
        message.textContent = `Error: ${error instanceof Error ? error.message : String(error)}`;
    } finally {
        submitButton.disabled = false;
    }
});
