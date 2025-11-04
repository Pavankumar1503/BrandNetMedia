import React, {useState} from 'react';
export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',phone:'',message:''});
  const [status,setStatus] = useState('');
  function submit(e){
    e.preventDefault();
    fetch('/api/public/leads', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    }).then(r=>{
      if(r.ok){ setStatus('Submitted'); setForm({name:'',email:'',phone:'',message:''}) }
      else setStatus('Error');
    })
  }
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={submit} style={{maxWidth:600}}>
        <input placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input placeholder='Phone' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required />
        <textarea placeholder='Message' value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} required />
        <button type='submit'>Send</button>
      </form>
      <div>{status}</div>
    </div>
  );
}
