'use strict';

module.exports = (sequelize, DataTypes) => {
  const Gauge = sequelize.define('Gauge', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    stationName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    geometry: {
      type: DataTypes.JSONB, // eslint-disable-line
      allowNull: true,
    },
    unimpairedStartYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    unimpairedEndYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Avg: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    Std: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    CV: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    SP_Tim: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    SP_Mag: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    SP_Dur: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    SP_ROC: {type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), allowNull: true}, //eslint-disable-line
    DS_Tim: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    DS_Mag_10: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    DS_Mag_50: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    DS_Dur_WSI: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    DS_Dur_WS: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    DS_No_Flow: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    WSI_Tim: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    WSI_Mag: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Wet_Tim: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    WSI_Dur: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Wet_BFL_Mag: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Mag_2: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Tim_2: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Dur_2: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Fre_2: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Mag_5: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Tim_5: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Dur_5: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Fre_5: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Tim_10: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Dur_10: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Fre_10: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Mag_20: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Tim_20: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Dur_20: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Fre_20: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Mag_50: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Tim_50: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Dur_50: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
    Peak_Fre_50: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), //eslint-disable-line
      allowNull: true,
    },
  });
  Gauge.associate = models => {
    Gauge.belongsTo(models.Classification, {
      foreignKey: 'classId',
      as: 'classes',
    });
    Gauge.hasMany(models.AllYear, {
      foreignKey: 'gaugeId',
      as: 'allYears',
    });
    Gauge.hasMany(models.Fall, {
      foreignKey: 'gaugeId',
      as: 'falls',
    });
    Gauge.hasMany(models.FallWinter, {
      foreignKey: 'gaugeId',
      as: 'fallWinters',
    });
    Gauge.hasMany(models.Spring, {
      foreignKey: 'gaugeId',
      as: 'springs',
    });
    Gauge.hasMany(models.Summer, {
      foreignKey: 'gaugeId',
      as: 'summers',
    });
    Gauge.hasMany(models.Winter, {
      foreignKey: 'gaugeId',
      as: 'winters',
    });
    Gauge.hasMany(models.Year, {
      foreignKey: 'gaugeId',
      as: 'years',
    });
    Gauge.hasMany(models.Hydrograph, {
      foreignKey: 'gaugeId',
      as: 'hydrographs',
    });
    Gauge.hasMany(models.Condition, {
      foreignKey: 'gaugeId',
      as: 'conditions',
    });
  };
  return Gauge;
};
