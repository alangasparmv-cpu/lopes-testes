/* Lopes Serviços Mecânicos - PWA Offline + Sync Supabase */

const APP = {
  supabaseUrl: "https://euoetxrcwzkogtdbuiqj.supabase.co",
  supabaseAnonKey: "sb_publishable_q87P7Cy6GQHh6wNxtOOSZA_CwLXiFVN",
  storageKey: "lopes_mecanica_teste_state_v1",
  pinKey: "lopes_mecanica_teste_pin_v1",
  rememberEmailKey: "lopes_teste_email_v1",
  rememberPassKey: "lopes_teste_pass_v1",
};

function $(id){
  return document.getElementById(id);
}

function setText(id,text){
  const el = document.getElementById(id);
  if(el){
    el.textContent = text;
  }
}

const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString("pt-BR");
const todayISO = () => new Date().toISOString().slice(0,10);
const norm = (s) => (s||"").toString().trim();
const normPlaca = (p) => norm(p).toUpperCase().replace(/[^A-Z0-9]/g,"");
const money = (n) => (Number(n||0)).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const uuid = () => crypto.randomUUID();
