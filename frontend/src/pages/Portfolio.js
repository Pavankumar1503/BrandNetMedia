import React, {useEffect,useState} from 'react';
export default function Portfolio(){
  const [items,setItems]=useState([]);
  useEffect(()=>{ fetch('/api/public/portfolio').then(r=>r.json()).then(setItems) },[]);
  return (
    <div>
      <h2>Portfolio</h2>
      <div className='grid'>
        {items.map(it=>(
          <div className='card' key={it.id}>
            {it.type==='VIDEO' ? (
              <video width='100%' controls src={it.url} />
            ) : (
              <img src={it.url} alt={it.title} style={{width:'100%'}}/>
            )}
            <p>{it.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
