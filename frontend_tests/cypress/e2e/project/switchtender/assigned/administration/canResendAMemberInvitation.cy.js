import projects from '../../../../../fixtures/projects/projects.json'

const currentProject = projects[1]

describe('I can go to administration area of a project and send back an invite for a member', () => {
    beforeEach(() => {
        cy.login("jean");
    })

    it('goes to the administration tab of a project and send back the member invitation', () => {

        cy.visit(`/project/${currentProject.pk}`)
        cy.get('.project-navigation').children('li').contains('Administration').click({ force: true })
        cy.url().should('include', '/administration')

        cy.contains('Inviter un membre de la collectivité').click({ force: true });

        cy.get('#invite-member-modal').get('#invite-email')
            .type('collectivitybyjean@test.fr', { force: true })
            .should('have.value', 'collectivitybyjean@test.fr')

        cy.get('#invite-member-modal').get('#invite-message')
            .type(`Bonjour collectivitybyjean@test.fr, je t'invite à conseiller mon projet ${currentProject.fields.name}`, { force: true })
            .should('have.value', `Bonjour collectivitybyjean@test.fr, je t'invite à conseiller mon projet ${currentProject.fields.name}`)

        cy.get('#invite-member-modal').contains("Envoyer l'invitation").click({ force: true })

        cy.contains('Invitations participant·e·s').siblings('ul').children('li').contains("collectivitybyjean@test.fr")

        cy.contains('Invitations participant·e·s').siblings('ul').children('li').contains("collectivitybyjean@test.fr").parent().parent().parent().siblings().find('#resend-invite-member').click({force:true})
        cy.contains(`Collectivitybyjean@test.fr a bien été relancé par courriel.`)
    })
})
