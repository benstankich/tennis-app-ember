import Typicode from './typicode';

export default Typicode.extend({
	pathForType() {
		return 'players';
		// return 'users?is_coach=0';
	}
});