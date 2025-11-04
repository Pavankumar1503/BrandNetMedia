import React, {useEffect,useState} from 'react';
export default function Prices(){
  const [prices,setPrices] = useState([]);
  useEffect(()=>{ fetch('/api/public/prices').then(r=>r.json()).then(setPrices) },[]);
  return (
    <div>
      <h2>Prices</h2>
      <div className='grid'>
        {prices.map(p=>(
          <div className='card' key={p.id}>
            <h4>{p.name}</h4>
            <p>Price: ₹{p.amount}</p>
            <p>{p.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
