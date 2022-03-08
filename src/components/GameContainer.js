
function containerWebDev(root) {
    const containerWebDev = document.createElement('div');
    containerWebDev.setAttribute("id", "containerGameWebDev");
    root.appendChild(containerWebDev)
    return containerWebDev;
}

function containerPokemon(root) {
    const containerPokemon = document.createElement('div');
    containerPokemon.setAttribute("id", "containerGamePokemon");
    root.appendChild(containerPokemon);
    return containerPokemon;
}

function containerGhibli(root) {
    const containerGhibli = document.createElement('div');
    containerGhibli.setAttribute("id", "containerGameGhibli");
    root.appendChild(containerGhibli);
    return containerGhibli;
}

export {containerPokemon, containerWebDev, containerGhibli };