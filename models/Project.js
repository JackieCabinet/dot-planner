'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    Geometry: DataTypes.JSONB,
    Fund_St: DataTypes.STRING,
    Legacy_ID: DataTypes.INTEGER,
    Lead_Ag: DataTypes.STRING,
    Proj_Title: DataTypes.STRING,
    Proj_Ty: DataTypes.STRING,
    Proj_Desc: DataTypes.STRING,
    Contact_info: DataTypes.JSONB,
    More_info: DataTypes.STRING,
    Intersections: DataTypes.JSONB,
    Current_Status: DataTypes.STRING,
    Proj_Man: DataTypes.STRING,
    CD: DataTypes.INTEGER,
    Access: DataTypes.STRING,
    Dept_Proj_ID: DataTypes.STRING,
    Other_ID: DataTypes.STRING,
    Total_bgt: DataTypes.DECIMAL,
    Grant: DataTypes.DECIMAL,
    Other_funds: DataTypes.DECIMAL,
    Prop_c: DataTypes.DECIMAL,
    Measure_r: DataTypes.DECIMAL,
    Gas_Tax: DataTypes.DECIMAL,
    General_fund: DataTypes.DECIMAL,
    Issues: DataTypes.STRING,
    Deobligation: DataTypes.STRING,
    Explanation: DataTypes.STRING,
    Constr_by: DataTypes.STRING,
    Info_source: DataTypes.STRING,
    Grant_Cat: DataTypes.STRING,
    Grant_Cycle: DataTypes.STRING,
    Est_Cost: DataTypes.DECIMAL,
    Fund_Rq: DataTypes.DECIMAL,
    Lc_match: DataTypes.DECIMAL,
    Match_Pt: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};
