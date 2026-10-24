import Header from './components/Header';
import PatientTable from './components/PatientTable';
import Pagination from './components/Pagination';
import { useEncounters } from './hooks/useEncounters';
import './App.css';

function App() {
  const {
    encounters,
    currentPage,
    totalPages,
    isLoading,
    error,
    setCurrentPage,
  } = useEncounters();

  return (
    <div className="App">
      <Header />
      {error && <div className="error-message">{error}</div>}
      {isLoading && encounters.length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <PatientTable encounters={encounters} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
}

export default App;