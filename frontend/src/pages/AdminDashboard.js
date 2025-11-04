import React, {useEffect,useState} from 'react';
export default function AdminDashboard(){
  const token = localStorage.getItem('adminToken');
  if(!token) return <div>Please login as admin.</div>;
  const headers = { 'Authorization': 'Bearer '+token, 'Content-Type':'application/json' };
  const [leads,setLeads]=useState([]);
  const [services,setServices]=useState([]);
  const [prices,setPrices]=useState([]);
  const [portfolio,setPortfolio]=useState([]);

  useEffect(()=>{ fetch('/api/admin/leads',{headers}).then(r=>r.json()).then(setLeads) },[]);
  useEffect(()=>{ fetch('/api/admin/services',{headers}).then(r=>r.json()).then(setServices) },[]);
  useEffect(()=>{ fetch('/api/admin/prices',{headers}).then(r=>r.json()).then(setPrices) },[]);
  useEffect(()=>{ fetch('/api/admin/portfolio',{headers}).then(r=>r.json()).then(setPortfolio) },[]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className='admin-box'>
        <h3>Leads</h3>
        <button onClick={()=>{
          fetch('/api/admin/leads/duplicates',{headers}).then(r=>r.json()).then(d=>alert(JSON.stringify(d)));
        }}>Show duplicate emails / phones</button>
        <div style={{maxHeight:240,overflow:'auto'}}>
          {leads.map(l=>(
            <div key={l.id} className='card'>
              <strong>{l.name}</strong><div>{l.email} | {l.phone}</div>
              <div>{l.message}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='admin-box'>
        <h3>Prices (editable)</h3>
        {prices.map(p=>(
          <div key={p.id} className='card'>
            <div><strong>{p.name}</strong></div>
            <div>₹{p.amount}</div>
          </div>
        ))}
      </div>

      <div className='admin-box'>
        <h3>Services (editable)</h3>
        {services.map(s=>(
          <div key={s.id} className='card'>{s.title}<div>{s.description}</div></div>
        ))}
      </div>

      <div className='admin-box'>
        <h3>Portfolio</h3>
        <div>Use backend admin endpoints to upload images/videos (multipart upload)</div>
        <div className='grid'>
          {portfolio.map(p=>(
            <div key={p.id} className='card'>
              {p.type==='VIDEO' ? <video width='100%' controls src={p.url} /> : <img src={p.url} style={{width:'100%'}}/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
