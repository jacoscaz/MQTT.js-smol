import type { TimerVariant } from './shared'

// dont directly assign globals to class props otherwise this throws in web workers: Uncaught TypeError: Illegal invocation
// See: https://stackoverflow.com/questions/9677985/uncaught-typeerror-illegal-invocation-in-chrome

export interface Timer {
	set: typeof setInterval
	clear: typeof clearInterval
}

const nativeTimer: Timer = {
	set: setInterval,
	clear: clearInterval,
}

const getTimer = (variant: TimerVariant): Timer => {
	return nativeTimer
}

export default getTimer
