import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function AdminLogin(){
  const [form,setForm]=useState({username:'admin',password:''});
  const nav = useNavigate();
  function submit(e){
    e.preventDefault();
    // simple login: call backend to verify and receive token (here we use basic auth and store a flag)
    fetch('/api/admin/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    }).then(async r=>{
      if(r.ok){ const j=await r.json(); localStorage.setItem('adminToken', j.token); nav('/admin/dashboard'); }
      else alert('Login failed');
    })
  }
  return (
    <div style={{maxWidth:420}}>
      <h2>Admin Login</h2>
      <form onSubmit={submit}>
        <input value={form.username} onChange={e=>setForm({...form,username:e.target.value})} required />
        <input type='password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
