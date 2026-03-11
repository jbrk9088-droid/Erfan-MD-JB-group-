export default function handler(req, res) {

const { server } = req.query

const randomUsers = Math.floor(Math.random() * 30)

res.status(200).json({
server: server,
count: randomUsers,
limit: 50
})

}
