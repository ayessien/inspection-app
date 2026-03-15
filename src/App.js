import React, { useState } from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import InspectionForm from './components/InspectionForm';
import InspectionDashboard from './components/InspectionDashboard';

function App() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <header className="app-header">
            <h1>DCEO Commissioning Inspection App</h1>
            <p>BAH Cluster — Data Center Equipment Commissioning</p>
            <div className="user-bar">
              <span className="user-info">👤 {user?.username}</span>
              <button className="signout-btn" onClick={signOut}>Sign Out</button>
            </div>
            <div className="tab-bar">
              <button
                className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                ➕ New Inspection
              </button>
              <button
                className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                📋 Records Dashboard
              </button>
            </div>
          </header>

          {activeTab === 'form' ? (
            <InspectionForm techAlias={user?.username} />
          ) : (
            <InspectionDashboard />
          )}
        </div>
      )}
    </Authenticator>
  );
}

export default App;
