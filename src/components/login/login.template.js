export default `
    <div class="content" id="content">
        <form class="login" id="form">
            <label>Введи своё имя</label>
            <input type="text" class="input-name-field" id="input-text" pattern=".{1,}" required autocomplete="off" autofocus>
            <button id="btn" class="start-game">Старт (Enter)</button>
        </form>
        <button id="records" class="records-game">Рекорды (Shift)</button> 
    </div>
    `;



