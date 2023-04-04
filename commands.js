db.friends.aggregate([
    {_id: { ag {$unwind: "$hobbies"},
  { $group:e: "$age"},allHobbies: {$addToSet: "$hobbies"}}}
]).pretty()