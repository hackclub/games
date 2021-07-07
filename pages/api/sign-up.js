export default async (req, res) => {

  const { WebClient } = require('@slack/web-api')

  const AirtablePlus = require('airtable-plus')

  const airtable = new AirtablePlus({
    baseID: 'appM2tajzzNei6tYe',
    apiKey: process.env.AIRTABLE_TICKETS_TOKEN,
    tableName: 'Participants'
  })

  const token = process.env.SLACK_TOKEN

  const web = new WebClient(token)

  let details = await web.users.info({
    user: req.query.username
  })

  let registration = await airtable.create({'Name': details.user.real_name, 'Email': details.user.profile.email, 'Slack ID': details.user.id, 'Pronouns': details.user.profile.pronouns})

  res.json(registration)

}