function skillsMember(){
    return {
        retrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: true,
        scope: {
            member: '='
        }
    };
}