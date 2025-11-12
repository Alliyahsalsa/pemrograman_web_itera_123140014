import React from "react";
import { useBookStats } from "../../hooks/useBookStats"; 
import "./Stats.css";

function Stats() {
  const metrics = useBookStats(); 
  const { totalCount, ownedCount, readingCount, purchaseCount } = metrics; 

  return (
    <div className="metrics-dashboard"> 
      <h2 className="dashboard-title">Ringkasan Koleksi Buku</h2>
      <div className="metrics-grid">
        
        {/* Total Item */}
        <div className="stat-display total-count">
          <div className="icon-background">📊</div>
          <h3>Total Koleksi</h3>
          <p className="metric-value">{totalCount}</p>
        </div>
        
        {/* Dimiliki */}
        <div className="stat-display owned-count">
          <div className="icon-background">✅</div>
          <h3>Buku Dimiliki</h3>
          <p className="metric-value">{ownedCount}</p>
        </div>
        
        {/* Sedang Dibaca */}
        <div className="stat-display reading-count">
          <div className="icon-background">📖</div>
          <h3>Aktif Dibaca</h3>
          <p className="metric-value">{readingCount}</p>
        </div>
        
        {/* Akan Dibeli */}
        <div className="stat-display purchase-count">
          <div className="icon-background">🛒</div>
          <h3>Rencana Beli</h3>
          <p className="metric-value">{purchaseCount}</p>
        </div>
        
      </div>
    </div>
  );
}

export default Stats;