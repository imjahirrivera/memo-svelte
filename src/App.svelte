<script>
  import confetti from 'canvas-confetti';
  import { suffleCartas } from './helpers/suffleCartas';

  const iconoTema = ['😊', '🍎', '🦁']
  let tema = 0
  let cards = suffleCartas(tema);

  let cardSelect = [];
  let cartaEncontrada = [];
  let gameOver = false;

  // ---------------------- FUNCIONES ----------------------

  const jugarCarta = (index) => {
    if (
      cardSelect.length > 1 ||
      cartaEncontrada.includes(cards[index]) ||
      cardSelect.includes(index)
    )
      return;

    cardSelect = [...cardSelect, index];
    if (cardSelect.length == 2) {
      cards[cardSelect[0]] === cards[cardSelect[1]]
        ? (cartaEncontrada = [...cartaEncontrada, cards[index]])
        : null;
      setTimeout(() => (cardSelect = []), 500);
    }
    if (cartaEncontrada.length === cards.length / 2) {
      gameOver = true;
      confetti();
    }
  };

  const newGame = (opc) => {
    cardSelect = [];
    cartaEncontrada = [];
    gameOver = false;
    cards = suffleCartas(opc);
    tema = opc
  };

  // ---------------------- FUNCIONES ----------------------
</script>

<main class="container">
  <h1>Memo</h1>
  <div class="tema">
    {#each iconoTema as item, index}
       <span class={tema === index ? 'is-active' : ''} on:click={() => newGame(index)} on:keydown={() => newGame(index)}>{item}</span>
    {/each}
  </div>
  <div class="memo">
    {#each cards as card, index}
      <div
        class="carta"
        on:click={() => jugarCarta(index)}
        on:keydown={() => jugarCarta(index)}
      >
        {cardSelect.includes(index) || cartaEncontrada.includes(card)
          ? card
          : '?'}
      </div>
    {/each}
  </div>
  <div class={gameOver ? 'newGame' : 'hidden'}>
    <h1>Congratulation 🎉</h1>
    <p on:click={() => newGame(tema)} on:keydown={() => newGame(tema)}>New game</p>
  </div>
</main>

<style>
  .container {
    font-size: 5px;
    position: relative;
  }

  .hidden {
    display: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;
  }

  .tema {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 5em;
    margin: .2em;
  }
  span {
    cursor: pointer;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(100%);
  }
  .is-active {
    filter: grayscale(0%) !important;
    width: 2em;
    height: 2em;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;
  }
  h1 {
    font-size: 6em;
  }
  .memo {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(3, minmax(30%, 1fr));
    gap: 3em;
  }
  .carta {
    align-items: center;
    background-color: rgb(23, 57, 109);
    border-radius: 25%;
    border: 0.1em solid rgb(255, 238, 0);
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 10em;
    inline-size: 2em;
    text-align: center;
    aspect-ratio: 1/1;
  }
  .newGame {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8em;
  }
  .newGame h1 {
    font-size: 5em;
  }
  .newGame p {
    cursor: pointer;
    background-color: rgb(23, 57, 109);
    border: 0.2em solid rgb(255, 238, 0);
    font-size: 3em;
    padding: 1em 1.4em;
    border-radius: 2em;
  }
  @media (min-width: 768px) {
    .container {
      font-size: 10px;
    }
  }
  @media (min-width: 992px) {
    .memo {
      margin-top: 7em;
      max-width: 125em;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
      gap: 5%;
    }
    .carta {
      align-items: center;
      background-color: rgb(23, 57, 109);
      border-radius: 25%;
      border: 0.08em solid rgb(255, 238, 0);
      cursor: pointer;
      display: flex;
      justify-content: center;
      font-size: 12em;
      inline-size: 2em;
      text-align: center;
      aspect-ratio: 1/1;
    }
  }
</style>
