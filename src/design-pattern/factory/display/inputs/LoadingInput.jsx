import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';
import InputDate from '../../../../ui/input/InputDate';

import Loading from '../../construction/loading/Loading';

function LoadingInput(props) {
  const { type, index, updateIndex, updateDisplay, display, construction } =
    props;
  const [date, setDate] = useState(new Date());
  const [workerCount, setWorkerCount] = useState(0);
  const [wage, setWage] = useState(0);
  const [medium, setMedium] = useState('');
  const [material, setMaterial] = useState('');

  const onAddLoading = () => {
    let i = index === 0 ? 1 : index;
    if (index !== 0) {
      i += 1;
    }
    const loading = (
      <Loading
        key={i}
        {...construction.addTypeOfExpense(type, {
          index: i,
          date,
          workerCount,
          wage,
          medium,
          material
        })}
      />
    );
    const row = display;
    row.push(loading);
    updateDisplay(row);
    updateIndex(i);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <div className={props.classes.tMargin}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <InputDate
                name="date"
                value={date}
                label="Date"
                setValue={(value) => setDate(value)}
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                name="workerCount"
                value={workerCount}
                label="Worker Count"
                setValue={(value) => setWorkerCount(value)}
              />
            </Grid>
            <Grid item xs={4}>
              <InputNumber
                name="wage"
                value={wage}
                label="Wage"
                setValue={(value) => setWage(value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <InputText
                name="medium"
                value={medium}
                label="Medium"
                setValue={(value) => setMedium(value)}
              />
            </Grid>
            <Grid item xs={4}>
              <InputText
                name="material"
                value={material}
                label="Material"
                setValue={(value) => setMaterial(value)}
              />
            </Grid>
            <Grid item xs={4}>
              &nbsp;
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={() => onAddLoading()}
                color="primary"
                size="small"
              >
                Add
              </Button>
            </Grid>
            <Grid item xs={8}>
              &nbsp;
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

LoadingInput.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  updateIndex: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
  display: PropTypes.array.isRequired,
  construction: PropTypes.object.isRequired
};
export default LoadingInput;
