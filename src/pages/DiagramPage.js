// src/pages/DiagramPage.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

Chart.register(...registerables);

const DiagramPage = () => {
  // Sample JSON data
  const jsonData = {
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli"],
    salesData: [65, 59, 80, 81, 56, 55, 40],
    categoryData: [12, 19, 3, 5, 2, 3]
  };

  // Data for the Bar chart
  const barData = {
    labels: jsonData.labels,
    datasets: [
      {
        label: 'Penjualan perbulan',
        data: jsonData.salesData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the Pie chart
  const pieData = {
    labels: ['Kategori A', 'Kategori B', 'Kategori C', 'Kategori D', 'Kategori E', 'Kategori F'],
    datasets: [
      {
        label: 'Categories',
        data: jsonData.categoryData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Penjualan dan Kategori</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Penjualan perbulan</h3>
                </div>
                <div className="card-body">
                  <Bar data={barData} options={{ responsive: true }} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Kategori</h3>
                </div>
                <div className="card-body">
                  <Pie data={pieData} options={{ responsive: true }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagramPage;
