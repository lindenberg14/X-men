const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removeCharacteSelection();

        character.classList.add('selected');

        changeSelectedCharacterFullImage(character);

        changeSelectedCharacterName(character);

        changeSelectedCharacterDescription(character);

    })
})

function changeSelectedCharacterDescription(character) {
    const characterDescription = document.getElementById('character-description');
    characterDescription.innerText = character.getAttribute('data-description');
}

function changeSelectedCharacterName(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeSelectedCharacterFullImage(character) {
    const characterFullImage = document.querySelector('.character-full-image');
    const idCharacter = character.attributes.id.value;
    characterFullImage.src = `./src/images/card-${idCharacter}.png`;
}

function removeCharacteSelection() {
    const characterSelected = document.querySelector('.selected');
    characterSelected.classList.remove('selected');
}
