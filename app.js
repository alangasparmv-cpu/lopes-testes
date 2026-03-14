<!DOCTYPE html>
<html lang="pt-BR">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>Lopes Serviços Mecânicos</title>

<link rel="manifest" href="manifest.json">

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<style>

body{
font-family:Arial;
margin:0;
background:#111;
color:#fff;
}

header{
background:#000;
padding:15px;
display:flex;
align-items:center;
gap:10px;
}

header img{
height:40px;
}

main{
padding:20px;
}

button{
padding:10px 15px;
border:none;
background:#2bd576;
color:#000;
font-weight:bold;
cursor:pointer;
border-radius:6px;
}

button:hover{
opacity:0.9;
}

</style>

</head>

<body>

<header>
<img src="logo.png">
<h2>Lopes Serviços Mecânicos</h2>
</header>

<main>

<button id="btnNewClient">Novo Cliente</button>
<button id="btnNewVehicle">Novo Veículo</button>
<button id="btnNewOS">Nova OS</button>

</main>

<script defer src="app.js"></script>

</body>
</html>
