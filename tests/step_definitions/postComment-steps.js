const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')
const samplePage = client.page.samplePage()

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I navigate to the sample page$/, () => {
    return samplePage.navigate()
  })

  When(/^I enter a comment with wrong email "([^"]*)"$/, (email) => {
    return samplePage.enterEmail(email)
  })

  Then(/^I should get an error message$/, () => {
    return samplePage.expect.element('@errorMsg').text.to.be.visible
  })

  When(/^I click on back$/, () => {
    return samplePage.clickOnBack()
  })

  When(/^I enter a comment with correct email "([^"]*)"$/, (email) => {
    return samplePage.enterEmail(email)
  })

  Then(/^The comment should be received$/, () => {
    return samplePage.expect.element('@commentPosted').text.to.be.equal('Your comment is awaiting moderation.')
  })
})
