const Profile = require('../model/Profile')
module.exports = {
    async index(req, res){
        return res.render('profile', { profile: await Profile.get() })
    },

    async update(req, res){
        const data = req.body
        const weekPerYear = 52
        const weekPerMonth = (weekPerYear - data["days-per-week"]) / 12
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        const monthlyTotalHours = weekPerMonth * weekTotalHours
        const valueHour = data["monthly-budget"] / monthlyTotalHours
        const profile = await Profile.get()
        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        })
        return res.redirect('/profile')
    }
}