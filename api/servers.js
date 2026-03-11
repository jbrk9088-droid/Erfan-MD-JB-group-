export default function handler(req, res) {

const servers = []

for (let i = 1; i <= 10; i++) {
servers.push({
id: "server" + i,
name: "Server " + i
})
}

res.status(200).json({
servers: servers
})

}
