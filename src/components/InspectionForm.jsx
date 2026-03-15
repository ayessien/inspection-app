
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

function InspectionForm({ techAlias = '' }) {
  const [formData, setFormData] = useState({
    siteId: '',
    phase: '',
    equipmentTag: '',
    checklistItem: '',
    status: 'Pending',
    techAlias: techAlias,   // ← pre-filled from logged-in user
    notes: '',
  });


  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.models.CommissioningInspection.create({
        ...formData,
        inspectionDate: new Date().toISOString(),
      });
      setSubmitted(true);
      setFormData({
        siteId: '',
        phase: '',
        equipmentTag: '',
        checklistItem: '',
        status: 'Pending',
        techAlias: '',
        notes: '',
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Error saving inspection:', error);
    }
  };

  return (
    <div className="form-card">
      <h2>New Commissioning Inspection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="siteId">Site ID</label>
            <select id="siteId" name="siteId" value={formData.siteId} onChange={handleChange} required>
              <option value="">-- Select Site --</option>
              <option value="BAH52">BAH52</option>
              <option value="BAH53">BAH53</option>
              <option value="BAH54">BAH54</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phase">Phase</label>
            <select id="phase" name="phase" value={formData.phase} onChange={handleChange} required>
              <option value="">-- Select Phase --</option>
              <option value="Pre-Energization">Pre-Energization</option>
              <option value="Energization">Energization</option>
              <option value="Functional Testing">Functional Testing</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="equipmentTag">Equipment Tag</label>
            <input
              id="equipmentTag"
              name="equipmentTag"
              value={formData.equipmentTag}
              onChange={handleChange}
              placeholder="e.g. UPS-BAH52-01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="techAlias">Tech Alias</label>
            <input
              id="techAlias"
              name="techAlias"
              value={formData.techAlias}
              onChange={handleChange}
              placeholder="e.g. ayessien"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="checklistItem">Checklist Item</label>
            <input
              id="checklistItem"
              name="checklistItem"
              value={formData.checklistItem}
              onChange={handleChange}
              placeholder="e.g. Verify torque on bus bars"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any observations, measurements, or comments..."
            />
          </div>

        </div>

        <button type="submit" className="submit-btn">Submit Inspection</button>

        {submitted && (
          <div className="success-msg">
            ✅ Inspection record saved successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default InspectionForm;

