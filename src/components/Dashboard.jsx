import React from 'react';
import Card from './Card';
import SampleTable from './SampleTable';
import SampleForm from './SampleForm';
import SampleAlert from './SampleAlert';

function Dashboard() {
  return (
    <div className="p-6 md:p-10 space-y-8 flex-1">
      {/* 1. Sección de Alerta/Notificación */}
      <div className="w-full">
        <SampleAlert />
      </div>

      {/* 2. Grid Principal para Métricas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card title="Revenue (Last 30 Days)">
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">$12,450.75</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">+12.5% vs last month</p>
        </Card>
        <Card title="New Users">
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1,200</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Up 30 users today</p>
        </Card>
        <Card title="Pending Tasks">
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">45</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Critical backlog</p>
        </Card>
      </div>

      {/* 3. Tabla y Formulario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <Card title="User Roles Table">
            <SampleTable />
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card title="Update User Information">
            <SampleForm />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;