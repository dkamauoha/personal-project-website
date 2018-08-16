module.exports = {
    getAllAppointments: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_all_events([req.session.user.auth_id])
            .then((events) => res.status(200).send(events))
            .catch(err => {
                console.log(err);
                res.status(500).send('Unable to find appointments');
            })
    }
}