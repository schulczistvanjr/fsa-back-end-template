export const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: (reg, res) => {
        res.status(200).json({ message: 'Hello from Express!' })
    }
}