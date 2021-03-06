const stateModel = require("../models/state_model");

exports.addState = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.parms);
    const _state = stateModel(req.body);
    await _state.save();
    res.status(201).json({
      status: 1,
      message: "State Added Successfully!",
      data: _state,
    });
  } catch (e) {
    // console.log(e);
    //res.status(400).send(error);
    next(e);
  }
};

exports.deleteState = async (req, res, next) => {
  try {
    console.log(req.body);
    const id = req.query.stateID;
    if (!req.query.stateID) {
      res.status(404).json({
        status: 0,
        message: "Please provide stateID",
        data: {},
      });
    }
    const _state = await stateModel.findOneAndDelete({ _id: id });
    res.status(200).json({
      status: 1,
      message: "State Deleted Successfully!",
      data: _state,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

exports.getAllState = async (req, res, next) => {
  try {
    const match = {};

    if (req.query.isVisible) {
      match.isVisible = req.query.isVisible === "true";
    }
    const _state = await stateModel.find(match);
    res.status(200).json({
      status: 1,
      message: "State List",
      data: _state,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};
