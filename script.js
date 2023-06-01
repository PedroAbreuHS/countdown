const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const aniversarioPedro = '29 dec 2023'

function countDown() {
    const dataAniversario = new Date(aniversarioPedro);
    const hoje = new Date();

    const segTotal = (dataAniversario - hoje)/1000;

    const finalDias = Math.floor((((segTotal / 60) / 60) / 24));
    const finalHoras = Math.floor((((segTotal / 60) / 60) / 24)) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = finalDias;
    horas.innerHTML = finalHoras;
    minutos.innerHTML = finalMinutos;
    segundos.innerHTML = finalSegundos;
}

countDown();
setInterval(countDown, 1000);