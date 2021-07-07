export default async (req, res) => {
  console.log(req.query)
  const { WebClient } = require('@slack/web-api')

  const token = process.env.SLACK_TOKEN

  const web = new WebClient(token)

  let details = await web.users.info({
    user: req.query.username
  })

}