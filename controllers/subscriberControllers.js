const { Subscriber } = require('../models')
const subscriberSchema = require('../models/subscriber')

const getSubscriber = async (req, res) => {
  const subscriber = await Subscriber.find({})
  res.json(subscriber)
}

const getSubscriberById = async (req, res) => {
  try {
    const { id } = req.params
    const subscriber = await Subscriber.findById(id)
    if(!suscriber) throw Error('Subscriber not found')
    res.json(subscriber)
  } catch (e){
    console.log(e)
    res.send('Subscriber not found')
  }
}

const createSubscriber = async (req, res) => {
  try {
      const subscriber = await new Subscriber(req.body)
      await subscriber.save()
      return res.status(201).json({
          subscriber,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

const updateSubscriberById = async (req, res) => {
  try {
      const { id } = req.params;
      const subscriber = await Subscriber.findByIdAndUpdate(id, req.body, { new: true })
          // if (error) {
          //     res.status(500).send(error);
          // }
          if (!subscriber) {
              res.status(500).send('Subscriber not found!');
          }
          return res.status(200).json(subscriber);
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteSubscriberById = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Subscriber.findByIdAndDelete(id)
    if(!subscriber) throw Error('Subscriber not found')
    res.json('Subscriber not found')
} catch (e){
    console.log(e)
    res.send('Subscriber not deleted')
  }
}



module.exports = {
  getSubscriber,
  getSubscriberById,
  createSubscriber,
  deleteSubscriberById,
  updateSubscriberById,   //Doesn't have to be named this way
}