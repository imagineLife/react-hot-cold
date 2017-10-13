export const MAKE_GUESS = 'MAKE_GUESS';
export const guessFromAction = guess => ({
	type: MAKE_GUESS,
	guess
})

export const NEW_GAME = 'NEW_GAME';
export const restartGame = newGame => ({
	type: NEW_GAME,
	newGame
})