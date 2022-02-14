import animal from "../models/animal.js";

const registerAnimal = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.race ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.health ||
    !req.body.age    ||
    !req.body.type
  )
    return res.status(400).send({ message: "Incomplete Data" });

  let schema = new animal({
    name: req.body.name,
    race: req.body.race,
    weight: req.body.weight,
    height: req.body.height,
    health: req.body.health,
    type: req.body.type,
    dbStatus: true,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register animal" });
  res.status(200).send({ result });
};

export default { registerAnimal };
