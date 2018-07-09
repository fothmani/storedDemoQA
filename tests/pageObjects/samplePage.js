module.exports = {

  url () { return this.api.launchUrl + '/sample-page/' },

  elements: {
    comment: '#comment',
    name: 'input[id="author"]',
    email: 'input[id="email"]',
    form: '.brutusin-form',
    postCommentBtn: '.submit',
    errorMsg: 'p:nth-of-type(2)',
    backLink: 'a',
    commentPosted: '.comment_container.group em'
  },

  commands: [{

    enterEmail (email) {
      this
        .waitForElementVisible('@comment')
        .clearValue('@comment')
        .setValue('@comment', 'This is a comment')
      this
        .waitForElementVisible('@name')
        .setValue('@name', 'fahmi')
      this
        .waitForElementVisible('@email')
        .clearValue('@email')
        .setValue('@email', email)
      this
        .waitForElementVisible('@postCommentBtn')
        .click('@postCommentBtn')
      return this
    },

    clickOnBack () {
      this
        .waitForElementVisible('@backLink', 5000)
        .click('@backLink')
      return this
    }
  }]
}
