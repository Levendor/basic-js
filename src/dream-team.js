const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let team = members.reduce(function (dreamTeam, member) {
		return typeof(member) == 'string' ? dreamTeam + member.trim()[0] : dreamTeam
	}, '');
	return team.toUpperCase().split('').sort().join('');
};
