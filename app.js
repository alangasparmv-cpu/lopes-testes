
/* Lopes Serviços Mecânicos - versão corrigida */

const APP = {
  supabaseUrl: "https://euoetxrcwzkogtdbuiqj.supabase.co",
  supabaseAnonKey: "sb_publishable_q87P7Cy6GQHh6wNxtOOSZA_CwLXiFVN",
  storageKey: "lopes_mecanica_teste_state_v1",
  pinKey: "lopes_mecanica_teste_pin_v1",
  rememberEmailKey: "lopes_teste_email_v1",
  rememberPassKey: "lopes_teste_pass_v1",
};

const $ = (id) => document.getElementById(id) || null;

function setText(id, text){
  const el = document.getElementById(id);
  if(el){
    el.textContent = text;
  }
}

console.log("Sistema carregado corretamente");
