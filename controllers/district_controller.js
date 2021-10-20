const districtModel = require("../models/district_model");

exports.addDistrict = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.parms);
    const _district = stateModel(req.body);
    await _district.save();
    res.status(201).json({
      status: 1,
      message: "District Added Successfully!",
      data: _district,
    });
  } catch (e) {
    // console.log(e);
    //res.status(400).send(error);
    next(e);
  }
};
