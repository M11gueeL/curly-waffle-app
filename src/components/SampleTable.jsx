import React from 'react';

const data = [
  { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', role: 'Editor', status: 'Inactive' },
  { id: 3, name: 'Charlie Brown', role: 'Viewer', status: 'Active' },
];

function SampleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700"> {/* Encabezado adaptado */}
          <tr>
            {['ID', 'Name', 'Role', 'Status'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider
                           text-gray-500 dark:text-gray-300" // Texto adaptado
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`transition-colors duration-300
                          ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}
                          hover:bg-gray-100 dark:hover:bg-gray-700`} // Filas con bandas (zebra stripes) adaptadas
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                {/* Ejemplo de badges/chips adaptados */}
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                  ${row.role === 'Admin' ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100' :
                                    row.role === 'Editor' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100' :
                                    'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100'}`}
                >
                  {row.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                  ${row.status === 'Active' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100' :
                                    'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100'}`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SampleTable;