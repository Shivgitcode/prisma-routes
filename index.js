const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const app = express()
const dotenv = require('dotenv')

dotenv.config()


const port = process.env.PORT

app.use(express.json())



app.post("/gist", async (req, res) => {
    try {
        const newGist = await prisma.gist.create({
            data: req.body
        })

        res.redirect("/gist")

    } catch (error) {
        res.send(err.message)

    }

})

app.get("/gist", async (req, res) => {
    try {
        const allGist = await prisma.gist.findMany({})
        res.send(allGist)

    } catch (error) {
        res.send(err.message)

    }
})

app.get("/gist/:id", async (req, res) => {
    try {
        const _id = parseInt(req.params.id)
        const foundGist = await prisma.gist.findFirst({
            where: {
                id: _id
            }
        })
        res.send(foundGist)
    } catch (error) {
        res.send(error.message)

    }
})

app.put("/gist/:id", async (req, res) => {
    try {
        const _id = parseInt(req.params.id)
        const updateGist = await prisma.gist.update({
            where: {
                id: _id
            },
            data: req.body
        })
        res.redirect("/gist")
        console.log(updateGist)

    } catch (error) {
        res.send(error.message)

    }
})

app.delete("/gist/:id", async (req, res) => {
    try {
        const _id = parseInt(req.params.id)
        await prisma.gist.delete({
            where: {
                id: _id
            }
        })

        res.redirect("/gist")
    } catch (error) {
        res.send(error.message)

    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

