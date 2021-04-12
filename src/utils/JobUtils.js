module.exports = {
    remainingDays(job) {
        const remingsDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate = new Date(job["createdAt"])
        const dueDay = createdDate.getDate() + Number(remingsDays)
        const dueDateInMsec = createdDate.setDate(dueDay)
        
        const timeDiffInMsec = dueDateInMsec - Date.now()
        const dayInMsec = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMsec / dayInMsec)
    
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}