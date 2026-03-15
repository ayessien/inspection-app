import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

function InspectionDashboard() {
  const [inspections, setInspections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterSite, setFilterSite] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPhase, setFilterPhase] = useState('');

  useEffect(() => {
    fetchInspections();
  }, []);

  async function fetchInspections() {
    try {
      const result = await client.models.CommissioningInspection.list();
      const sorted = [...result.data].sort(
        (a, b) => new Date(b.inspectionDate) - new Date(a.inspectionDate)
      );
      setInspections(sorted);
    } catch (error) {
      console.error('Error fetching inspections:', error);
    } finally {
      setLoading(false);
    }
  }

  const filtered = inspections.filter((item) => {
    return (
      (filterSite === '' || item.siteId === filterSite) &&
      (filterStatus === '' || item.status === filterStatus) &&
      (filterPhase === '' || item.phase === filterPhase)
    );
  });

  const statusColor = (status) => {
    if (status === 'Pass') return '#3fb950';
    if (status === 'Fail') return '#f85149';
    return '#d29922';
  };

  return (
    <div className="form-card">
      <h2>Inspection Records</h2>

      {/* Filters */}
      <div className="filter-bar">
        <div className="form-group">
          <label>Filter by Site</label>
          <select value={filterSite} onChange={(e) => setFilterSite(e.target.value)}>
            <option value="">All Sites</option>
            <option value="BAH52">BAH52</option>
            <option value="BAH53">BAH53</option>
            <option value="BAH54">BAH54</option>
          </select>
        </div>

        <div className="form-group">
          <label>Filter by Phase</label>
          <select value={filterPhase} onChange={(e) => setFilterPhase(e.target.value)}>
            <option value="">All Phases</option>
            <option value="Pre-Energization">Pre-Energization</option>
            <option value="Energization">Energization</option>
            <option value="Functional Testing">Functional Testing</option>
          </select>
        </div>

        <div className="form-group">
          <label>Filter by Status</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <button className="refresh-btn" onClick={fetchInspections}>
          🔄 Refresh
        </button>
      </div>

      {/* Summary Badges */}
      <div className="summary-bar">
        <span className="badge badge-total">Total: {filtered.length}</span>
        <span className="badge badge-pass">
          Pass: {filtered.filter((i) => i.status === 'Pass').length}
        </span>
        <span className="badge badge-fail">
          Fail: {filtered.filter((i) => i.status === 'Fail').length}
        </span>
        <span className="badge badge-pending">
          Pending: {filtered.filter((i) => i.status === 'Pending').length}
        </span>
      </div>

      {/* Table */}
      {loading ? (
        <p className="loading-msg">Loading inspection records...</p>
      ) : filtered.length === 0 ? (
        <p className="loading-msg">No records found. Submit an inspection to get started.</p>
      ) : (
        <div className="table-wrapper">
          <table className="inspection-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Site</th>
                <th>Phase</th>
                <th>Equipment Tag</th>
                <th>Checklist Item</th>
                <th>Status</th>
                <th>Tech</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{new Date(item.inspectionDate).toLocaleDateString('en-GB')}</td>
                  <td>{item.siteId}</td>
                  <td>{item.phase}</td>
                  <td>{item.equipmentTag}</td>
                  <td>{item.checklistItem}</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ color: statusColor(item.status), borderColor: statusColor(item.status) }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{item.techAlias}</td>
                  <td className="notes-cell">{item.notes || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default InspectionDashboard;
