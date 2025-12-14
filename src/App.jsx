import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';

function App() {
  // El DashboardLayout se encarga del fondo y la estructura base.
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}

export default App;